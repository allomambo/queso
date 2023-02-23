// import { localVue, i18n } from "../testUtils";
import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it, test } from "vitest";
import ClickableBase from "./ClickableBase.vue";

describe("ClickableBase", () => {
    const data = {
        label: "label test",
        href: "https://www.google.ca/",
        tag: "a",
        isExternal: true,
    };

    it("renders correctly", () => {
        const wrapper = mount(ClickableBase);
        expect(wrapper.vm).toBeTruthy();
    });

    // Anchor
    test("renders correctly anchor", () => {
        const wrapper = shallowMount(ClickableBase, {
            propsData: data,
        });
        expect(wrapper.element.tagName).toBe("A");
    });

    test("renders correctly anchor with a href", () => {
        const wrapper = shallowMount(ClickableBase, {
            propsData: data,
        });
        expect(wrapper.attributes("href")).toBe(data.href);
    });

    test("renders correctly anchor with target blank", () => {
        const wrapper = shallowMount(ClickableBase, {
            propsData: data,
        });
        expect(wrapper.attributes("target")).toBe("_blank");
    });
    // Disabled
    test("renders correctly disabled button", () => {
        const wrapper = shallowMount(ClickableBase, {
            propsData: { isDisabled: true },
        });
        expect(wrapper.attributes("disabled")).toBeTruthy();
    });
});
