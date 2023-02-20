import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        build: {
            outDir: "dist",
            emptyOutDir: true,
            lib: {
                entry: resolve(__dirname, "src/components.ts"),
                name: "Queso",
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
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@assets/scss/main.scss";`,
                },
            },
            devSourcemap: true,
        },
        resolve: {
            alias: {
                "@": resolve(__dirname, "./src"),
                "@assets": resolve(__dirname, "./src/assets"),
                "@components": resolve(__dirname, "./src/components"),
            },
        },
        plugins: [
            vue(),
            dts({
                outputDir: "declaration",
            }),
        ],
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
