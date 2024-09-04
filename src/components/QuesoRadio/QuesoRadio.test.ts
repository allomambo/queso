import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoRadio from "./QuesoRadio.vue";

describe("QuesoRadio.vue", () => {
    const choices = [
        { value: "choice1", label: "Choice 1" },
        { value: "choice2", label: "Choice 2" },
    ];

    const props = {
        choices,
        modelValue: "",
    };

    test("renders correctly", () => {
        const wrapper = mount(QuesoRadio, { props });
        expect(wrapper.exists()).toBe(true);
    });

    test("renders radio buttons based on choices prop", () => {
        const wrapper = mount(QuesoRadio, { props });
        const radioButtons = wrapper.findAll(".queso-radio__native");
        expect(radioButtons.length).toBe(choices.length);
    });

    test("updates model when a radio button is selected", async () => {
        const wrapper = mount(QuesoRadio, { props });
        const radioButton = wrapper.find(".queso-radio__native");
        await radioButton.setChecked();
        expect(wrapper.emitted()["update:modelValue"][0]).toEqual(["choice1"]);
    });

    test("renders slots correctly", () => {
        const wrapper = mount(QuesoRadio, {
            props,
            slots: {
                beforeLabel: '<div class="before-label">Before Label</div>',
                label: '<div class="label">Label</div>',
                required: '<div class="required">Required</div>',
                afterLabel: '<div class="after-label">After Label</div>',
                beforeInput: '<div class="before-input">Before Input</div>',
                input: '<div class="input">Input</div>',
                afterInput: '<div class="after-input">After Input</div>',
                error: '<div class="error">Error</div>',
            },
        });

        expect(wrapper.find(".before-label").exists()).toBe(true);
        expect(wrapper.find(".label").exists()).toBe(true);
        expect(wrapper.find(".required").exists()).toBe(true);
        expect(wrapper.find(".after-label").exists()).toBe(true);
        expect(wrapper.find(".before-input").exists()).toBe(true);
        expect(wrapper.find(".input").exists()).toBe(true);
        expect(wrapper.find(".after-input").exists()).toBe(true);
        expect(wrapper.find(".error").exists()).toBe(true);
    });
});
