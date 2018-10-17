# Smoke Test

This is a demo application showing the use of the [enzyme shallow renderer](http://airbnb.io/enzyme/docs/api/ShallowWrapper/shallow.html) to execute the initial render run of a component without running any of it's children. Thus we're only testing the Component itself! A smoke test simply makes a shallow render of a component to make sure it does not throw an error.

## Instructions

* Run `yarn` to install dependencies
* Run `yarn test --verbose` to run tests (you may need to hit `a` to run all tests) (the `--verbose` flag is not required but gives a little more information about which tests were run)
* Check out new devDependencies in package.json, these will only install if the environment is not marked as production (`NODE_ENV=production`)
* Look at setupTests.js, this is a file that create-react-app is [setup to run](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#initializing-test-environment) before any tests are run, it's used here to [configure enzyme for React 16](http://airbnb.io/enzyme/docs/installation/#working-with-react-16)
* Observe the use of `.instance()` in App.test.js to retrieve the raw created instance of our App component that we can then inspect the `.state` of.