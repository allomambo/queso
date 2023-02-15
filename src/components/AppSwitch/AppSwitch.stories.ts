import AppSwitch from "./AppSwitch.vue";

export default {
    title: "Formulaire/Switch",
    component: AppSwitch,
};

const Template = (args) => ({
    components: { AppSwitch },
    setup() {
        return { args };
    },
    template: `<AppSwitch v-bind="args" />`,
});

export const Default = Template.bind({});

Default.args = {
    name: "switch",
    label: "Appliquer les informations",
    modelValue: false,
};

Default.parameters = {
    docs: {
        source: {
            code: `<queso-switch name="${Default.args.name}" label="${Default.args.label}" />`,
        },
    },
};

export const Disabled = Template.bind({});

Disabled.args = {
    name: "newsletter",
    label: "Je désire recevoir des nouvelles par courriel",
    modelValue: true,
    isDisabled: true,
};

Disabled.parameters = {
    docs: {
        source: {
            code: `<queso-switch ... :is-read-only="${Disabled.args.isDisabled}" />`,
        },
    },
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
    name: "newsletter",
    label: "Je désire recevoir des nouvelles par courriel",
    modelValue: true,
    isReadOnly: true,
};

ReadOnly.parameters = {
    docs: {
        source: {
            code: `<queso-switch ... :is-read-only="${ReadOnly.args.isReadOnly}" />`,
        },
    },
};
