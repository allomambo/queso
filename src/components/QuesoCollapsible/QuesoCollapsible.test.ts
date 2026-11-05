import { defineComponent, h } from "vue";
import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { renderAndHydrate } from "../../../tests/ssr";
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

    test("header is a button that toggles with Enter and Space", async () => {
        const wrapper = mount(QuesoCollapsible);
        const header = wrapper.find(".queso-collapsible__header");

        expect(header.attributes("role")).toBe("button");
        expect(header.attributes("tabindex")).toBe("0");

        await header.trigger("keydown", { key: "Enter" });
        expect(wrapper.classes()).toContain("is-collapsible-open");
        expect(header.attributes("aria-expanded")).toBe("true");

        await header.trigger("keydown", { key: " " });
        await new Promise((resolve) => setTimeout(resolve, 5));
        expect(wrapper.classes()).toContain("is-collapsible-close");
        expect(header.attributes("aria-expanded")).toBe("false");
    });

    test("ignores keys typed inside elements of the header slot", async () => {
        const wrapper = mount(QuesoCollapsible, {
            slots: { headerText: '<input class="nested" />' },
        });

        await wrapper.find(".nested").trigger("keydown", { key: " " });
        await wrapper.find(".nested").trigger("keydown", { key: "Enter" });

        expect(wrapper.classes()).toContain("is-collapsible-close");
    });

    test("aria-controls points to the content id", () => {
        const wrapper = mount(QuesoCollapsible);
        const controls = wrapper.find(".queso-collapsible__header").attributes("aria-controls");
        const contentId = wrapper.find(".queso-collapsible__content").attributes("id");

        expect(controls).toMatch(/^queso-collapsible__/);
        expect(controls).toBe(contentId);
    });

    test("two instances get distinct ids", () => {
        const wrapper = mount(
            defineComponent({
                render: () => h("div", [h(QuesoCollapsible), h(QuesoCollapsible)]),
            }),
        );
        const ids = wrapper.findAll(".queso-collapsible__content").map((content) => content.attributes("id"));

        expect(ids).toHaveLength(2);
        expect(ids[0]).not.toBe(ids[1]);
    });

    test("expandOnMount opens on mount and emits the open events", () => {
        const wrapper = mount(QuesoCollapsible, { props: { expandOnMount: true } });

        expect(wrapper.classes()).toContain("is-collapsible-open");
        expect(wrapper.emitted("collapsible:open")).toHaveLength(1);
        expect(wrapper.emitted("collapsible:toggle")).toEqual([[true]]);
    });

    test.each([{}, { expandOnMount: true }])("hydrates server HTML without mismatch (%o)", async (props) => {
        const { html, container, logs, unmount } = await renderAndHydrate(QuesoCollapsible, props);

        expect(logs).toEqual([]);
        expect(container.querySelector(".queso-collapsible__content")?.id).toBe(/id="([^"]+)"/.exec(html)?.[1]);

        unmount();
    });
});
