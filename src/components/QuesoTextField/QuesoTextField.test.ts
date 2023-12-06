import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoTextField from "./QuesoTextField.vue";

describe("QuesoTextField", () => {
    test("renders correctly the object", () => {
        const data = {
            name: "field-name",
        };

        const wrapper = shallowMount(QuesoTextField, {
            props: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });

    // test if the label is rendered correctly
    test("renders correctly the label", () => {
        const data = {
            label: "field-label",
        };

        const wrapper = mount(QuesoTextField, {
            props: data,
        });
        expect(wrapper.find(".queso-field__label").text()).toBe(data.label);
    });

    // test if the input is rendered correctly
    test("renders correctly the input", () => {
        const data = {
            name: "field-name",
        };

        const wrapper = mount(QuesoTextField, {
            props: data,
        });
        expect(wrapper.find(".queso-field__input").exists()).toBe(true);
    });
});
