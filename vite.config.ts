import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { resolve, dirname, sep } from "path";

const libEntryFile = resolve(__dirname, "src/components.ts");
const libEntryFileDir = dirname(libEntryFile);

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        build: {
            outDir: "dist",
            emptyOutDir: true,
            lib: {
                formats: ["es", "cjs"],
                entry: libEntryFile,
                name: "Queso",
                fileName: "index",
            },
            rollupOptions: {
                external: ["vue"],
                output: {
                    globals: {
                        vue: "Vue",
                    },
                    inlineDynamicImports: false,
                    manualChunks(id, { getModuleInfo }) {
                        const entryModuleInfo = getModuleInfo(libEntryFile);
                        if (entryModuleInfo) {
                            const entryModuleImportedIds = entryModuleInfo.importedIds;
                            if (entryModuleImportedIds.includes(id)) {
                                return dirname(id).replace(libEntryFileDir + sep, "");
                            }
                        }
                    },
                    assetFileNames: "assets/[name][extname]",
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
        plugins: [vue(), libInjectCss(), dts()],
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
