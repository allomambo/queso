import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";

import vue from "@vitejs/plugin-vue";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
    plugins: [HstVue()],
    vite: {
        build: {
            cssCodeSplit: true,
        },
        resolve: {
            mainFields: ["module", "jsnext:main", "jsnext"],
        },
        plugins: [vue(), libInjectCss()],
    },
});
