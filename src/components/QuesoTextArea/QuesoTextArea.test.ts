import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoTextArea from "./QuesoTextArea.vue";

describe("QuesoTextArea", () => {
    const props = {
        name: "text-area-name",
        label: "Text area label",
        modelValue: "Text area model value",
    };

    test("renders correctly the object", () => {
        const wrapper = shallowMount(QuesoTextArea, {
            props,
        });
        expect(wrapper.vm).toBeTruthy();
    });

    test("renders correctly the label", () => {
        const wrapper = mount(QuesoTextArea, {
            props,
        });
        expect(wrapper.find(".queso-field__label").text()).toBe(props.label);
    });

    test("renders correctly the input", () => {
        const wrapper = mount(QuesoTextArea, {
            props,
        });
        expect(wrapper.find(".queso-field__input").exists()).toBe(true);
    });
});
