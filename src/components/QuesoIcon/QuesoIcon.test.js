import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoIcon from "./QuesoIcon.vue";

const data = {
    name: "chevron",
    size: 6,
    rotate: 90,
};

describe("QuesoIcon", () => {
    test("renders correctly the object", () => {
        const wrapper = mount(QuesoIcon, {
            props: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });
});
