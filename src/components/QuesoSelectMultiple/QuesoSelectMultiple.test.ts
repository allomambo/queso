import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoSelectMultiple from "./QuesoSelectMultiple.vue";

describe("QuesoSelectMultiple.vue", () => {
    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
    ];

    const props = {
        options,
        modelValue: [],
        placeholder: "Select options",
    };

    test("renders correctly", () => {
        const wrapper = mount(QuesoSelectMultiple, { props });
        expect(wrapper.exists()).toBe(true);
    });

    test("renders dropdown options based on options prop", () => {
        const wrapper = mount(QuesoSelectMultiple, { props });
        const dropdownOptions = wrapper.findAll(".queso-select__option");
        expect(dropdownOptions.length).toBe(options.length);
    });

    test("updates model when an option is selected", async () => {
        const wrapper = mount(QuesoSelectMultiple, { props });
        const option = wrapper.find(".queso-select__option");
        await option.trigger("click");
        expect(wrapper.emitted()["update:modelValue"][0]).toEqual([["option1"]]);
    });

    test("renders slots correctly", () => {
        const wrapper = mount(QuesoSelectMultiple, {
            props,
            slots: {
                placeholder: '<div class="placeholder">Custom Placeholder</div>',
                selector: '<div class="selector">Custom Selector</div>',
                icon: '<div class="icon">Custom Icon</div>',
            },
        });

        expect(wrapper.find(".placeholder").exists()).toBe(true);
        expect(wrapper.find(".selector").exists()).toBe(true);
        expect(wrapper.find(".icon").exists()).toBe(true);
    });
});
