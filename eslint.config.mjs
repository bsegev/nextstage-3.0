import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    rules: {
      // Disable strict type checking temporarily
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-unused-vars": "warn", // warn instead of error
      
      // Disable some React specific rules
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/display-name": "off",
      
      // Make these warnings instead of errors
      "no-unused-vars": "off", // Turn off base rule as it can report incorrect errors
      "no-console": "warn",
      
      // Disable some strict rules
      "@next/next/no-img-element": "off",
      "react-hooks/exhaustive-deps": "warn" // warn instead of error
    }
  }
];

export default eslintConfig;
