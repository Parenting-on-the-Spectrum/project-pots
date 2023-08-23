/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, getByText } from '@testing-library/react';
// import '@testing-library/jest-dom';
import Mission from './components/mission.jsx';

describe("Example tests", function () {

  test('sample test', () => {
    expect(true).toEqual(true);
  });

  test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });

});

describe("Page tests", function () {

  test("Mission is a function", () => {
    expect(typeof Mission).toBe('function')
  });

  test('Mission renders', () => {
    /*
    render(<Mission />);
    console.log(screen.getByText(/complexities/))

    expect(screen.getByText(/complexities/).includes()).toEqual(true);
    expect(screen.getByText(/complexities/)).toBeInTheDocument();
    npm i --save-dev @testing-library/jest-dom
    */

   let texts = Mission().props.children[0].props.children;
   expect(texts.includes('Parenting')).toEqual(true);
  });

});
