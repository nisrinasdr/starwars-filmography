import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { MockedProvider } from '@apollo/client/testing';

import Films from '../Films'
import { GET_ALL_FILMS } from '../../../GraphQL/Query/Query';

const allFilms = { films: [{ id: "1", title: "Episode 1", episodeID: "1", openingCrawl: "This is the opening...", releaseDate: "2022-02-02", director: "A", producers: "A" }] };

const mocks = [
  {
    request: {
      query: GET_ALL_FILMS,
    },
    result: { data: { allFilms } },
  },
]

const MockFilm = () => {
    return (
        <MockedProvider mocks={mocks} addTypename={false}>
            <BrowserRouter>
                <Films />
            </BrowserRouter>
        </MockedProvider>
    )
}

describe("Film", () => {
    it("should show loading text", async () => {
        render(<MockFilm />)
        
        const pElement = await screen.findByText(/loading/i)
        expect(pElement).toBeInTheDocument()
    })

    it("should render card", async () => {
        render(<MockFilm />)
        
        const linkElement = await screen.findByTestId(/link-1/i)
        expect(linkElement).toBeInTheDocument()
    })

    it("should link to the correct link", async () => {
        render(<MockFilm />)
        
        const linkElement = await screen.findByTestId(/link-1/i)
        
        fireEvent.click(linkElement)
        expect(global.window.location.href).toBe("http://localhost/1")
    })
})