import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import AppSelect from "./AppSelect.vue";

describe("AppSelect", () => {
    const data = {
        name: "select-name",
        label: "Genre musical",
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

    test("renders correctly the object", () => {
        const wrapper = shallowMount(AppSelect, {
            propsData: data,
        });
        expect(wrapper.vm).toBeTruthy();
    });

    // Hiding it for now
    // test("renders correctly the label", () => {
    //     const wrapper = shallowMount(AppSelect, {
    //         propsData: data,
    //     });
    //     const label = wrapper.findComponent(".dropdown__popover__options-list__item:first-child");
    //     // expect(label.exists()).toBe(true);
    //     // console.log(label);
    //     // expect(label.text()).toMatch(data.options[0].data.label);
    // });
});
