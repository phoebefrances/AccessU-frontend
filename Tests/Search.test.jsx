import { render, screen  } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@jest/globals";
import Search from '../frontend/components/Search.jsx';

describe('Checks to see if the Search placeholder text renders', () => {
  it('Checks to see if the Search placeholder text renders', () => {
    render(<Search />)
    expect(screen.getByPlaceholderText("Where?")).toBeInTheDocument();
    // const placeDetail = screen.getByRole('heading', {
    //   name: /welcome to next\.js!/i,
    // })

    // expect(heading).toBeInTheDocument()
  })
})