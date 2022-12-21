import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ outputDir: "dist/tsc" })],
  build: {
    minify: true,
    // sourcemap: true,
    rollupOptions: {
      input: "src/index.ts",
      preserveEntrySignatures: "strict",
      output: [
        {
          dir: "dist/cjs",
          format: "cjs",
          exports: "named",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].cjs",
          chunkFileNames: "[name].cjs",
        },
        {
          dir: "dist/mjs",
          format: "esm",
          exports: "named",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: "[name].mjs",
          chunkFileNames: "[name].mjs",
        },
        {
          name: "naff",
          dir: "dist/umd",
          format: "umd",
          exports: "named",
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
        },
      ],
    },
  },
});
