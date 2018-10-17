import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('should render without erroring', () => {
    const app = shallow(<App />);
});

it ('should have the correct initial spaceName value', () => {
    const app = shallow(<App />);
    expect(app.instance().state.spaceName).toEqual('Chris Hadfield');
});

it ('should match previous snapshot', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
});