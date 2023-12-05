import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoTextArea from "./QuesoTextArea.vue";

describe("QuesoTextArea", () => {
    test("renders correctly the object", () => {
        const data = {
            name: "field-name",
        };

        const wrapper = shallowMount(QuesoTextArea, {
            propsData: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });
});
