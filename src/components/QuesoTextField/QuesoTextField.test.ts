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

    test("renders correctly the label", () => {
        const data = {
            label: "field-label",
        };

        const wrapper = mount(QuesoTextField, {
            props: data,
        });
        expect(wrapper.find(".queso-field__label").text()).toBe(data.label);
    });

    test("renders correctly the input", () => {
        const data = {
            name: "field-name",
        };

        const wrapper = mount(QuesoTextField, {
            props: data,
        });
        expect(wrapper.find(".queso-field__input").exists()).toBe(true);
    });

    test("updates localType.value when .queso-text-field__password-toggle is clicked", async () => {
        const wrapper = mount(QuesoTextField, {
            props: {
                type: "password",
            },
        });

        const toggle = wrapper.find(".queso-text-field__password-toggle");
        await toggle.trigger("click");

        expect(wrapper.vm.localType.value).toBe("text");
    });
});
