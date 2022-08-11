import { render, screen } from "@testing-library/react";
import About from '../pages/About'
import "@testing-library/jest-dom";

    it("should render the heading", () => {
      const textToFind = "Welcome!";
  
      render(<About/>);
      const heading = screen.getByText(textToFind, { exact: false });
  
      expect(heading).toBeInTheDocument();
    });
  