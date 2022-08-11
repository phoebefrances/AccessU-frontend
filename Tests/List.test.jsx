import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PlaceDetail from '../frontend/components/PlaceDetail'

describe('Checks to see if the PlaceDetail renders to the cards', () => {
  it('Checks to see if the PlaceDetail renders to the cards', () => {
    render(<PlaceDetail />)

    // const placeDetail = screen.getByRole('heading', {
    //   name: /welcome to next\.js!/i,
    // })

    // expect(heading).toBeInTheDocument()
  })
})