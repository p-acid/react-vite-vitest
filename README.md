# TDD Practice

## Getting Started

```sh
# with React + TypeScript + SWC
npm create vite@latest
```

## Dependencies

```sh
npm install -D vitest jsdom @testing-library/jest-dom @testing-library/react @testing-library/user-event
```

## Config

> References: [Stackoverflow](https://stackoverflow.com/questions/72146352/vitest-defineconfig-test-does-not-exist-in-type-userconfigexport)

```js
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
```
