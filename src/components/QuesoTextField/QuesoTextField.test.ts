import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoTextField from "./QuesoTextField.vue";

describe("QuesoTextField", () => {
    test("renders correctly the object", () => {
        const data = {
            name: "field-name",
        };

        const wrapper = shallowMount(QuesoTextField, {
            propsData: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });
});
