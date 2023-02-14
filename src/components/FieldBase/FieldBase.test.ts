import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import FieldBase from "./FieldBase.vue";

describe("FieldBase", () => {
    test("renders correctly the object", () => {
        const data = {
            string: "Un test bidon",
        };

        const wrapper = shallowMount(FieldBase, {
            propsData: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });
});
