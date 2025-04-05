import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import tailwindcss from 'eslint-plugin-tailwindcss'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      react: reactPlugin,
      tailwindcss,
      prettier: prettierPlugin,
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...tailwindcss.configs.recommended.rules,
      'prettier/prettier': 'warn', // prettierと統合
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  prettier, // Prettierと競合するルールを無効化
]
