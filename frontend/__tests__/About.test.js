import { render, screen } from "@testing-library/react";
import About from '../pages/About'
import "@testing-library/jest-dom";

    it("should render the heading", () => {
      const textToFind = "Welcome!";
  
      render(<About/>);
      const heading = screen.getByText(textToFind, { exact: false });
  
      expect(heading).toBeInTheDocument();
    });

    it("should render the words from page in first ", () => {
      const textToFind = "Do you have to spend ages planning your trip?";
  
      render(<About/>);
      const heading = screen.getByText(textToFind, { exact: false });
  
      expect(heading).toBeInTheDocument();
    });

    it("should render the words from second part from page", () => {
      const textToFind = "Do you have to spend ages planning your trip?";
  
      render(<About/>);
      const heading = screen.getByText(textToFind, { exact: false });
  
      expect(heading).toBeInTheDocument();
    });

    it("should render the words from third part from page", () => {
      const textToFind = "Have you visited somewhere to only find the access wasn&apos;t as you thought?";
  
      render(<About/>);
      const heading = screen.getByText(textToFind, { exact: false });
  
      expect(heading).toBeInTheDocument();
    });

    it("should render the words from fourth part from page", () => {
      const textToFind = "Are you anxious visiting a new place so much so it stopped you from making that trip?";
  
      render(<About/>);
      const heading = screen.getByText(textToFind, { exact: false });
  
      expect(heading).toBeInTheDocument();
    });

    it("should render the words from fourth part from page", () => {
      const textToFind = "Enabled is here to take the stress out of planning. Our aim is to provide you with all the accessibility information you need in order to plan your trip";
  
      render(<About/>);
      const heading = screen.getByText(textToFind, { exact: false });
  
      expect(heading).toBeInTheDocument();
    });

    it("should render the words from fifth part from page", () => {
      const textToFind = "With Enabled we hope you can be more spontaneous, visit, recommend and return!";
  
      render(<About/>);
      const heading = screen.getByText(textToFind, { exact: false });
  
      expect(heading).toBeInTheDocument();
    });


  