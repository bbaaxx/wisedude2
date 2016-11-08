/* eslint-env jasmine */
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import {Sandbox} from './Sandbox';

describe('sandbox component', () => {
  xit('should render a button', () => {
    const sandbox = TestUtils.renderIntoDocument(<Sandbox/>);
    const button = TestUtils.findRenderedDOMComponentWithTag(sandbox, 'button');
    expect(button.textContent).toBeEqual('Again');
  });
});
