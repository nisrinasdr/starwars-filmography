import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing';
import {useParams} from 'react-router-dom';

import FilmDetail from '../FilmDetail';
import { GET_FILM } from '../../../GraphQL/Query/Query';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

const film = { id: "1", title: "Episode 1", episodeID: "1", openingCrawl: "This is the opening...", releaseDate: "2022-02-02", director: "A", producers: ["A", "B"] };
const mocks = [
  {
    request: {
      query: GET_FILM,
      variables: {
        id: 1,
      },
    },
    result: { data: { film } },
  },
]

const MockFilmDetail = () => {
    return (
        <MockedProvider mocks={mocks} addTypename={false}>
          <FilmDetail/>
        </MockedProvider>
    )
}

describe("Detail Film", () => {
    it("should show loading text", async () => {
        useParams.mockReturnValue({ id: 1 });
        render(<MockFilmDetail />)
        
        const pElement = await screen.findByText(/loading/i)
        expect(pElement).toBeInTheDocument()
    })

    it("should render card", async () => {
        useParams.mockReturnValue({ id: 1 });
        render(<MockFilmDetail />)
        
        const divElement = await screen.findByTestId(/1/i)
        expect(divElement).toBeInTheDocument()
    })
})