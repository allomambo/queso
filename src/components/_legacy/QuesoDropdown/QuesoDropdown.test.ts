import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoDropdown from "./QuesoDropdown.vue";

describe("QuesoDropdown", () => {
    test("renders correctly the object", () => {
        const data = {
            options: [
                {
                    key: 1,
                    data: {
                        label: "Heavy Metal",
                    },
                },
                {
                    key: 2,
                    data: {
                        label: "Classique",
                    },
                },
                {
                    key: 3,
                    data: {
                        label: "Funk and Disco",
                    },
                },
            ],
        };

        const wrapper = shallowMount(QuesoDropdown, {
            propsData: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });
});
