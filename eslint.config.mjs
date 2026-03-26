import nextVitals from "eslint-config-next/core-web-vitals";
import prettierConfig from "eslint-config-prettier";

const eslintConfig = [
  ...nextVitals,
  prettierConfig,
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
];

export default eslintConfig;
