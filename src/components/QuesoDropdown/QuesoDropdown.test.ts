import { defineComponent, h, nextTick } from "vue";
import { mount, shallowMount } from "@vue/test-utils";
import { afterEach, describe, expect, test, vi } from "vitest";
import { getAxeViolations } from "../../../tests/axe";
import { renderAndHydrate } from "../../../tests/ssr";
import QuesoDropdown from "./QuesoDropdown.vue";

import type { VueWrapper } from "@vue/test-utils";

describe("QuesoDropdown", () => {
    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ];

    const fruits = [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "blueberry", label: "Blueberry" },
        { value: "cherry", label: "Cherry" },
        { value: "eclair", label: "Éclair" },
    ];

    const wrappers: VueWrapper[] = [];

    // Mount attached to the document so focus and axe work, with a working v-model
    const mountDropdown = (props: Record<string, unknown> = {}) => {
        const wrapper: VueWrapper = mount(QuesoDropdown, {
            props: {
                options: fruits,
                modelValue: [],
                "onUpdate:modelValue": (value: string[]) => wrapper.setProps({ modelValue: value }),
                ...props,
            },
            attachTo: document.body,
        });
        wrappers.push(wrapper);
        return wrapper;
    };

    afterEach(() => {
        wrappers.splice(0).forEach((wrapper) => wrapper.unmount());
        vi.useRealTimers();
    });

    const getSelector = (wrapper: VueWrapper) => wrapper.find(".queso-dropdown__selector");
    const getListbox = (wrapper: VueWrapper) => wrapper.find('[role="listbox"]');
    const press = (wrapper: VueWrapper, key: string, init: KeyboardEventInit = {}) =>
        getSelector(wrapper).trigger("keydown", { key, ...init });
    const isOpen = (wrapper: VueWrapper) => wrapper.classes().includes("is-dropdown-open");

    // Index of the option referenced by aria-activedescendant, or null
    const getFocusedIndex = (wrapper: VueWrapper): number | null => {
        const id = getSelector(wrapper).attributes("aria-activedescendant");
        if (!id) return null;
        const option = wrapper.find(`[id="${id}"]`);
        expect(option.exists()).toBe(true);
        return wrapper.findAll('[role="option"]').findIndex((item) => item.element === option.element);
    };

    test("renders correctly the object", () => {
        const wrapper = shallowMount(QuesoDropdown, {
            props: { options },
        });
        expect(wrapper.vm).toBeTruthy();
    });

    test("has tabindex 0 when not disabled", () => {
        const wrapper = mount(QuesoDropdown, {
            props: { options },
        });

        const selector = wrapper.find(".queso-dropdown__selector");
        expect(selector.attributes("tabindex")).toBe("0");
    });

    test("has tabindex -1 when disabled", () => {
        const wrapper = mount(QuesoDropdown, {
            props: { options, isDisabled: true },
        });

        const selector = wrapper.find(".queso-dropdown__selector");
        expect(selector.attributes("tabindex")).toBe("-1");
    });

    test("does not open dropdown on click when disabled", async () => {
        const wrapper = mount(QuesoDropdown, {
            props: { options, isDisabled: true },
        });

        const selector = wrapper.find(".queso-dropdown__selector");
        await selector.trigger("click");

        expect(wrapper.classes()).not.toContain("is-dropdown-open");
    });

    test("does not open dropdown on space key when disabled", async () => {
        const wrapper = mount(QuesoDropdown, {
            props: { options, isDisabled: true },
        });

        const selector = wrapper.find(".queso-dropdown__selector");
        await selector.trigger("keydown", { key: " " });

        expect(wrapper.classes()).not.toContain("is-dropdown-open");
    });

    test("closes dropdown when disabled prop changes to true", async () => {
        const wrapper = mount(QuesoDropdown, {
            props: { options, isDisabled: false },
        });

        const selector = wrapper.find(".queso-dropdown__selector");
        await selector.trigger("click");
        expect(wrapper.classes()).toContain("is-dropdown-open");

        await wrapper.setProps({ isDisabled: true });
        expect(wrapper.classes()).not.toContain("is-dropdown-open");
    });

    test("applies is-disabled class when disabled", () => {
        const wrapper = mount(QuesoDropdown, {
            props: { options, isDisabled: true },
        });

        expect(wrapper.classes()).toContain("is-disabled");
    });

    test("aria-controls points to an element with a dropdown id", () => {
        const wrapper = mount(QuesoDropdown, { props: { options } });
        const controls = wrapper.find(".queso-dropdown__selector").attributes("aria-controls");

        expect(controls).toMatch(/^queso-dropdown__/);
        expect(wrapper.find(`[id="${controls}"]`).exists()).toBe(true);
    });

    test("two instances get distinct ids", () => {
        const wrapper = mount(
            defineComponent({
                render: () => h("div", [h(QuesoDropdown, { options }), h(QuesoDropdown, { options })]),
            }),
        );
        const ids = wrapper
            .findAll(".queso-dropdown__selector")
            .map((selector) => selector.attributes("aria-controls"));

        expect(ids).toHaveLength(2);
        expect(ids[0]).not.toBe(ids[1]);
    });

    test("hydrates server HTML without mismatch", async () => {
        const { logs, unmount } = await renderAndHydrate(QuesoDropdown, { options, modelValue: ["option2"] });

        expect(logs).toEqual([]);

        unmount();
    });

    describe("combobox semantics", () => {
        test("selector is a combobox controlling the listbox", () => {
            const wrapper = mountDropdown();
            const selector = getSelector(wrapper);
            const listbox = getListbox(wrapper);

            expect(selector.attributes("role")).toBe("combobox");
            expect(selector.attributes("aria-haspopup")).toBe("listbox");
            expect(selector.attributes("aria-expanded")).toBe("false");
            expect(selector.attributes("aria-controls")).toBe(listbox.attributes("id"));
            expect(selector.attributes("aria-activedescendant")).toBeUndefined();
            expect(selector.attributes("aria-disabled")).toBeUndefined();
            expect(listbox.classes()).toContain("queso-dropdown__popover__options-list");
            expect(listbox.attributes("aria-multiselectable")).toBeUndefined();
        });

        test("options have stable ids, aria-selected and no tabindex", () => {
            const wrapper = mountDropdown({ modelValue: ["banana"] });
            const listboxId = getListbox(wrapper).attributes("id");
            const items = wrapper.findAll('[role="option"]');

            expect(items).toHaveLength(fruits.length);
            items.forEach((item, index) => {
                expect(item.attributes("id")).toBe(`${listboxId}-option-${index}`);
                expect(item.attributes("tabindex")).toBeUndefined();
                expect(item.attributes("aria-selected")).toBe(index === 1 ? "true" : "false");
            });
            expect(items[1].classes()).toEqual(expect.arrayContaining(["is-option-active", "is-option-selected"]));
        });

        test("popover is inert while closed", async () => {
            const wrapper = mountDropdown();
            const popover = wrapper.find(".queso-dropdown__popover");

            expect(popover.attributes("inert")).toBeDefined();

            await getSelector(wrapper).trigger("click");
            expect(popover.attributes("inert")).toBeUndefined();
        });

        test("multiple listbox is multiselectable", () => {
            const wrapper = mountDropdown({ multiple: true });

            expect(getListbox(wrapper).attributes("aria-multiselectable")).toBe("true");
        });

        test("ariaLabel and ariaLabelledby name the combobox and the listbox", () => {
            const labelled = mountDropdown({ ariaLabelledby: "my-label" });
            expect(getSelector(labelled).attributes("aria-labelledby")).toBe("my-label");
            expect(getListbox(labelled).attributes("aria-labelledby")).toBe("my-label");

            const named = mountDropdown({ ariaLabel: "Fruits" });
            expect(getSelector(named).attributes("aria-label")).toBe("Fruits");
            expect(getListbox(named).attributes("aria-label")).toBe("Fruits");
        });

        test("disabled, required and error states are exposed", () => {
            const wrapper = mountDropdown({ isDisabled: true, isRequired: true, isError: true });
            const selector = getSelector(wrapper);

            expect(selector.attributes("aria-disabled")).toBe("true");
            expect(selector.attributes("aria-required")).toBe("true");
            expect(selector.attributes("aria-invalid")).toBe("true");
        });
    });

    describe("keyboard when closed", () => {
        test.each(["ArrowDown", "ArrowUp", "Enter", " "])("%o opens on the selected option", async (key) => {
            const wrapper = mountDropdown({ modelValue: ["cherry"] });

            await press(wrapper, key);

            expect(isOpen(wrapper)).toBe(true);
            expect(getSelector(wrapper).attributes("aria-expanded")).toBe("true");
            expect(getFocusedIndex(wrapper)).toBe(3);
            expect(wrapper.emitted("dropdown:open")).toHaveLength(1);
        });

        test("opens on the first option when nothing is selected", async () => {
            const wrapper = mountDropdown();

            await press(wrapper, "ArrowDown", { altKey: true });

            expect(isOpen(wrapper)).toBe(true);
            expect(getFocusedIndex(wrapper)).toBe(0);
        });

        test("Home and End open on the first and last option", async () => {
            const wrapper = mountDropdown({ modelValue: ["banana"] });

            await press(wrapper, "End");
            expect(getFocusedIndex(wrapper)).toBe(fruits.length - 1);

            await press(wrapper, "Escape");
            await press(wrapper, "Home");
            expect(getFocusedIndex(wrapper)).toBe(0);
        });

        test("Escape is left to parents", async () => {
            const wrapper = mountDropdown();
            const onWindowKeydown = vi.fn();
            window.addEventListener("keydown", onWindowKeydown);

            await press(wrapper, "Escape");

            window.removeEventListener("keydown", onWindowKeydown);
            expect(onWindowKeydown).toHaveBeenCalledTimes(1);
        });
    });

    describe("keyboard when open", () => {
        test("arrows move the focused option without wrapping", async () => {
            const wrapper = mountDropdown();
            await press(wrapper, "ArrowDown");

            await press(wrapper, "ArrowUp");
            expect(getFocusedIndex(wrapper)).toBe(0);

            await press(wrapper, "ArrowDown");
            expect(getFocusedIndex(wrapper)).toBe(1);

            await press(wrapper, "End");
            await press(wrapper, "ArrowDown");
            expect(getFocusedIndex(wrapper)).toBe(fruits.length - 1);

            await press(wrapper, "Home");
            expect(getFocusedIndex(wrapper)).toBe(0);
        });

        test("focused option gets is-option-focused and isFocused", async () => {
            const wrapper = mountDropdown();
            const withSlot = mount(QuesoDropdown, {
                props: { options: fruits },
                slots: {
                    popoverItem: `<template #popoverItem="{ label, isFocused }">{{ label }}:{{ isFocused }}</template>`,
                },
                attachTo: document.body,
            });
            wrappers.push(withSlot);

            await press(wrapper, "ArrowDown");
            await press(wrapper, "ArrowDown");
            const items = wrapper.findAll('[role="option"]');
            expect(items[1].classes()).toContain("is-option-focused");
            expect(items[0].classes()).not.toContain("is-option-focused");

            await press(withSlot, "ArrowDown");
            const slotItems = withSlot.findAll('[role="option"]');
            expect(slotItems[0].text()).toBe("Apple:true");
            expect(slotItems[1].text()).toBe("Banana:false");
        });

        test.each(["Enter", " "])("%o selects the focused option and closes", async (key) => {
            const wrapper = mountDropdown();
            await press(wrapper, "ArrowDown");
            await press(wrapper, "ArrowDown");

            await press(wrapper, key);

            expect(wrapper.props("modelValue")).toEqual(["banana"]);
            expect(isOpen(wrapper)).toBe(false);
            expect(getSelector(wrapper).attributes("aria-activedescendant")).toBeUndefined();
        });

        test("stayOpenOnSelection keeps the list open", async () => {
            const wrapper = mountDropdown({ stayOpenOnSelection: true });
            await press(wrapper, "ArrowDown");

            await press(wrapper, "Enter");

            expect(wrapper.props("modelValue")).toEqual(["apple"]);
            expect(isOpen(wrapper)).toBe(true);
        });

        test("multiple toggles options and stays open", async () => {
            const wrapper = mountDropdown({ multiple: true, modelValue: ["cherry"] });
            await press(wrapper, "Home");

            await press(wrapper, "Enter");
            await press(wrapper, "ArrowDown");
            await press(wrapper, " ");
            expect(wrapper.props("modelValue")).toEqual(["cherry", "apple", "banana"]);

            await press(wrapper, "Enter");
            expect(wrapper.props("modelValue")).toEqual(["cherry", "apple"]);
            expect(isOpen(wrapper)).toBe(true);
            expect(wrapper.findAll('[role="option"]')[1].attributes("aria-selected")).toBe("false");
        });

        test("Escape closes without reaching parents", async () => {
            const wrapper = mountDropdown();
            const onWindowKeydown = vi.fn();
            await press(wrapper, "ArrowDown");
            window.addEventListener("keydown", onWindowKeydown);

            await press(wrapper, "Escape");

            window.removeEventListener("keydown", onWindowKeydown);
            expect(isOpen(wrapper)).toBe(false);
            expect(onWindowKeydown).not.toHaveBeenCalled();
            expect(wrapper.emitted("dropdown:close")).toHaveLength(1);
        });

        test("Alt+ArrowUp closes without selecting", async () => {
            const wrapper = mountDropdown({ modelValue: ["apple"] });

            await press(wrapper, "ArrowDown");
            await press(wrapper, "ArrowDown");
            await press(wrapper, "ArrowUp", { altKey: true });

            expect(isOpen(wrapper)).toBe(false);
            expect(wrapper.props("modelValue")).toEqual(["apple"]);
        });

        test("Tab selects the highlighted option and closes", async () => {
            const wrapper = mountDropdown({ modelValue: ["apple"] });

            await press(wrapper, "ArrowDown");
            await press(wrapper, "ArrowDown");
            await press(wrapper, "Tab");

            expect(isOpen(wrapper)).toBe(false);
            expect(wrapper.props("modelValue")).toEqual(["banana"]);
        });

        test("Tab selects and closes even when stayOpenOnSelection is set", async () => {
            const wrapper = mountDropdown({ modelValue: ["apple"], stayOpenOnSelection: true });

            await press(wrapper, "ArrowDown");
            await press(wrapper, "ArrowDown");
            await press(wrapper, "Tab");

            expect(isOpen(wrapper)).toBe(false);
            expect(wrapper.props("modelValue")).toEqual(["banana"]);
        });

        test("Tab in multiple mode closes without toggling", async () => {
            const wrapper = mountDropdown({ multiple: true, modelValue: ["cherry"] });

            await press(wrapper, "Home");
            await press(wrapper, "Tab");

            expect(isOpen(wrapper)).toBe(false);
            expect(wrapper.props("modelValue")).toEqual(["cherry"]);
        });

        test("disabled ignores the keyboard", async () => {
            const wrapper = mountDropdown({ isDisabled: true });

            await press(wrapper, "ArrowDown");
            await press(wrapper, "b");

            expect(isOpen(wrapper)).toBe(false);
        });
    });

    describe("typeahead", () => {
        test("typing opens on the first matching option", async () => {
            const wrapper = mountDropdown();

            await press(wrapper, "c");

            expect(isOpen(wrapper)).toBe(true);
            expect(getFocusedIndex(wrapper)).toBe(3);
        });

        test("repeating a character cycles through matches", async () => {
            vi.useFakeTimers();
            const wrapper = mountDropdown();

            await press(wrapper, "b");
            expect(getFocusedIndex(wrapper)).toBe(1);
            await press(wrapper, "b");
            expect(getFocusedIndex(wrapper)).toBe(2);
            await press(wrapper, "b");
            expect(getFocusedIndex(wrapper)).toBe(1);
        });

        test("several characters refine the search, then the buffer resets", async () => {
            vi.useFakeTimers();
            const wrapper = mountDropdown();

            await press(wrapper, "b");
            await press(wrapper, "l");
            expect(getFocusedIndex(wrapper)).toBe(2);

            vi.advanceTimersByTime(500);
            await press(wrapper, "a");
            expect(getFocusedIndex(wrapper)).toBe(0);
        });

        test("matching ignores case and accents", async () => {
            const wrapper = mountDropdown();

            await press(wrapper, "E");

            expect(getFocusedIndex(wrapper)).toBe(4);
        });

        test("a space typed while searching is part of the search", async () => {
            vi.useFakeTimers();
            const wrapper = mountDropdown({ options: options });

            await press(wrapper, "o");
            await press(wrapper, "p");
            await press(wrapper, "t");
            await press(wrapper, "i");
            await press(wrapper, "o");
            await press(wrapper, "n");
            await press(wrapper, " ");
            await press(wrapper, "3");

            expect(getFocusedIndex(wrapper)).toBe(2);
            expect(isOpen(wrapper)).toBe(true);
            expect(wrapper.props("modelValue")).toEqual([]);
        });

        test("typing when closed starts from the selected option", async () => {
            const wrapper = mountDropdown({ modelValue: ["banana"] });

            await press(wrapper, "b");

            expect(getFocusedIndex(wrapper)).toBe(2);
        });
    });

    describe("pointer and focus", () => {
        test("clicking an option selects it", async () => {
            const wrapper = mountDropdown();
            await getSelector(wrapper).trigger("click");

            await wrapper.findAll('[role="option"]')[2].trigger("click");

            expect(wrapper.props("modelValue")).toEqual(["blueberry"]);
            expect(isOpen(wrapper)).toBe(false);
        });

        test("moving the pointer over an option focuses it while open", async () => {
            const wrapper = mountDropdown();
            const items = wrapper.findAll('[role="option"]');

            await items[2].trigger("pointermove");
            expect(getFocusedIndex(wrapper)).toBeNull();
            expect(items[2].classes()).not.toContain("is-option-focused");

            await getSelector(wrapper).trigger("click");
            await items[2].trigger("pointermove");

            expect(getFocusedIndex(wrapper)).toBe(2);
            expect(items[2].classes()).toContain("is-option-focused");
            expect(items[0].classes()).not.toContain("is-option-focused");
            expect(getSelector(wrapper).attributes("aria-activedescendant")).toBe(items[2].attributes("id"));
        });

        test("pressing the list does not move focus away from the combobox", () => {
            const wrapper = mountDropdown();
            const event = new MouseEvent("mousedown", { bubbles: true, cancelable: true });

            wrapper.findAll('[role="option"]')[0].element.dispatchEvent(event);

            expect(event.defaultPrevented).toBe(true);
        });

        test("opening with a click focuses the combobox", async () => {
            const wrapper = mountDropdown();

            await getSelector(wrapper).trigger("click");

            expect(document.activeElement).toBe(getSelector(wrapper).element);
        });

        test("focus leaving the dropdown closes it", async () => {
            const wrapper = mountDropdown();
            const outside = document.createElement("button");
            document.body.appendChild(outside);
            await getSelector(wrapper).trigger("click");

            await getSelector(wrapper).trigger("focusout", { relatedTarget: getListbox(wrapper).element });
            expect(isOpen(wrapper)).toBe(true);

            await getSelector(wrapper).trigger("focusout", { relatedTarget: null });
            expect(isOpen(wrapper)).toBe(true);

            await getSelector(wrapper).trigger("focusout", { relatedTarget: outside });
            expect(isOpen(wrapper)).toBe(false);

            outside.remove();
        });

        test("focus landing on the list goes back to the combobox", async () => {
            const wrapper = mountDropdown();

            (getListbox(wrapper).element as HTMLElement).focus();
            await nextTick();

            expect(document.activeElement).toBe(getSelector(wrapper).element);
        });

        test("focusSelector() focuses the combobox", () => {
            const wrapper = mountDropdown();

            (wrapper.vm as unknown as { focusSelector: () => void }).focusSelector();

            expect(document.activeElement).toBe(getSelector(wrapper).element);
        });

        test("clicking outside a closed dropdown emits nothing", async () => {
            const wrapper = mountDropdown();

            document.body.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true }));
            await nextTick();

            expect(wrapper.emitted("dropdown:close")).toBeUndefined();
        });
    });

    describe("axe", () => {
        test.each([
            ["closed", {}],
            ["open", { open: true }],
            ["multiple open", { open: true, multiple: true }],
        ])("has no ARIA violations (%s)", async (_, { open, ...props }) => {
            const wrapper = mountDropdown({ ariaLabel: "Fruits", modelValue: ["banana"], ...props });
            if (open) await press(wrapper, "ArrowDown");

            expect(await getAxeViolations(wrapper.element)).toEqual([]);
        });
    });
});
