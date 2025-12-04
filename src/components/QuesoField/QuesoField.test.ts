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
});
