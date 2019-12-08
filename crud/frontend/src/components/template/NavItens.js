import React from 'react'

import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usúarios
            </Link>
            <Link to="/contact">
                <i class="fa fa-comment"></i> Contato
            </Link>
            <Link to="/about-us">
                <i class="fa fa-info-circle"></i> Sobre
            </Link>
        </nav>
    </aside>