import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoScrollable from "./QuesoScrollable.vue";

describe("QuesoScrollable", () => {
    test("renders correctly the object", () => {
        const data = {
            string: "Un test bidon",
        };

        const wrapper = shallowMount(QuesoScrollable, {
            propsData: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });
});
