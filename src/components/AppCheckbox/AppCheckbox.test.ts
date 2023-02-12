import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import AppCheckbox from "./AppCheckbox.vue";

describe("AppCheckbox", () => {
    test("renders correctly the object", () => {
        const data = {
            name: "field-name",
        };

        const wrapper = shallowMount(AppCheckbox, {
            propsData: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });
});
