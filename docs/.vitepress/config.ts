import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "🧀 Queso",
    description: "VueJS component library to use in conjunction with Arepa",
    cleanUrls: true,
    lastUpdated: true,

    head: [
        ["link", { rel: "icon", type: "image/svg+xml", href: "/vitepress-logo-mini.svg" }],
        ["link", { rel: "icon", type: "image/png", href: "/vitepress-logo-mini.png" }],
        ["meta", { name: "theme-color", content: "#5f67ee" }],
        ["meta", { property: "og:type", content: "website" }],
        ["meta", { property: "og:site_name", content: "Queso" }],
        [
            "meta",
            {
                property: "og:image",
                content: "https://mambomambo.github.io/queso/vitepress-og.jpg",
            },
        ],
        ["meta", { property: "og:url", content: "https://mambomambo.github.io/queso" }],
    ],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: { src: "/vitepress-logo-mini.svg", width: 24, height: 24 },

        search: {
            provider: "local",
        },

        nav: [
            { text: "Home", link: "/" },
            {
                text: "Components",
                items: [
                    { text: "QuesoComponent", link: "/components/queso-component" },
                    { text: "QuesoButton", link: "/components/queso-button" },
                    { text: "QuesoInput", link: "/components/queso-input" },
                    { text: "QuesoSelect", link: "/components/queso-select" },
                    { text: "QuesoTextarea", link: "/components/queso-textarea" },
                    { text: "QuesoCheckbox", link: "/components/queso-checkbox" },
                    { text: "QuesoRadio", link: "/components/queso-radio" },
                    { text: "QuesoSwitch", link: "/components/queso-switch" },
                ],
            },
            {
                text: "Sass core",
                items: [
                    { text: "Core", link: "/sass-core/core" },
                    { text: "Variables", link: "/sass-core/variables" },
                    { text: "Mixins", link: "/sass-core/mixins" },
                    { text: "Functions", link: "/sass-core/functions" },
                ],
            },
            {
                text: "Utils",
                items: [
                    { text: "toCamelCase", link: "/utils/to-camel-case" },
                    { text: "toKebabCase", link: "/utils/to-kebab-case" },
                    { text: "toPascalCase", link: "/utils/to-pascal-case" },
                    { text: "toSnakeCase", link: "/utils/to-snake-case" },
                ],
            },
        ],

        socialLinks: [{ icon: "github", link: "https://github.com/allomambo/queso" }],

        sidebar: [
            {
                text: "Get started",
                items: [
                    { text: "Installation", link: "/installation" },
                    { text: "Usage", link: "/usage" },
                ],
            },
            {
                text: "Components",
                items: [
                    { text: "QuesoComponent", link: "/components/queso-component" },
                    { text: "QuesoButton", link: "/components/queso-button" },
                    { text: "QuesoInput", link: "/components/queso-input" },
                    { text: "QuesoSelect", link: "/components/queso-select" },
                    { text: "QuesoTextarea", link: "/components/queso-textarea" },
                    { text: "QuesoCheckbox", link: "/components/queso-checkbox" },
                    { text: "QuesoRadio", link: "/components/queso-radio" },
                    { text: "QuesoSwitch", link: "/components/queso-switch" },
                ],
            },
            {
                text: "Sass core",
                items: [
                    { text: "Core", link: "/sass-core/core" },
                    { text: "Variables", link: "/sass-core/variables" },
                    { text: "Mixins", link: "/sass-core/mixins" },
                    { text: "Functions", link: "/sass-core/functions" },
                ],
            },
            {
                text: "Utils",
                items: [
                    { text: "toCamelCase", link: "/utils/to-camel-case" },
                    { text: "toKebabCase", link: "/utils/to-kebab-case" },
                    { text: "toPascalCase", link: "/utils/to-pascal-case" },
                    { text: "toSnakeCase", link: "/utils/to-snake-case" },
                ],
            },
            {
                text: "Examples",
                items: [
                    { text: "Markdown Examples", link: "/markdown-examples" },
                    { text: "Runtime API Examples", link: "/api-examples" },
                ],
            },
        ],
    },
});
