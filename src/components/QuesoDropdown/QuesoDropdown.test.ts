import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoDropdown from "./QuesoDropdown.vue";

describe("QuesoDropdown", () => {
    test("renders correctly the object", () => {
        const data = {
            string: "Un test bidon",
        };

        const wrapper = shallowMount(QuesoDropdown, {
            propsData: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });
});
