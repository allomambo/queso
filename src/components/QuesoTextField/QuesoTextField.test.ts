import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";

import QuesoTextField from "./QuesoTextField.vue";

function createComponent(propsData) {
    return mount(QuesoTextField, { propsData });
}

test("QuesoTextField.vue", async () => {
    // const wrapper = createComponent({ type: "text", modelValue: "test" });
    // expect(wrapper.vm).toBeTruthy();
    // expect(wrapper.html()).toMatchSnapshot();
    // const input = wrapper.find("input");
    // expect(input.exists()).toBe(true);
    // await input.setValue("testing");
    // expect(wrapper.props("modelValue")).toEqual("testing");
    // const wrapperWithSlots = mount(QuesoTextField, {
    //     props: { label: "Label" },
    //     slots: {
    //         beforeLabel: "<div>Before Label</div>",
    //         afterLabel: "<div>After Label</div>",
    //     },
    // });
    // expect(wrapperWithSlots.html()).toContain("Before Label");
    // expect(wrapperWithSlots.html()).toContain("After Label");
});
