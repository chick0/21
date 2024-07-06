import js from "@eslint/js"
import svelte from "eslint-plugin-svelte"
import prettier from "eslint-config-prettier"
import globals from "globals"

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    js.configs.recommended,
    ...svelte.configs["flat/recommended"],
    prettier,
    ...svelte.configs["flat/prettier"],
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    {
        ignores: [
            // Ignore files for SvelteKit
            ".svelte-kit/",

            // Ignore for build result
            "build/",
            "dist/",

            // Ignore files for pnpm
            "pnpm-lock.yaml",
            "package-lock.json",
            "node_modules/",
        ],
    },
]
