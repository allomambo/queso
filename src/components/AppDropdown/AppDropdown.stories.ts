import AppDropdown from "./AppDropdown.vue";

export default {
    title: "Components/Dropdown",
    component: AppDropdown,
};

const Template = (args) => ({
    components: { AppDropdown },
    setup() {
        return { args };
    },
    template: `
    <app-dropdown v-bind="args">
        <template v-if="${"slotPrefix" in args}" #prefix>${args.slotPrefix}</template>
        <template v-if="${"slotPlaceholder" in args}" #placeholder>${args.slotPlaceholder}</template>
        <template v-if="${"slotActiveLabel" in args}" #activeLabel>${args.slotActiveLabel}</template>
        <template v-if="${"slotSuffix" in args}" #suffix>${args.slotSuffix}</template>
        <template v-if="${"slotIcon" in args}" #icon>${args.slotIcon}</template>
        <template v-if="${"slotPopoverHeader" in args}" #popoverHeader>${args.slotPopoverHeader}</template>
        <template v-if="${"slotItem" in args}" #item>${args.slotItem}</template>
        <template v-if="${"slotPopoverFooter" in args}" #popoverFooter>${args.slotPopoverFooter}</template>
    </app-dropdown>
    `,
});

const dataOptions = [
    {
        key: 1,
        data: {
            label: "Heavy Metal",
            icon: "bell",
        },
    },
    {
        key: 2,
        data: {
            label: "Classique",
            icon: "link",
        },
    },
    {
        key: 3,
        data: {
            label: "Funk and Disco",
            icon: "funnel",
        },
    },
    {
        key: 4,
        data: {
            label: "Folk and Acoustic",
            icon: "garbage",
        },
    },
    {
        key: 5,
        data: {
            label: "Country",
            icon: "lock",
        },
    },
    {
        key: 6,
        data: {
            label: "Dance and Electronic",
            icon: "magnify_glass",
        },
    },
];

export const Default = Template.bind({});

Default.args = {
    options: dataOptions,
};

Default.parameters = {
    docs: {
        source: {
            code: `<tacos-dropdown :options="${Default.args.options}" />`,
        },
    },
};

export const Multiple = Template.bind({});

Multiple.args = {
    multiple: true,
    options: dataOptions,
};

Multiple.parameters = {
    docs: {
        source: {
            code: `<tacos-dropdown :options="[...]" multiple />`,
        },
    },
};

export const StayOpenOnSelection = Template.bind({});

StayOpenOnSelection.args = {
    stayOpenOnSelection: true,
    options: dataOptions,
};

StayOpenOnSelection.parameters = {
    docs: {
        source: {
            code: `<tacos-dropdown :options="[...]" stay-open-on-selection />`,
        },
    },
};

export const PlaceholderSlot = Template.bind({});

PlaceholderSlot.args = {
    options: dataOptions,
    slotPlaceholder: "A placeholder",
};

PlaceholderSlot.parameters = {
    docs: {
        source: {
            code: `<tacos-dropdown :options="[...]">
    <template #placeholder>A placeholder</template>
</tacos-dropdown>`,
        },
    },
};

export const PopoverSlots = Template.bind({});

PopoverSlots.args = {
    options: dataOptions,
    slotPopoverHeader: "Popover Header",
    slotPopoverFooter: "Popover Footer",
};

PopoverSlots.parameters = {
    docs: {
        source: {
            code: `<tacos-dropdown :options="[...]">
    <template #popoverHeader>Popover Header</template>
    <template #popoverFooter>Popover Footer</template>
</tacos-dropdown>`,
        },
    },
};

export const LabelSlots = Template.bind({});

LabelSlots.args = {
    options: dataOptions,
    slotPrefix: "Prefix",
    slotSuffix: "Suffix",
};

LabelSlots.parameters = {
    docs: {
        source: {
            code: `<tacos-dropdown :options="[...]">
    <template #prefix>Prefix</template>
    <template #suffix>Suffix</template>
</tacos-dropdown>`,
        },
    },
};
