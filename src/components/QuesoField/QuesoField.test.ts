import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoField from "./QuesoField.vue";

describe("QuesoField", () => {
    test("renders correctly the object", () => {
        const data = {
            string: "Un test bidon",
        };

        const wrapper = shallowMount(QuesoField, {
            propsData: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });

    test("applies has-value class when hasValue prop is true", () => {
        const wrapper = mount(QuesoField, {
            props: {
                name: "field-name",
                hasValue: true,
            },
        });
        expect(wrapper.classes()).toContain("has-value");
    });

    test("does not apply has-value class when hasValue prop is false", () => {
        const wrapper = mount(QuesoField, {
            props: {
                name: "field-name",
                hasValue: false,
            },
        });
        expect(wrapper.classes()).not.toContain("has-value");
    });

    test("does not apply has-value class when hasValue prop is undefined", () => {
        const wrapper = mount(QuesoField, {
            props: {
                name: "field-name",
            },
        });
        expect(wrapper.classes()).not.toContain("has-value");
    });
});
