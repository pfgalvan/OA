# React Native Base App
Base for a React Native App with typescript lint verification based on standardJS and using git-commit-msg-linter, lint-staged, husk and jest.

## Install
Use `npm` or `yarn` to create or run the project.

### Creating the project
To create this same project by your own just type the below command:
`npx react-native init react_native_app_base --template react-native-template-typescript` 

### Development Dependencies
- Eslint, install with `yarn add -D eslint`;
- Eslint plugin, install with `yarn -D @typescript-eslint/eslint-plugin`;
- Git Commit message linter, install with `yarn add -D -D git-commit-msg-linter`;
- Husk, install with `yarn add -D husk`;
- Lint Staged, install with `yarn add -D lint-staged`;
- Jest, install with `yarn add -D jest @types/jest ts-jest`.

### Visual Studio Code Extensions
- ESLint, the extension ID is: `dbaeumer.vscode-eslint`;
- StandardJS, the extension ID is: `standard.vscode-standard`;
- Import Cost, the extension ID is: `wix.vscode-import-cost`;
- GitHub Actions, the extension ID is: `cschleiden.vscode-github-actions`;
- TypeScript Extension Pack, the extension ID is: `loiane.ts-extension-pack`.

## Run
Use `npm` or `yarn` to run the scripts below:
- `yarn android` to run the app for android;
- `yarn ios` to run the app for ios;
- `yarn start` to run the app for web;
- `yarn test` to run the unit tests;
- `yarn test:staged` to run the unit tests;
- `yarn lint` to run the code lint.
