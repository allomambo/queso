import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import QuesoRadio from "./QuesoRadio.vue";

describe("QuesoRadio.vue", () => {
    const choices = [
        { value: "choice1", label: "Choice 1" },
        { value: "choice2", label: "Choice 2" },
    ];

    const props = {
        choices,
    };

    it("renders correctly", () => {
        const wrapper = mount(QuesoRadio, { props });
        expect(wrapper.exists()).toBe(true);
    });

    it("renders checkboxes based on choices prop", () => {
        const wrapper = mount(QuesoRadio, { props });
        const checkboxes = wrapper.findAll(".queso-checkbox__native");
        expect(checkboxes.length).toBe(choices.length);
    });

    it("updates model when checkbox is clicked", async () => {
        const wrapper = mount(QuesoRadio, { props });
        const checkbox = wrapper.find(".queso-checkbox__native");
        await checkbox.setChecked();
        expect(wrapper.vm.model.value).toContain("choice1");
    });

    it("renders slots correctly", () => {
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
