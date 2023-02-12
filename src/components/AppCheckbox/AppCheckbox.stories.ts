import AppCheckbox from "./AppCheckbox.vue";

export default {
    title: "Formulaire/Checkbox",
    component: AppCheckbox,
};

const Template = (args) => ({
    components: { AppCheckbox },
    setup() {
        return { args };
    },
    template: `<AppCheckbox v-bind="args" />`,
});

export const Default = Template.bind({});

Default.args = {
    name: "checkbox",
    label: "Mémoriser le compte durant 30 jours",
    modelValue: false,
};

Default.parameters = {
    docs: {
        source: {
            code: `<tempo-checkbox name="${Default.args.name}" label="${Default.args.label}" />`,
        },
    },
};

export const ElaborateLabel = Template.bind({});

ElaborateLabel.args = {
    name: "checkbox",
    label: "J'accepte les <a href='#' target='_blank'><strong>conditions d'utilisations</strong></a>. Pour découvrir comment nous utilisons et protégeons vos données, consultez notre <a href='#' target='_blank'><strong>politique de confidentialité</strong></a>.",
    modelValue: true,
};

ElaborateLabel.parameters = {
    docs: {
        source: {
            code: `<tempo-checkbox name="${ElaborateLabel.args.name}" label="${ElaborateLabel.args.label}" modelValue="${ElaborateLabel.args.modelValue}" />`,
        },
    },
};

export const Invalid = Template.bind({});

Invalid.args = {
    name: "condition",
    label: "J'accepte les conditions d'utilisations.",
    modelValue: false,
    isError: true,
    errorMessage: "Vous devez accepter les conditions d'utilisations",
};

Invalid.parameters = {
    docs: {
        source: {
            code: `<tempo-checkbox ... :is-error="${Invalid.args.isError}" error-message="${Invalid.args.errorMessage}" />`,
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
            code: `<tempo-checkbox ... :is-read-only="${Disabled.args.isDisabled}" />`,
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
            code: `<tempo-checkbox ... :is-read-only="${ReadOnly.args.isReadOnly}" />`,
        },
    },
};
