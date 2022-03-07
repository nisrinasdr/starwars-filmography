import React from 'react'
import { HeaderWrap } from './HeaderStyles'

import { Link } from 'react-router-dom';

function Header({title}) {
    return (
        <HeaderWrap>
            <Link to={`/`} style={{textDecoration:"none"}}>
                <h1>{title}</h1>
            </Link>
        </HeaderWrap>
    )
}

export default Header
