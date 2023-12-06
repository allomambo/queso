import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoCheckbox from "./QuesoCheckbox.vue";

describe("QuesoCheckbox", () => {
    test("renders correctly the object", () => {
        const data = {
            name: "field-name",
        };

        const wrapper = shallowMount(QuesoCheckbox, {
            propsData: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });

    test("renders correctly the label", () => {
        const data = {
            label: "field-label",
        };

        const wrapper = mount(QuesoCheckbox, {
            propsData: data,
        });
        expect(wrapper.find(".queso-checkbox__label__text").text()).toBe(data.label);
    });

    test("renders correctly the checkbox symbol", () => {
        const data = {
            name: "field-name",
        };

        const wrapper = mount(QuesoCheckbox, {
            propsData: data,
        });
        expect(wrapper.find(".queso-checkbox__box__symbol").exists()).toBe(true);
    });
});
