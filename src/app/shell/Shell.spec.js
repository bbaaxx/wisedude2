/* eslint-env jasmine */
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import {Shell} from './Shell';

describe('Shell component', () => {
  describe('DOM elements', () => {
    let shell;
    beforeEach(() => {
      shell = TestUtils.renderIntoDocument(<Shell/>);
    });
    afterEach(() => {
      shell = null;
    });
    it('should render a outer-shell DOM element', () => {
      const outerShell = TestUtils
        .findRenderedDOMComponentWithClass(shell, 'outer-shell');
      expect(TestUtils.isDOMComponent(outerShell)).toBe(true);
    });

    it('should render a routing-shell DOM element', () => {
      const routingShell = TestUtils
        .findRenderedDOMComponentWithClass(shell, 'routing-shell');
      expect(TestUtils.isDOMComponent(routingShell)).toBe(true);
    });
    it('should render a heading-shell DOM element', () => {
      const headingShell = TestUtils
        .findRenderedDOMComponentWithClass(shell, 'heading-shell');
      expect(TestUtils.isDOMComponent(headingShell)).toBe(true);
    });
    it('should render a footing-shell DOM element', () => {
      const footingShell = TestUtils
        .findRenderedDOMComponentWithClass(shell, 'footing-shell');
      expect(TestUtils.isDOMComponent(footingShell)).toBe(true);
    });
  }); // End DOM elements

  describe('Props with components', () => {
    let headingShell;
    let routingShell;
    let footingShell;

    beforeEach(() => {
      const mockHeadingComponent = (<span>Mock header</span>);
      const mockRoutingComponent = (<span>Mock routing</span>);
      const mockFootingComponent = (<span>Mock footing</span>);
      const shell = TestUtils.renderIntoDocument(
        <Shell
          headingComponent={mockHeadingComponent}
          routes={mockRoutingComponent}
          footingComponent={mockFootingComponent}
          />
      );
      headingShell = TestUtils
        .findRenderedDOMComponentWithClass(shell, 'heading-shell');
      routingShell = TestUtils
        .findRenderedDOMComponentWithClass(shell, 'routing-shell');
      footingShell = TestUtils
        .findRenderedDOMComponentWithClass(shell, 'footing-shell');
    });

    it('should render a headingContainerComponent', () => {
      expect(headingShell.innerHTML).toContain('Mock header');
    });
    it('should render a routingContainerComponent', () => {
      expect(routingShell.innerHTML).toContain('Mock routing');
    });
    it('should render a footignContainerComponent', () => {
      expect(footingShell.innerHTML).toContain('Mock footing');
    });
  });
});
