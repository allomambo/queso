import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import IconBase from "./IconBase.vue";

const data = {
    name: "chevron",
    size: 6,
    rotate: 90,
};

describe("IconBase", () => {
    test("renders correctly the object", () => {
        const wrapper = mount(IconBase, {
            props: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });

    // test("renders the right rotation", () => {
    //     const wrapper = mount(IconBase, {
    //         props: data,
    //     });
    //     const icon = wrapper.find(".icon");
    //     expect(icon.attributes("style")).toContain(`--rotate: ${data.rotate}deg`);
    // });

    // test("renders the right size", () => {
    //     const wrapper = mount(IconBase, {
    //         props: data,
    //     });
    //     const icon = wrapper.find(".icon");
    //     expect(icon.attributes("style")).toContain(`--width: ${data.size}rem`);
    // });
});
