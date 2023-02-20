import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import CollapsibleBase from "./CollapsibleBase.vue";

describe("CollapsibleBase", () => {
    test("renders correctly the object", () => {
        const data = {
            string: "Un test bidon",
        };

        const wrapper = shallowMount(CollapsibleBase, {
            propsData: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });
});
