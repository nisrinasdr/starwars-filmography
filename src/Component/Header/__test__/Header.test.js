import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from '../Header';

const MockFilm = () => {
    return (
        <BrowserRouter>
            <Header title="Starwars Filmography"/>
        </BrowserRouter>
    )
}

describe("Header", () => {
    it("should render the correct header title", () => {
        render(<MockFilm />)
        
        const h1Element = screen.getByText(/Starwars Filmography/i)
        expect(h1Element).toBeInTheDocument()
    })

    it("should link to homepage", () => {
        render(<MockFilm />)
        
        const h1Element = screen.getByText(/Starwars Filmography/i)
        fireEvent.click(h1Element)
        expect(global.window.location.href).toBe("http://localhost/")
    })
})