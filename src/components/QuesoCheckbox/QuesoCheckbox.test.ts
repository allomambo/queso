import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoCheckbox from "./QuesoCheckbox.vue";

describe("QuesoCheckbox", () => {
    const props = {
        name: "checkbox-name",
        label: "Checkbox label",
        boxLabel: "Checkbox box label",
        modelValue: true,
    };

    test("renders correctly the object", () => {
        const wrapper = shallowMount(QuesoCheckbox, {
            props,
        });
        expect(wrapper.vm).toBeTruthy();
    });

    test("renders correctly the label", () => {
        const wrapper = mount(QuesoCheckbox, {
            props,
        });
        expect(wrapper.find(".queso-checkbox__label__text").text()).toBe(props.boxLabel);
    });

    test("renders correctly the checkbox symbol", () => {
        const wrapper = mount(QuesoCheckbox, {
            props,
        });
        expect(wrapper.find(".queso-checkbox__box__symbol").exists()).toBe(true);
    });
});
