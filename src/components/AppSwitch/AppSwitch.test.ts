import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import AppSwitch from "./AppSwitch.vue";

describe("AppSwitch", () => {
    test("renders correctly the object", () => {
        const data = {
            string: "Un test bidon",
        };

        const wrapper = shallowMount(AppSwitch, {
            propsData: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });
});
