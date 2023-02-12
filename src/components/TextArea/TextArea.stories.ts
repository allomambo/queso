import TextArea from "./TextArea.vue";

export default {
    title: "Formulaire/TextArea",
    component: TextArea,
};

const Template = (args) => ({
    components: { TextArea },
    setup() {
        return { args };
    },
    template: `<TextArea v-bind="args" />`,
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
            code: `<tempo-text-area id="${Default.args.id}" name="${Default.args.name}" label="${Default.args.label}" model-value="${Default.args.modelValue}" />`,
        },
    },
};
