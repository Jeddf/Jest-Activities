import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('should render without erroring', () => {
    const app = shallow(<App />);
});

it ('should have an empty initial string on state for firstName', function () {
    const app = shallow(<App />);
    expect(app.instance().state.firstName).toEqual('');
})
