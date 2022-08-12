import { render, screen } from "@testing-library/react";
import LargeCard from '../components/LargeCard';
import "@testing-library/jest-dom";


it("should render the heading", () => {
    const textToFind = "place has adjustments for visual impairments";

    render(<LargeCard />);
    const heading = screen.getByText(textToFind, { exact: false });

    expect(heading).toBeInTheDocument();
  });