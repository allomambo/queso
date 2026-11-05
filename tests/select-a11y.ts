import { nextTick, type Component } from "vue";
import { mount, type VueWrapper } from "@vue/test-utils";
import { afterEach, describe, expect, test } from "vitest";
import { getAxeViolations } from "./axe";

/**
 * Accessibility tests shared by QuesoSelect and QuesoSelectMultiple.
 */
export function describeSelectAccessibility(component: Component, baseProps: Record<string, unknown>) {
    describe("accessibility", () => {
        const wrappers: VueWrapper[] = [];

        const mountSelect = (props: Record<string, unknown> = {}) => {
            const wrapper = mount(component, { props: { ...baseProps, ...props }, attachTo: document.body });
            wrappers.push(wrapper);
            return wrapper;
        };

        afterEach(() => {
            wrappers.splice(0).forEach((wrapper) => wrapper.unmount());
        });

        const getCombobox = (wrapper: VueWrapper) => wrapper.find('[role="combobox"]');
        const getNativeSelect = (wrapper: VueWrapper) => wrapper.find("select");
        const name = baseProps.name as string;

        test("combobox is labelled by the field label", () => {
            const wrapper = mountSelect({ label: "Music genre", ariaLabel: "Ignored" });
            const label = wrapper.find(".queso-field__label");

            expect(label.attributes("id")).toBe(`${name}-label`);
            expect(getCombobox(wrapper).attributes("aria-labelledby")).toBe(`${name}-label`);
            expect(getCombobox(wrapper).attributes("aria-label")).toBeUndefined();
            expect(wrapper.find('[role="listbox"]').attributes("aria-labelledby")).toBe(`${name}-label`);
        });

        test("without label, ariaLabel or ariaLabelledby name the combobox", () => {
            const named = mountSelect({ label: undefined, ariaLabel: "Music genre" });
            expect(named.find(".queso-field__label").exists()).toBe(false);
            expect(getCombobox(named).attributes("aria-label")).toBe("Music genre");

            const labelled = mountSelect({ label: undefined, ariaLabelledby: "external-label" });
            expect(getCombobox(labelled).attributes("aria-labelledby")).toBe("external-label");
        });

        test("required and error states reach the combobox", () => {
            const wrapper = mountSelect({ label: "Music genre", isRequired: true, isError: true });

            expect(getCombobox(wrapper).attributes("aria-required")).toBe("true");
            expect(getCombobox(wrapper).attributes("aria-invalid")).toBe("true");
            expect(wrapper.find(".queso-field__label__required").attributes("aria-hidden")).toBe("true");
        });

        test("native select stays in the form but is hidden from assistive technologies", () => {
            const wrapper = mountSelect({ label: "Music genre", isRequired: true });
            const select = getNativeSelect(wrapper);

            expect(select.attributes("id")).toBe(name);
            expect(select.attributes("name")).toBe(name);
            expect(select.attributes("aria-hidden")).toBe("true");
            expect(select.attributes("tabindex")).toBe("-1");
            expect(select.attributes("required")).toBeDefined();
            expect(wrapper.find(`label[for="${name}"]`).exists()).toBe(true);
        });

        test("focus reaching the native select moves to the combobox", async () => {
            const wrapper = mountSelect({ label: "Music genre" });

            (getNativeSelect(wrapper).element as HTMLSelectElement).focus();
            await nextTick();

            expect(document.activeElement).toBe(getCombobox(wrapper).element);
        });

        test("field is active while focus is inside the dropdown", async () => {
            const wrapper = mountSelect({ label: "Music genre" });
            const field = wrapper.find(".queso-field");
            const combobox = getCombobox(wrapper);
            const outside = document.createElement("button");
            document.body.appendChild(outside);

            await combobox.trigger("focusin");
            expect(field.classes()).toContain("is-active");

            await combobox.trigger("focusout", { relatedTarget: wrapper.find('[role="listbox"]').element });
            expect(field.classes()).toContain("is-active");

            await combobox.trigger("focusout", { relatedTarget: outside });
            expect(field.classes()).not.toContain("is-active");

            outside.remove();
        });

        test.each([
            ["with label", { label: "Music genre", isRequired: true }],
            ["with ariaLabel", { label: undefined, ariaLabel: "Music genre" }],
            ["open", { label: "Music genre", open: true }],
        ])("has no ARIA violations (%s)", async (_, { open, ...props }) => {
            const wrapper = mountSelect(props);
            if (open) await getCombobox(wrapper).trigger("keydown", { key: "ArrowDown" });

            expect(await getAxeViolations(wrapper.element)).toEqual([]);
        });
    });
}
