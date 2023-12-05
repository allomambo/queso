import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoCollapsible from "./QuesoCollapsible.vue";

describe("QuesoCollapsible", () => {
    test("renders correctly the object", () => {
        const data = {
            string: "Un test bidon",
        };

        const wrapper = shallowMount(QuesoCollapsible, {
            propsData: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });
});
