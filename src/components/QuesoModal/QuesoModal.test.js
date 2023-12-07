import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoModal from "./QuesoModal.vue";

const data = {};

describe("QuesoModal", () => {
    test("renders correctly the object", () => {
        const wrapper = mount(QuesoModal, {
            props: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });
});
