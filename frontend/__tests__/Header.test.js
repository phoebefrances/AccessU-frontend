import { render, screen } from "@testing-library/react";
import Image from '../components/Header.js';
import Header from '../components/Header.js'
import "@testing-library/jest-dom";


test("Testing Image", function () {
  //ARRANGE
  //render the component that we are testing
  render(<Image />);
  //ACT
  const img = screen.getByAltText('Logo');
  //ASSERT
  expect(img).toBeInTheDocument();
});

