import React from 'react';
import { shallow } from 'enzyme';
import { Input } from '.';

jest.mock('../../utils', () => ({
    randomColour: jest.fn(() => 'mockColor')
}));

it('should render without erroring', () => {
    const app = shallow(
        <Input
            name="mockName"
            displayName="mockDisplayName"
            value="mockValue"
            onChange={(noop)=>{}}
        />
    );
});

it('should match past snapshot', () => {
    const input = shallow(
        <Input
            name="mockName"
            displayName="mockDisplayName"
            value="mockValue"
            onChange={(noop)=>{}}
        />
    );
    expect(input).toMatchSnapshot();
});