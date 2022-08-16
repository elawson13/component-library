## Live Storybook

[Storybook](https://main--62f2ac6440da3214a498dc36.chromatic.com/)

## Live Chromatic

[Chromatic](https://www.chromatic.com/builds?appId=62f2ac6440da3214a498dc36&inviteToken=ec27690871864df3936b71f869e4c9df)

## Getting Start

- install NVM and install node@16.15.1

```
nvm use
npm i
npm run sb
```

## Local development

### `npm run sb`

This will start storybook

### `npm run verify`

Launches the linter and the test runner.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run chromatic`

Runs chromatic CLI to run UI tests and verify UI changes.

See this guide about [chromatic](https://submittable.atlassian.net/wiki/spaces/EN/pages/933134350/Guide+Chromatic+Workflow)
