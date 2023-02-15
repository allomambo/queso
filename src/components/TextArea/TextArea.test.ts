import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import TextArea from "./TextArea.vue";

describe("TextArea", () => {
    test("renders correctly the object", () => {
        const data = {
            name: "field-name",
        };

        const wrapper = shallowMount(TextArea, {
            propsData: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });
});
