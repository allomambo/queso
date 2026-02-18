import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoSelect from "./QuesoSelect.vue";

describe("QuesoSelect", () => {
    const props = {
        name: "select-name",
        label: "Genre musical",
        modelValue: "",
        options: [
            { value: "1", label: "Heavy Metal" },
            { value: "2", label: "Classique" },
            { value: "3", label: "Funk and Disco" },
        ],
    };

    test("renders correctly the object", () => {
        const wrapper = mount(QuesoSelect, { props });
        expect(wrapper.vm).toBeTruthy();
    });

    test("passes isDisabled to QuesoDropdown", () => {
        const wrapper = mount(QuesoSelect, {
            props: {
                ...props,
                isDisabled: true,
            },
        });

        const dropdown = wrapper.findComponent({ name: "QuesoDropdown" });
        expect(dropdown.props("isDisabled")).toBe(true);
    });

    test("applies is-disabled class to field when disabled", () => {
        const wrapper = mount(QuesoSelect, {
            props: {
                ...props,
                isDisabled: true,
            },
        });

        const field = wrapper.findComponent({ name: "QuesoField" });
        expect(field.classes()).toContain("is-disabled");
    });

    test("applies has-value class when model has a selected value", () => {
        const wrapper = mount(QuesoSelect, {
            props: {
                ...props,
                modelValue: "1",
            },
        });

        const field = wrapper.findComponent({ name: "QuesoField" });
        expect(field.classes()).toContain("has-value");
    });

    test("does not apply has-value class when model is empty", () => {
        const wrapper = mount(QuesoSelect, {
            props: {
                ...props,
                modelValue: "",
            },
        });

        const field = wrapper.findComponent({ name: "QuesoField" });
        expect(field.classes()).not.toContain("has-value");
    });

    // Hiding it for now
    // test("renders correctly the label", () => {
    //     const wrapper = shallowMount(QuesoSelect, {
    //         propsData: data,
    //     });
    //     const label = wrapper.findComponent(".dropdown__popover__options-list__item:first-child");
    //     // expect(label.exists()).toBe(true);
    //     // console.log(label);
    //     // expect(label.text()).toMatch(data.options[0].data.label);
    // });
});
