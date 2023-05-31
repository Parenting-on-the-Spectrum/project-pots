/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './public/src/App.jsx'

describe("Initial Page can Load", function () {

  test("Orders is a function", () => {
    expect(typeof App).toBe('function')
  });

  test('renders here', () => {
    render(<App/>);
    expect(screen.getByText(/Pots/)).toBeInTheDocument();
  });
});