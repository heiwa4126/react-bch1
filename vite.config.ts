import react from "@vitejs/plugin-react";
import { defineConfig, lazyPlugins } from "vite-plus";

// https://viteplus.dev/config/
export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    options: { typeAware: true, typeCheck: true },
  },
  plugins: lazyPlugins(() => [react()]),
  build: {
    rolldownOptions: {
      output: {
        minify: true,
        codeSplitting: {
          groups: [{ name: "r", test: /node_modules[\\/](react|react-dom)([\\/]|$)/ }],
        },
      },
    },
  },
});
