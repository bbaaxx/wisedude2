/* eslint-env jasmine */
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import {Home} from './home';

describe('home component', () => {
  it('should render hello world', () => {
    const home = TestUtils.renderIntoDocument(<Home/>);
    const h1 = TestUtils.findRenderedDOMComponentWithTag(home, 'h1');
    expect(h1.textContent).toEqual('Hello home!');
  });
});
