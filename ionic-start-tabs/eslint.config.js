import js from "@eslint/js";
import tseslint from "typescript-eslint";
import solid from "eslint-plugin-solid";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [
	...tseslint.config(
		js.configs.recommended,
		...tseslint.configs.recommended,
		{
			rules: {
				"@typescript-eslint/consistent-type-imports": "error",
			},
		},
		...compat.config(solid.configs.recommended, solid.configs.typescript, {
			env: {
				node: true,
			},
			parserOptions: {
				ecmaVersion: 2020,
			},
			rules: {
				// eslint-disable-next-line no-undef
				"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
				// eslint-disable-next-line no-undef
				"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
			},
		}),
		{
			ignores: ["**/dist/**/*"],
		},
	),
];
