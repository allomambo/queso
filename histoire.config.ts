import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";

export default defineConfig({
    plugins: [HstVue()],
    vite: {
        resolve: {
            mainFields: ["module", "jsnext:main", "jsnext"],
        },
    },
});
