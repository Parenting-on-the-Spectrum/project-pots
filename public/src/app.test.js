/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, getByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './components/people/about.jsx';
import Mission from './components/mission.jsx';
import Footer from './components/footer.jsx';
import CaregiverVideos from './components/vidComps/caregiverVideos.jsx';
import KidVideos from './components/vidComps/kidVideos.jsx';
import Tips from './components/tips/tipsTricks.jsx';

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
    render(<Mission />);
    expect(screen.getByText(/inclusivity/)).toBeInTheDocument();
  });

  test("About loads up as a function", () => {
    expect(typeof About).toBe('function')
  });

  test("Footer", () => {
    render(<Footer />);
    expect(screen.getByText(/Who/)).toBeInTheDocument();
  });

});

describe("Empty catch tests", function () {

  test("Empty About catch for loading progressbar", async () => {
    render(<About />);
    await screen.findAllByRole("progressbar")
      .then((data) => {
        expect(data.length).toBeGreaterThan(0);
      })
  });

  test("Empty CaregiverVideos catch for loading progressbar", async () => {
    render(<CaregiverVideos />);
    await screen.findAllByRole("progressbar")
      .then((data) => {
        expect(data.length).toBeGreaterThan(0);
      })
  });

  test("Empty KidVideos catch for loading progressbar", async () => {
    render(<KidVideos />);
    await screen.findAllByRole("progressbar")
      .then((data) => {
        expect(data.length).toBeGreaterThan(0);
      })
  });

  test("Empty Tips catch for loading progressbar", async () => {
    render(<Tips />);
    await screen.findAllByRole("progressbar")
      .then((data) => {
        expect(data.length).toBeGreaterThan(0);
      })
  });

});