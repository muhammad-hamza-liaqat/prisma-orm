import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig({
  languageOptions: {
    sourceType: "module",
    globals: globals.node,
  },
  rules: {
    "no-console": "off",
  },
});
