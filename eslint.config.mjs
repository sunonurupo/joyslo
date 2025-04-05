import js from '@eslint/js'
import prettier from 'eslint-config-prettier' //Prettierと競合するルールをOFFにしてくれる（Prettier使うなら必要）
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import tailwindcss from 'eslint-plugin-tailwindcss'

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
    },
    rules: {
      ...typescriptPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...tailwindcss.configs.recommended.rules,

      'react/react-in-jsx-scope': 'off', // React 17以降は不要
      'no-undef': 'off', // TypeScriptが未定義エラーを検知してくれるので不要
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  prettier,
]
