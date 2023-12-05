import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoCheckbox from "./QuesoCheckbox.vue";

describe("QuesoCheckbox", () => {
    test("renders correctly the object", () => {
        const data = {
            name: "field-name",
        };

        const wrapper = shallowMount(QuesoCheckbox, {
            propsData: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });
});
