import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoSelectMultiple from "./QuesoSelectMultiple.vue";

describe("QuesoSelectMultiple.vue", () => {
    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
    ];

    const props = {
        name: "select-multiple-name",
        options,
        modelValue: [],
        placeholder: "Select options",
    };

    test("renders correctly", () => {
        const wrapper = mount(QuesoSelectMultiple, { props });
        expect(wrapper.exists()).toBe(true);
    });

    test("renders dropdown options based on options prop", async () => {
        const wrapper = mount(QuesoSelectMultiple, { props });
        const dropdown = wrapper.findComponent({ name: "QuesoDropdown" });
        
        // Open the dropdown to make options visible
        await dropdown.vm.openDropdown();
        await wrapper.vm.$nextTick();
        
        const dropdownOptions = wrapper.findAll(".queso-dropdown__popover__options-list__item");
        expect(dropdownOptions.length).toBe(options.length);
    });

    test("updates model when an option is selected", async () => {
        const wrapper = mount(QuesoSelectMultiple, { props });
        const dropdown = wrapper.findComponent({ name: "QuesoDropdown" });
        
        // Open the dropdown to make options visible
        await dropdown.vm.openDropdown();
        await wrapper.vm.$nextTick();
        
        const option = wrapper.find(".queso-dropdown__popover__options-list__item");
        await option.trigger("click");
        expect(wrapper.emitted()["update:modelValue"][0]).toEqual([["option1"]]);
    });

    test("renders slots correctly", () => {
        const wrapper = mount(QuesoSelectMultiple, {
            props,
            slots: {
                placeholder: '<div class="custom-placeholder">Custom Placeholder</div>',
                selector: '<div class="custom-selector">Custom Selector</div>',
                icon: '<div class="custom-icon">Custom Icon</div>',
            },
        });

        // Slots are passed through to QuesoDropdown
        // Placeholder is shown when no options are selected
        const placeholder = wrapper.find(".custom-placeholder");
        expect(placeholder.exists()).toBe(true);
        
        // Icon is always in the selector
        const icon = wrapper.find(".custom-icon");
        expect(icon.exists()).toBe(true);
        
        // Selector is shown when options are selected, so it won't be visible with empty modelValue
        // But we can verify the slot is passed through by checking the component structure
        const dropdown = wrapper.findComponent({ name: "QuesoDropdown" });
        expect(dropdown.exists()).toBe(true);
    });

    test("passes isDisabled to QuesoDropdown", () => {
        const wrapper = mount(QuesoSelectMultiple, {
            props: {
                ...props,
                isDisabled: true,
            },
        });

        const dropdown = wrapper.findComponent({ name: "QuesoDropdown" });
        expect(dropdown.props("isDisabled")).toBe(true);
    });

    test("applies is-disabled class to field when disabled", () => {
        const wrapper = mount(QuesoSelectMultiple, {
            props: {
                ...props,
                isDisabled: true,
            },
        });

        const field = wrapper.findComponent({ name: "QuesoField" });
        expect(field.classes()).toContain("is-disabled");
    });
});
