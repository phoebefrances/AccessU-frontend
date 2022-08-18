import { render, screen } from "@testing-library/react";
import { HeaderMenu } from "../components/HeaderMenu";
import "@testing-library/jest-dom";
import { ChakraProvider } from "@chakra-ui/react";

//This MockAbout is necessary as we have to wrap every component we render for testing in ChakraProvider. However, if we try to do it in render() below, Jest will throw an error
it("should render the Menu", () => {
  function MockMenu() {
    return (
      <ChakraProvider>
        <HeaderMenu />
      </ChakraProvider>
    );
  }
  render(<MockMenu />);
  const button = screen.getByText("About");

  expect(button).toBeInTheDocument();
});
