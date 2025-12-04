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
});
