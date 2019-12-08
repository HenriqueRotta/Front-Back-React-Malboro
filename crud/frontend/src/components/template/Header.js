import './Header.css'
import React from 'react'

export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
            <span className="text-danger"><i className={`fa fa-${props.icon}`}></i></span> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>