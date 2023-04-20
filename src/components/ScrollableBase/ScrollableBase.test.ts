import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import ScrollableBase from "./ScrollableBase.vue";

describe("ScrollableBase", () => {
    test("renders correctly the object", () => {
        const data = {
            string: "Un test bidon",
        };

        const wrapper = shallowMount(ScrollableBase, {
            propsData: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });
});
