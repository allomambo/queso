import QuesoTextArea from "./QuesoTextArea.vue";

export default {
    title: "Formulaire/QuesoTextArea",
    component: QuesoTextArea,
};

const Template = (args) => ({
    components: { QuesoTextArea },
    setup() {
        return { args };
    },
    template: `<QuesoTextArea v-bind="args" />`,
});

export const Default = Template.bind({});

Default.args = {
    name: "textarea-name",
    id: "textarea-id",
    label: "Description",
    modelValue: "Lorem ipsum dolor sit amet",
};

Default.parameters = {
    docs: {
        source: {
            code: `<queso-text-area id="${Default.args.id}" name="${Default.args.name}" label="${Default.args.label}" model-value="${Default.args.modelValue}" />`,
        },
    },
};
