# Pass the tests (with flying colours)

Today is all about Jest!
It's a testing framework that replaces mocha & chai and is written especially for React by Facebook
[Check out the docs](https://facebook.github.io/jest/docs/en/getting-started.html).

Conveniently enough it is included by default in [create-react-app](https://github.com/facebook/create-react-app) so when starting a React app with `create-react-app <appName>` we can start adding tests straight away. The project you'll be building up in the rest of the activities here has been initialized with `create-react-app`.

## Instructions

* Run `yarn` to install dependencies
* Run `yarn test --verbose` to run tests (you may need to hit `a` to run all tests) (the `--verbose` flag is not required but gives a little more information about which tests were run)
* Write and export a randomColour function from src/utils/index.js to satisfy the failing tests.
* BONUS: the jest runner has a lot of test functionality accessible using flags, try the following to see what happens: `yarn test --coverage`, `yarn test --json`. Read more [here](https://facebook.github.io/jest/docs/en/cli.html#options).

### Files to edit

* src/utils/index.js