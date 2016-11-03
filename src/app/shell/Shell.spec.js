/* eslint-env jasmine */
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import {Shell} from './Shell';

describe('hello component', () => {
  it('should render hello world', () => {
    const shell = TestUtils.renderIntoDocument(<Shell/>);
    const h1 = TestUtils.findRenderedDOMComponentWithTag(shell, 'h1');
    expect(h1.textContent).toEqual('Hello shell!');
  });
});
