import { render, screen } from "@testing-library/react";
import About from "../pages/About";
import "@testing-library/jest-dom";
import { ChakraProvider } from "@chakra-ui/react";

function MockAbout() {
  return (
    <ChakraProvider>
      <About />
    </ChakraProvider>
  );
}
it("should render the heading", () => {
  //This MockAbout is necessary as we have to wrap every component we render for testing in ChakraProvider. However, if we try to do it in render() below, Jest will throw an error
  const textToFind = "Welcome!";

  render(<MockAbout />);
  const heading = screen.getByText(textToFind, { exact: false });

  expect(heading).toBeInTheDocument();
});

it("should render the words from page in first ", () => {
  const textToFind = "Do you have to spend ages planning your trip?";

  render(<MockAbout />);
  const heading = screen.getByText(textToFind, { exact: false });

  expect(heading).toBeInTheDocument();
});

it("should render the words from second part from page", () => {
  const textToFind = "Do you have to spend ages planning your trip?";

  render(<MockAbout />);
  const heading = screen.getByText(textToFind, { exact: false });

  expect(heading).toBeInTheDocument();
});

it("should render the words from third part from page", () => {
  const textToFind =
    "Have you visited somewhere to only find the access wasn't as you thought?";

  render(<MockAbout />);
  const heading = screen.getByText(textToFind, { exact: false });

  expect(heading).toBeInTheDocument();
});

it("should render the words from fourth part from page", () => {
  const textToFind =
    "Are you anxious visiting a new place so much so it stopped you from making that trip?";

  render(<MockAbout />);
  const heading = screen.getByText(textToFind, { exact: false });

  expect(heading).toBeInTheDocument();
});

it("should render the words from fourth part from page", () => {
  const textToFind =
    "Enabled is here to take the stress out of planning. Our aim is to provide you with all the accessibility information you need in order to plan your trip";

  render(<MockAbout />);
  const heading = screen.getByText(textToFind, { exact: false });

  expect(heading).toBeInTheDocument();
});

it("should render the words from fifth part from page", () => {
  const textToFind =
    "With Enabled we hope you can be more spontaneous, visit, recommend and return!";

  render(<MockAbout />);
  const heading = screen.getByText(textToFind, { exact: false });

  expect(heading).toBeInTheDocument();
});
