const js = require('@eslint/js')
const globals = require('globals')
const reactHooks = require('eslint-plugin-react-hooks')
const reactRefresh = require('eslint-plugin-react-refresh')
const tseslint = require('typescript-eslint')
// const tsEslintPlugin = require('@typescript-eslint/eslint-plugin')

// Configuración unificada para archivos TypeScript y TSX
module.exports = tseslint.config(
  { ignores: ['dist'] },
  {
    // Extiende las configuraciones recomendadas de ESLint y TypeScript
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    // En flat config se definen las opciones de lenguaje acá
    languageOptions: {
      ecmaVersion: 2020,
      // Aquí definimos las variables globales que usábamos en "env"
      globals: {
        // Variables globales para navegador (como window, document, etc.)
        ...globals.browser,
        // Variables globales para Node.js (por ejemplo, process, __dirname, etc.)
        ...globals.node,
        // Variables propias de Jest (si las usas)
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly'
      },
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        project: "./tsconfig.base.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
      },
    },
    // Plugins que usas
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      // "@typescript-eslint": tsEslintPlugin,
    },
    // Reglas combinadas de tus configuraciones anteriores
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "linebreak-style": "off",
      "quotes": ["error", "double"],
      "semi": ["error", "never"],
      // Reglas específicas que tenías en tu otro archivo
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
)

// (Opcional) Configuración para archivos JavaScript/JSX si fuera necesario
// const jsConfig = {
//   files: ["**/*.{js,jsx}"],
//   languageOptions: {
//     ecmaVersion: 2020,
//     globals: {
//       ...globals.browser,
//       ...globals.node,
//     },
//   },
// }

// export default [tsConfig]
