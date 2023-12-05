import QuesoIcon from "./QuesoIcon.vue";

export default {
    title: "Components/Icon",
    component: QuesoIcon,
    parameters: {
        docs: {
            description: {
                component:
                    "<p>Add the component to file with `<queso-icon />`. <br>You simply need to write the name of the svg you want as a props: `<queso-icon :name='chevron' />`.</p><p>All the icons are located in the folder ```cd ./src/assets/svg/```. To add a new icon, add the svg in the folder and don't forgot to add an import/export of it in `./src/assets/svg/index.ts`.</p><p>Rotate your icon using the props rotation `<queso-icon :rotation=90 />`<br>By default, the size is 1rem, but feel free to customize the size by passing a number in the props `size`.<br><i>*Please note, the size will always be in rem.</i></p>",
            },
            source: { code: '<queso-icon name="chevron" :size=1>' },
        },
    },
};

const Template = (args: any) => ({
    components: { QuesoIcon },
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
            code: `<queso-icon name="${Default.args.name}" :size=${Default.args.size} />`,
        },
    },
};

export const Rotated = Template.bind({});
Rotated.args = {
    name: "arrow",
    rotation: 135,
};
Rotated.parameters = {
    docs: {
        source: {
            code: `<queso-icon name="${Rotated.args.name}" :rotation=${Rotated.args.rotation} />`,
        },
    },
};
