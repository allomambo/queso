import QuesoTextField from "./QuesoTextField.vue";
// import AppIcon from "../AppIcon";

export default {
    title: "Formulaire/QuesoTextField",
    component: QuesoTextField,
};

const Template = (args: any) => ({
    components: {
        QuesoTextField,
    },
    setup() {
        return { args };
    },
    template: `<QuesoTextField v-bind="args">
        <template v-if="${"slotBefore" in args}" #before>${args.slotBefore}</template>
        <template v-if="${"slotAfter" in args}" #after>${args.slotAfter}</template>
    </QuesoTextField>`,
});

export const Default = Template.bind({});

Default.args = {
    type: "text",
    id: "form1-full-name",
    name: "full-name",
    label: "Nom complet",
};

Default.parameters = {
    docs: {
        source: {
            code: `<queso-text-field type="${Default.args.type}" id="${Default.args.id}" name="${Default.args.name}" label="${Default.args.label}" />`,
        },
    },
};

export const LabelAsPlaceholder = Template.bind({});

LabelAsPlaceholder.args = {
    type: "tel",
    name: "phone",
    label: "Numéro de téléphone",
    labelPosition: "placeholder",
};

LabelAsPlaceholder.parameters = {
    docs: {
        source: {
            code: `<queso-text-field ... label="${LabelAsPlaceholder.args.label}" label-position="${LabelAsPlaceholder.args.labelPosition}" />`,
        },
    },
};

export const Invalid = Template.bind({});

Invalid.args = {
    type: "email",
    name: "email",
    label: "Adresse courriel",
    modelValue: "lorem@ipsumdolor",
    isError: true,
    errorMessage: "L'adresse courriel est invalide",
};

Invalid.parameters = {
    docs: {
        source: {
            code: `<queso-text-field ... :is-error="${Invalid.args.isError}" error-message="${Invalid.args.errorMessage}" />`,
        },
    },
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
    name: "lorem-ipsum",
    label: "Lorem ipsum dolor sit amet",
    modelValue: "Phasellus molestie nisi quis libero ullamcorper mattis",
    isReadOnly: true,
};

ReadOnly.parameters = {
    docs: {
        source: {
            code: `<queso-text-field ... :is-read-only="${ReadOnly.args.isReadOnly}" />`,
        },
    },
};

export const IconBefore = Template.bind({});

IconBefore.args = {
    name: "youtube",
    label: "Lien Youtube",
    modelValue: "https://www.youtube.com/@ADISQadisq",
    slotBefore: '<app-icon name="youtube" :size="2.4" />',
};

IconBefore.parameters = {
    docs: {
        source: {
            code: `<queso-text-field>
    <template #before>
        <queso-icon name="youtube" :size="2.4" />
    </template>
</queso-text-field>`,
        },
    },
};

export const IconAfter = Template.bind({});

IconAfter.args = {
    name: "search-place",
    label: "Recherche d'un lieu",
    slotAfter: '<app-icon name="magnify_glass" txt-color="black" bg-color="grey-faded" />',
};

IconAfter.parameters = {
    docs: {
        source: {
            code: `<queso-text-field>
    <template #after>
        <queso-icon name="magnify_glass" txt-color="black" bg-color="grey-faded" />
    </template>
</queso-text-field>`,
        },
    },
};
