import { defineConfig } from "vitepress";

const NAV_ITEMS = [
    {
        text: "Get started",
        items: [
            { text: "Installation", link: "/installation" },
            { text: "Usage", link: "/usage" },
            { text: "Code convention", link: "/code-convention" },
        ],
    },
    {
        text: "Components",
        items: [
            { text: "Overview", link: "/components/" },
            {
                text: "Basic",
                items: [
                    { text: "QuesoClickable", link: "/components/clickable" },
                    { text: "QuesoCollapsible", link: "/components/collapsible" },
                    { text: "QuesoDropdown", link: "/components/dropdown" },
                    { text: "QuesoModal", link: "/components/modal" },
                    { text: "QuesoScrollable", link: "/components/scrollable" },
                ],
            },
            {
                text: "Form",
                items: [
                    { text: "QuesoCheckbox", link: "/components/checkbox" },
                    { text: "QuesoPassword", link: "/components/password" },
                    { text: "QuesoRadio", link: "/components/radio" },
                    { text: "QuesoSelect", link: "/components/select" },
                    { text: "QuesoTextArea", link: "/components/text-area" },
                    { text: "QuesoTextField", link: "/components/text-field" },
                ],
            },
        ],
    },
    {
        text: "Sass core",
        items: [
            { text: "Overview", link: "/sass-core/" },
            {
                text: "Mixins",
                items: [
                    { text: "A11y", link: "/sass-core/a11y" },
                    { text: "Breakpoints", link: "/sass-core/breakpoints" },
                    { text: "Containers", link: "/sass-core/containers" },
                    { text: "Grid", link: "/sass-core/grid" },
                    { text: "Layout", link: "/sass-core/layout" },
                    { text: "Flex", link: "/sass-core/flex" },
                    { text: "Typography", link: "/sass-core/typography" },
                    { text: "Visuals", link: "/sass-core/visuals" },
                    { text: "Misc", link: "/sass-core/misc" },
                ],
            },
            {
                text: "Functions",
                items: [
                    { text: "Maths", link: "/sass-core/maths" },
                    { text: "Shortcuts", link: "/sass-core/shortcuts" },
                    { text: "Map", link: "/sass-core/map" },
                    { text: "Units", link: "/sass-core/units" },
                ],
            },
        ],
    },
    {
        text: "Utils",
        items: [
            { text: "capitalize", link: "/utils#capitalize" },
            { text: "getFirstObjectOfArray", link: "/utils#getfirstobjectofarray" },
            { text: "resizeEnd", link: "/utils#resizeend" },
            { text: "toCamelCase", link: "/utils#tocamelcase" },
            { text: "toKebabCase", link: "/utils#tokebabcase" },
            { text: "toPascalCase", link: "/utils#topascalcase" },
            { text: "toSnakeCase", link: "/utils#tosnakecase" },
            { text: "toMailTo", link: "/utils#tomailto" },
            { text: "toTel", link: "/utils#totel" },
        ],
    },
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Queso",
    description: "VueJS component library to use in conjunction with Arepa",
    lang: "en-CA",
    head: [
        // ["link", { rel: "icon", type: "image/svg+xml", href: "/vitepress-logo-mini.svg" }],
        ["link", { rel: "icon", type: "image/png", href: "/cheese-wedge.png" }],
        ["meta", { name: "theme-color", content: "#5f67ee" }],
        ["meta", { property: "og:type", content: "website" }],
        ["meta", { property: "og:site_name", content: "Queso" }],
        // [
        //     "meta",
        //     {
        //         property: "og:image",
        //         content: "https://mambomambo.github.io/queso/vitepress-og.jpg",
        //     },
        // ],
        ["meta", { property: "og:url", content: "https://mambomambo.github.io/queso" }],
    ],
    cleanUrls: true,
    lastUpdated: true,

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: { src: "/cheese-wedge.png", width: 24, height: 24 },

        search: {
            provider: "local",
        },

        nav: [...NAV_ITEMS],

        socialLinks: [
            { icon: "npm", link: "https://www.npmjs.com/package/@allomambo/queso" },
            { icon: "github", link: "https://github.com/allomambo/queso" },
        ],

        sidebar: [...NAV_ITEMS],

        footer: {
            copyright: `MamboMambo © 2024-present`,
        },
    },
});
