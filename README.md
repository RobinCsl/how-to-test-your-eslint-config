## How to test your ESLint config

This project is supporting the [How to test your ESLint config](https://www.robincussol.com/how-to-test-your-eslint-config) article on my blog.

### How this repo was initiliased

- `npm init -y`
- `npm install --dev eslint`
- `npm install date-fns`
- `eslint --init`

  ```
  ✔ How would you like to use ESLint? · problems
  ✔ What type of modules does your project use? · esm
  ✔ Which framework does your project use? · none
  ✔ Does your project use TypeScript? · No / Yes
  ✔ Where does your code run? · node
  ✔ What format do you want your config file to be in? · JavaScript
  Successfully created .eslintrc.js file in ~/Repositories/testing-eslint-config
  ```

- add this rule to `.eslintrc.js`:

  ```javascript
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

  ```

- add an `__eslinttests__` folder with the offending code
- add a `test:eslintConfig` npm script in your `package.json` with command `"eslint __eslinttests__ --report-unused-disable-directives"`.

### License

See [LICENSE](LICENSE)
