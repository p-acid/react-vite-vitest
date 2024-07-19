import react from "@vitejs/plugin-react-swc";

import { defineConfig as defineViteConfig, mergeConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";

const viteConfig = defineViteConfig({
  plugins: [react()],
});

const vitestConfig = defineVitestConfig({
  test: {
    environment: "jsdom",
  },
});

export default mergeConfig(viteConfig, vitestConfig);
