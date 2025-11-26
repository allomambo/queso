import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoCheckbox from "./QuesoCheckbox.vue";

describe("QuesoCheckbox", () => {
    test("renders correctly the object", () => {
        const data = {
            name: "field-name",
        };

        const wrapper = shallowMount(QuesoCheckbox, {
            props: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });

    test("renders correctly the label", () => {
        const data = {
            name: "field-name",
            boxLabel: "field-label",
        };

        const wrapper = mount(QuesoCheckbox, {
            props: data,
        });
        expect(wrapper.find(".queso-checkbox__label__text").text()).toBe(data.boxLabel);
    });

    test("renders correctly the checkbox symbol", () => {
        const data = {
            name: "field-name",
        };

        const wrapper = mount(QuesoCheckbox, {
            props: data,
        });
        expect(wrapper.find(".queso-checkbox__box__symbol").exists()).toBe(true);
    });
});
