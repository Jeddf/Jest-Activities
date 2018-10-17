# Snap It Up

One of the most powerful features of Jest is [snapshots](https://facebook.github.io/jest/docs/en/snapshot-testing.html), run the tests here to see a __snapshots__ folder appear. By using `toMatchSnapshot()` on our expect assertion instead of something like `toEqual()` we are asking jest to take a snapshot of whatever value appears on the test run and then compare all future test runs for that case against that snapshot. If the snapshot ever changes our test will 'fail' and show exactly what has changed, if the change is one that is expected hitting `u` will make that change to the existing snapshot. We've added a devDependency and there is a little more config we've added to the `package.json` to make enzyme shallow rendered components snapshottable by Jest, read about that [here](https://github.com/adriantoine/enzyme-to-json#usage).

## Instructions
* Check out new devDependencies in `package.json`, these will only install if the environment is not marked as production (`NODE_ENV=production`)
* Look again at `package.json` to see the added jest config to make serializing enzyme shallow rendered components into strings.
* Run `yarn` to install dependencies
* Run `yarn test --verbose` to run tests (you may need to hit `a` to run all tests) (the `--verbose` flag is not required but gives a little more information about which tests were run)
* Observe the snapshot test added in `App.test.js`.
* Check out the new `__snapshots__` folder added and the file within.
