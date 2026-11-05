import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoField from "./QuesoField.vue";

describe("QuesoField", () => {
    test("renders correctly the object", () => {
        const props = {
            name: "field-name",
        };

        const wrapper = shallowMount(QuesoField, {
            props,
        });
        expect(wrapper.vm).toBeTruthy();
    });

    test("label gets an id exposed as fieldLabelID", () => {
        const wrapper = mount(QuesoField, {
            props: { name: "field-name", id: "field-id", label: "Field" },
            slots: {
                input: `<template #input="{ fieldLabelID }"><span class="exposed">{{ fieldLabelID }}</span></template>`,
            },
        });

        expect(wrapper.find(".queso-field__label").attributes("id")).toBe("field-id-label");
        expect(wrapper.find(".exposed").text()).toBe("field-id-label");
    });

    test("no label means no fieldLabelID", () => {
        const wrapper = mount(QuesoField, {
            props: { name: "field-name" },
            slots: {
                input: `<template #input="{ fieldLabelID }"><span class="exposed">{{ fieldLabelID ?? "none" }}</span></template>`,
            },
        });

        expect(wrapper.find(".queso-field__label").exists()).toBe(false);
        expect(wrapper.find(".exposed").text()).toBe("none");
    });
});
