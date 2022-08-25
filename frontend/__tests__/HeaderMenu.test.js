import { render, screen, fireEvent } from "@testing-library/react";
import HeaderMenu from "../components/HeaderMenu.js";
import "@testing-library/jest-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { MapStyleProvider } from "../components/MapStyleContext";

function MockMenu() {
  return (
    <MapStyleProvider>
      <ChakraProvider>
        <HeaderMenu />
      </ChakraProvider>
    </MapStyleProvider>
  );
}
it("should render the About button", () => {
  render(<MockMenu />);
  const button = screen.getByRole("button", { name: "About" });

  expect(button).toBeVisible();
});

it("should render the Add a Place button", () => {
  render(<MockMenu />);
  const button = screen.getByRole("button", { name: "Add a place" });

  expect(button).toBeVisible();
});

it("should render the Map Theme dropdown", () => {
  render(<MockMenu />);
  const button = screen.getByRole("button", { name: "Map Theme" });

  expect(button).toBeVisible();
});

it("should render the Default theme button", () => {
  render(<MockMenu />);
  const option = screen.getByText("Default");
  expect(option).toBeInTheDocument();
});

it("should render the Grey Scale theme button", () => {
  render(<MockMenu />);
  const option = screen.getByText("Greyscale");
  expect(option).toBeInTheDocument();
});

it("should render the Colour Blind Friendly theme button", () => {
  render(<MockMenu />);
  const option = screen.getByText("Colour Blind Friendly");
  expect(option).toBeInTheDocument();
});

it("should render the Ultra High Contrast theme button", () => {
  render(<MockMenu />);
  const option = screen.getByText("Ultra High Contrast");
  expect(option).toBeInTheDocument();
});
