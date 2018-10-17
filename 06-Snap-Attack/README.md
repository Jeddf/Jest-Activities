# Snap Attack

Snapshots have their pitfalls, snapshot testing the Input component isn't going to be quite so straightforward...

## Instructions

* Run `yarn` to install dependencies
* Run `yarn test --verbose` to run tests
* Add a smoke test and snapshot test for Input (HINT: they're going to be very similar to those in App.test.js)
* Run `yarn test` multiple times. Why does it keep failing? Discuss with partner.
* BONUS: Read up on [jest.mock](https://facebook.github.io/jest/docs/en/jest-object.html#jestmockmodulename-factory-options) and code a fix. (HINT: the jest object is available as a global in tests because we're running them with jest)
* BONUS: Compare the App snapshot in the last activity (Snap-It-Up) with the App snapshot you just made here by running the tests. Why are the components' names now shown? What has changed about the Grid and Form components to make this happen?

### Files to edit
src/components/Form/Input.test.js