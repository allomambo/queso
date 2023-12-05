// import { localVue, i18n } from "../testUtils";
import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it, test } from "vitest";
import QuesoClickable from "./QuesoClickable.vue";

describe("QuesoClickable", () => {
    const data = {
        label: "label test",
        href: "https://www.google.ca/",
        tag: "a",
        isExternal: true,
    };

    it("renders correctly", () => {
        const wrapper = mount(QuesoClickable);
        expect(wrapper.vm).toBeTruthy();
    });

    // Anchor
    test("renders correctly anchor", () => {
        const wrapper = shallowMount(QuesoClickable, {
            propsData: data,
        });
        expect(wrapper.element.tagName).toBe("A");
    });

    test("renders correctly anchor with a href", () => {
        const wrapper = shallowMount(QuesoClickable, {
            propsData: data,
        });
        expect(wrapper.attributes("href")).toBe(data.href);
    });

    test("renders correctly anchor with target blank", () => {
        const wrapper = shallowMount(QuesoClickable, {
            propsData: data,
        });
        expect(wrapper.attributes("target")).toBe("_blank");
    });
    // Disabled
    test("renders correctly disabled button", () => {
        const wrapper = shallowMount(QuesoClickable, {
            propsData: { isDisabled: true },
        });
        expect(wrapper.attributes('disabled')).toBe("");
    });
});
