import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoPassword from "./QuesoPassword.vue";

describe("QuesoPassword", () => {
    const props = {
        name: "password-name",
        label: "Password label",
        modelValue: "Password model value",
    };

    test("renders correctly the object", () => {
        const wrapper = shallowMount(QuesoPassword, {
            props,
        });
        expect(wrapper.vm).toBeTruthy();
    });

    test("renders correctly the label", () => {
        const wrapper = mount(QuesoPassword, {
            props,
        });
        expect(wrapper.find(".queso-field__label").text()).toBe(props.label);
    });

    test("renders correctly the input", () => {
        const wrapper = mount(QuesoPassword, {
            props,
        });
        expect(wrapper.find(".queso-field__input").exists()).toBe(true);
    });
});
