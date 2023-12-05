import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoSwitch from "./QuesoSwitch.vue";

describe("QuesoSwitch", () => {
    test("renders correctly the object", () => {
        const data = {
            string: "Un test bidon",
        };

        const wrapper = shallowMount(QuesoSwitch, {
            propsData: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });
});
