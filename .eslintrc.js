module.exports = {
  env: {
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "date-fns/locale",
            message:
              "Please, import a specific locale instead, e.g. `import enUS from 'date-fns/locale/en-US';`",
          },
        ],
        patterns: ["!date-fns/locale/*"],
      },
    ],
  },
};
