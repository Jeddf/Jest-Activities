import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('should render without erroring', () => {
    const app = shallow(<App />);
});

// Add case here to test that initial state.spaceName is correct