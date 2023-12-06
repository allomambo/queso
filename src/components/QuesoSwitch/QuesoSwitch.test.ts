import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoSwitch from "./QuesoSwitch.vue";

describe("QuesoSwitch", () => {
    test("renders correctly the object", () => {
        const data = {
            label: "Un test bidon",
        };

        const wrapper = shallowMount(QuesoSwitch, {
            props: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });

    // test("renders correctly the label", async () => {
    //     const data = {
    //         label: "field-label",
    //     };
    //     const wrapper = mount(QuesoSwitch, {
    //         props: data,
    //     });
    //     await wrapper.find(".queso-field").trigger("click");

    //     // expect to find class queso-switch is-selected on the wrapper
    //     // expect(wrapper.classes()).toContain(".is-selected");
    //     // expect(wrapper.find(".is-selected").exists()).toBe(true);

    //     // expect(wrapper.find(".queso-switch").classes()).toContain(".is-selected");
    //     expect(wrapper.find(".is-selected").exists()).toBe(true);
    // });
});
