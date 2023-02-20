import IconBase from "./IconBase.vue";

import { COLORS, SYMBOL_ICONS, SOCIAL_ICONS } from "@/constants";

export default {
    title: "Components/Icon",
    component: IconBase,
    argTypes: {
        name: {
            control: "select",
            options: [...SYMBOL_ICONS, ...SOCIAL_ICONS],
        },
        size: {
            type: { name: "number", required: false },
            defaultValue: 1,
            description: "Grosseur de l'icône en rem",
        },
        rotate: {
            control: { type: "range", min: -360, max: 360, step: 1 },
            defaultValue: 0,
            description: "Rotation de l'icône en degré",
        },
        txtColor: {
            control: "select",
            options: ["none", "transparent", ...COLORS],
            description: "Couleur de l'icône",
        },
        bgColor: {
            control: "select",
            options: ["none", "transparent", ...COLORS],
            description: "Couleur de fond de l'icône. Un width/height sera appliqué, modifiable en css.",
        },
        bgSize: {
            type: { name: "number", required: false },
            defaultValue: 2,
            description: "Grosseur de fond de l'icône en rem (si un bgColor est appliqué)",
        },
    },
    parameters: {
        docs: {
            description: {
                component:
                    "<p>Add the component to file with `<tempo-icon />`. <br>You simply need to write the name of the svg you want as a props: `<tempo-icon :name='chevron' />`.</p><p>All the icons are located in the folder ```cd ./src/assets/svg/```. To add a new icon, add the svg in the folder and don't forgot to add an import/export of it in `./src/assets/svg/index.ts`.</p><p>Rotate your icon using the props rotate `<tempo-icon :rotate=90 />`<br>By default, the size is 1rem, but feel free to customize the size by passing a number in the props `size`.<br><i>*Please note, the size will always be in rem.</i></p>",
            },
            source: { code: '<tempo-icon name="chevron" :size=1>' },
        },
    },
};

const Template = (args: any) => ({
    components: { IconBase },
    setup() {
        return { args };
    },
    template: `<app-icon v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
    name: "chevron",
    size: 1,
};
Default.parameters = {
    docs: {
        source: {
            code: `<tempo-icon name="${Default.args.name}" :size=${Default.args.size} />`,
        },
    },
};

export const Rotated = Template.bind({});
Rotated.args = {
    name: "arrow",
    rotate: 135,
};
Rotated.parameters = {
    docs: {
        source: {
            code: `<tempo-icon name="${Rotated.args.name}" :rotate=${Rotated.args.rotate} />`,
        },
    },
};

export const CustomColors = Template.bind({});
CustomColors.args = {
    name: "bell",
    size: 2,
    txtColor: "white",
    bgColor: "accent",
    bgSize: 4,
};
CustomColors.parameters = {
    docs: {
        source: {
            code: `<tempo-icon name="${CustomColors.args.name}" :size="${CustomColors.args.size}" txt-color="${CustomColors.args.txtColor}" bg-color="${CustomColors.args.bgColor}" :bg-size="${CustomColors.args.bgSize}" />`,
        },
    },
};
