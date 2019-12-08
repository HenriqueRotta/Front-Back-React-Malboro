import React from 'react'
import Main from '../template/Main'

export default props =>
    <Main icon="home" title="Início"
        subtitle="Página inicial">
        <div className="display-4">
            Bem-Vindo
    </div>
        <hr />
        {/* Colocar uma lista de noticias... */}
        <p className="mb-0">
            Últimas Notícias no Brasil:
        </p>
    </Main> 