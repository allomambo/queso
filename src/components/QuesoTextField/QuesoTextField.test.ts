import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoTextField from "./QuesoTextField.vue";

describe("QuesoTextField", () => {
    const props = {
        name: "textfield-name",
        label: "Textfield label",
        modelValue: "Textfield model value",
    };

    test("renders correctly the object", () => {
        const wrapper = shallowMount(QuesoTextField, {
            props,
        });
        expect(wrapper.vm).toBeTruthy();
    });

    test("renders correctly the label", () => {
        const wrapper = mount(QuesoTextField, {
            props,
        });
        expect(wrapper.find(".queso-field__label").text()).toBe(props.label);
    });

    test("renders correctly the input", () => {
        const wrapper = mount(QuesoTextField, {
            props,
        });
        expect(wrapper.find(".queso-field__input").exists()).toBe(true);
    });

    test("applies has-value class when model has content", () => {
        const wrapper = mount(QuesoTextField, {
            props: {
                name: "field-name",
                modelValue: "hello",
            },
        });
        const field = wrapper.findComponent({ name: "QuesoField" });
        expect(field.classes()).toContain("has-value");
    });

    test("does not apply has-value class when model is empty", () => {
        const wrapper = mount(QuesoTextField, {
            props: {
                name: "field-name",
                modelValue: "",
            },
        });
        const field = wrapper.findComponent({ name: "QuesoField" });
        expect(field.classes()).not.toContain("has-value");
    });

    test("does not apply has-value class when model has only whitespace", () => {
        const wrapper = mount(QuesoTextField, {
            props: {
                name: "field-name",
                modelValue: "   ",
            },
        });
        const field = wrapper.findComponent({ name: "QuesoField" });
        expect(field.classes()).not.toContain("has-value");
    });
});
