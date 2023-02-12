import AppSelect from "./AppSelect.vue";

export default {
    title: "Formulaire/Select",
    component: AppSelect,
};

const Template = (args) => ({
    components: { AppSelect },
    setup() {
        return { args };
    },
    template: `<AppSelect v-bind="args" />`,
});

const dataOptions = [
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
    {
        key: 4,
        data: {
            label: "Folk and Acoustic",
        },
    },
    {
        key: 5,
        data: {
            label: "Country",
        },
    },
    {
        key: 6,
        data: {
            label: "Dance and Electronic",
        },
    },
];

export const Default = Template.bind({});

Default.args = {
    name: "select-name",
    label: "Genre musical",
    options: dataOptions,
    placeholder: "Sélectionner un genre",
};

Default.parameters = {
    docs: {
        source: {
            code: `<tempo-select label="${Default.args.label}" options='${JSON.stringify(
                Default.args.options
            )}' placeholder="${Default.args.placeholder}" />`,
        },
    },
};

export const Multiple = Template.bind({});

Multiple.args = {
    name: "select-name",
    label: "Genre musical",
    options: dataOptions,
    placeholder: "Sélectionner un genre",
    multiple: true,
};

Multiple.parameters = {
    docs: {
        source: {
            code: `<tempo-select name="${Default.args.name}" label="${Default.args.label}" options="[{...}, {...}]" placeholder="${Default.args.placeholder}" multiple />`,
        },
    },
};

export const LabelAsPlaceholder = Template.bind({});

LabelAsPlaceholder.args = {
    name: "select-name",
    label: "Genre musical",
    options: dataOptions,
    placeholder: "Sélectionner un genre",
    labelPosition: "placeholder",
};

LabelAsPlaceholder.parameters = {
    docs: {
        source: {
            code: `<tempo-select ... label-position="${LabelAsPlaceholder.args.labelPosition}" />`,
        },
    },
};

export const ReadOnly = Template.bind({});

ReadOnly.args = {
    name: "select-name",
    label: "Genre musical",
    options: dataOptions,
    modelValue: [dataOptions[4]],
    placeholder: "Sélectionner un genre",
    isReadOnly: true,
};

ReadOnly.parameters = {
    docs: {
        source: {
            code: `<tempo-select ... :is-read-only="${ReadOnly.args.isReadOnly}" />`,
        },
    },
};
