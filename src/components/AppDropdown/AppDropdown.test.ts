import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import AppDropdown from "./AppDropdown.vue";

describe("AppDropdown", () => {
    test("renders correctly the object", () => {
        const data = {
            string: "Un test bidon",
        };

        const wrapper = shallowMount(AppDropdown, {
            propsData: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });
});
