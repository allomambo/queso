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

    test("closed by default", () => {
        const data = {
            string: "Un test bidon",
        };

        const wrapper = shallowMount(QuesoCollapsible, {
            propsData: data,
        });
        expect(wrapper.classes()).toContain("is-collapsible-close");
    });

    test("user open the collapsible by click", async () => {
        const wrapper = mount(QuesoCollapsible, {});
        await wrapper.find(".queso-collapsible__header").trigger("click");

        expect(wrapper.classes()).toContain("is-collapsible-open");
    });
});
