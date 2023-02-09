import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        build: {
            outDir: "dist",
            emptyOutDir: true,
            lib: {
                entry: resolve(__dirname, "src/components.ts"),
                name: "TacosToppings",
                fileName: "index",
            },
            rollupOptions: {
                external: ["vue"],
                output: {
                    globals: {
                        vue: "Vue",
                    },
                },
            },
        },
        publicDir: "src/static",
        resolve: {
            alias: {
                "@": resolve(__dirname, "./src"),
                "@components": resolve(__dirname, "./src/components"),
            },
        },
        plugins: [vue()],
        optimizeDeps: {
            include: ["vue"],
            exclude: [],
        },
        test: {
            /* for example, use global to avoid globals imports (describe, test, expect): */
            // globals: true,
            environment: "happy-dom",
            deps: {
                inline: ["@vue/test-utils"],
            },
            exclude: ["**/*.spec.ts", "node_modules"],
        },
    };
});
