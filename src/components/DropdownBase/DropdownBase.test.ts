import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import DropdownBase from "./DropdownBase.vue";

describe("DropdownBase", () => {
    test("renders correctly the object", () => {
        const data = {
            string: "Un test bidon",
        };

        const wrapper = shallowMount(DropdownBase, {
            propsData: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });
});
