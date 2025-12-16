import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import QuesoModal from "./QuesoModal.vue";

describe("QuesoModal", () => {
    test("renders correctly the object", () => {
        const wrapper = mount(QuesoModal, {});
        expect(wrapper.vm).toBeTruthy();
    });

    test("closed by default", () => {
        const wrapper = mount(QuesoModal, {});
        expect(wrapper.vm.isModalOpen).toBe(false);
    });

    test("openModal opens the modal", async () => {
        const wrapper = mount(QuesoModal, {});
        wrapper.vm.openModal();
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.isModalOpen).toBe(true);
    });

    test("closeModal closes the modal", async () => {
        const wrapper = mount(QuesoModal, {});
        wrapper.vm.openModal();
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.isModalOpen).toBe(true);
        wrapper.vm.closeModal();
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.isModalOpen).toBe(false);
    });

    test("emits modal:open when opened", async () => {
        const wrapper = mount(QuesoModal, {});
        wrapper.vm.openModal();
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted("modal:open")).toBeTruthy();
        expect(wrapper.emitted("modal:open")).toHaveLength(1);
    });

    test("emits modal:close when closed", async () => {
        const wrapper = mount(QuesoModal, {});
        wrapper.vm.openModal();
        await wrapper.vm.$nextTick();
        wrapper.vm.closeModal();
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted("modal:close")).toBeTruthy();
        expect(wrapper.emitted("modal:close")).toHaveLength(1);
    });

    test("trigger slot is rendered", () => {
        const wrapper = mount(QuesoModal, {
            slots: {
                trigger: "<button>Open</button>",
            },
        });
        const triggerSlot = wrapper.find("button");
        expect(triggerSlot.exists()).toBe(true);
        expect(triggerSlot.text()).toBe("Open");
    });

    test("exposed methods are available", () => {
        const wrapper = mount(QuesoModal, {});
        expect(typeof wrapper.vm.openModal).toBe("function");
        expect(typeof wrapper.vm.closeModal).toBe("function");
        expect(typeof wrapper.vm.isModalOpen).toBe("boolean");
    });
});
