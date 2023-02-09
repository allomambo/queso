import type { StorybookViteConfig } from "@storybook/builder-vite";
// import { loadConfigFromFile, mergeConfig } from "vite";
// import { resolve } from "path";

const config: StorybookViteConfig = {
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
    // addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
    core: {
        builder: "@storybook/builder-vite",
    },
    async viteFinal(config, options) {
        // Add your configuration here
        return config;
    },
};

// module.exports = {
//     stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
//     addons: [
//         "@storybook/addon-links",
//         "@storybook/addon-essentials",
//         "@storybook/addon-interactions",
//         "@storybook/preset-scss",
//         "@bissolli/storybook-css-properties",
//     ],
//     framework: "@storybook/vue3",
//     core: {
//         builder: "@storybook/builder-vite",
//     },
//     features: {
//         storyStoreV7: true,
//         buildStoriesJson: true,
//     },

//     async viteFinal(previousConfig) {
//         const { config } = await loadConfigFromFile(path.resolve(__dirname, "../vite.config.ts"));

//         return mergeConfig(previousConfig, {
//             ...config,
//             base: "./",
//             build: {},
//             plugins: [],
//         });
//     },
// };
