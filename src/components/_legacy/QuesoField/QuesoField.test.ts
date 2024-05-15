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
});
