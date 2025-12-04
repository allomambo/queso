import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it, test } from "vitest";
import QuesoClickable from "./QuesoClickable.vue";

describe("QuesoClickable", () => {
    const data = {
        url: "https://www.google.ca/",
        markup: "a",
        isExternal: true,
    };

    it("renders correctly", () => {
        const wrapper = mount(QuesoClickable);
        expect(wrapper.vm).toBeTruthy();
    });

    // Anchor
    test("renders correctly anchor", () => {
        const wrapper = shallowMount(QuesoClickable, {
            props: data,
        });
        expect(wrapper.element.tagName).toBe("A");
    });

    test("renders correctly anchor with a href", () => {
        const wrapper = shallowMount(QuesoClickable, {
            props: data,
        });
        expect(wrapper.attributes("href")).toBe(data.url);
    });

    test("renders correctly anchor with target blank", () => {
        const wrapper = shallowMount(QuesoClickable, {
            props: data,
        });
        expect(wrapper.attributes("target")).toBe("_blank");
    });
    // Disabled
    test("renders correctly disabled button", () => {
        const wrapper = shallowMount(QuesoClickable, {
            props: { isDisabled: true },
        });
        expect(wrapper.attributes("disabled")).toBe("");
    });
});
