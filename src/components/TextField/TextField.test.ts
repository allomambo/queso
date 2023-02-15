import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import TextField from "./TextField.vue";

describe("TextField", () => {
    test("renders correctly the object", () => {
        const data = {
            name: "field-name",
        };

        const wrapper = shallowMount(TextField, {
            propsData: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });
});
