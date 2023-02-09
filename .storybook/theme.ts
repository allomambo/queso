import { create } from "@storybook/theming";

const colors = {
    accent: "#fef17b",
    black: "#000000",
    white: "#ffffff",
    grey: "#E1E0E0",
    greyMedium: "#E1E0E0",
    greyLight: "#F5F5F5",
};

export default create({
    base: "light",
    colorPrimary: colors.accent,
    colorSecondary: colors.accent,
    brandTitle: "Tacos Toppings",
    brandUrl: "https://github.com/allomambo/tacos-toppings",
    brandImage: "favicon.svg",
    brandTarget: "_blank",

    // UI
    appBg: colors.greyLight,
    appContentBg: colors.white,
    appBorderColor: colors.grey,
    appBorderRadius: 10,

    // Typography
    fontBase: "Arial, sans-serif",
    fontCode: "monospace",
    textColor: colors.black,
    textInverseColor: "rgba(255,255,255,0.9)",

    // Toolbar default and active colors
    barTextColor: colors.black,
    barSelectedColor: colors.black,
    barBg: colors.grey,

    // Form colors
    inputBg: colors.white,
    inputBorder: colors.greyMedium,
    inputTextColor: colors.black,
    inputBorderRadius: 5,
});
