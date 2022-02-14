import React from 'react'
import { HeaderWrap } from './HeaderStyles'

import { Link } from 'react-router-dom';

function Header() {
    return (
        <HeaderWrap>
            <Link to={`/`} style={{textDecoration:"none"}}>
                <h1>Starwars Filmography</h1>
            </Link>
        </HeaderWrap>
    )
}

export default Header
