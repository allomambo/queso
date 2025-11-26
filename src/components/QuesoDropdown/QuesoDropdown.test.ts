import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoDropdown from "./QuesoDropdown.vue";

describe("QuesoDropdown", () => {
    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ];

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
});
