# Mock Space

Using the information at [http://api.open-notify.org/astros.json](http://api.open-notify.org/astros.json) we're going to write a utility using [axios](https://github.com/axios/axios#axios-api) that will check if a person is in space (??!?!?!). The tests have been written already in src/utils/utils.test.js, you've just gotta make 'em pass!

## Instructions

* Run `yarn` to install dependencies
* Run `yarn test --verbose` to run tests
* Visit http://api.open-notify.org/astros.json in your browser and look at the data structure.
* Read through the new test cases in src/utils/utils.test.js for checkIfInSpace, note the axios mock implementation and use of the same mockData in both the mock and tests.
* In the function skeleton in src/utils/index.js, write a function that will pass the test cases.

### Files to edit
src/utils/index.js