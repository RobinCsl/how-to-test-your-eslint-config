## How to test your ESLint config

This project is supporting the [How to test your ESLint config](https://www.robincussol.com/how-to-test-your-eslint-config) article on my blog.

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/import/github/RobinCsl/how-to-test-your-eslint-config)

Remixing on Glitch will allow you to have access to a terminal to run `npm run lint` or `npm run test:eslintConfig`. You could experiment with commenting/uncommenting certain parts of this repo and see how it affects these 2 npm scripts.

> To access the terminal on Glitch, you can go into `Tools` (bottom left corner) > `Terminal`, or press <kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>X</kbd>.

For example, you could try:

- to remove the configuration which restricts `date-fns/locale` from being imported;
- to add an `// eslint-disable-next-line` in `index.js` to suppress the linting error;
- to copy `index.js` into a nested folder and add your own `.eslintrc.js` file which would override the `no-restricted-import` rule (this should keep `npm run test:eslintConfig` passing...);
- to harden this setup with the suggestions from my [How to test your ESLint config](https://www.robincussol.com/how-to-test-your-eslint-config) article.

### License

See [LICENSE](LICENSE)
