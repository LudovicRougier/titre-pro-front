module.exports = {
  extends: ["../.eslintrc.cjs", "plugin:cypress/recommended"],

  plugins: ["cypress"],

  parserOptions: {
    sourceType: "module",
  },

  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "sonarjs/no-duplicate-string": "off",
  },
};
