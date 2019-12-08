import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'info-circle',
    title: 'Sobre nós',
    subtitle: 'Informação sobre a Empresa.'
}

export default class AboutUs extends Component {
    render(){
        return (
            <Main {...headerProps}>
                <span>
                <p>
                <span className="text-danger"><strong>Marlboro </strong></span>é uma marca de cigarros do grupo Altria (anteriormente Philip Morris Companies) a mais vendida marca de cigarros do mundo.
                </p>
                <p>
                A Philip Morris lançou a marca Marlboro em 1924 como um cigarro para o público feminino, com o o slogan, "Mild As May" (do inglês "Suave como Maio"). 
                Nos anos 20, a publicidade do cigarro e se baseava principalmente em quanto o cigarro era feminino. Para este fim, o filtro teve uma banda vermelha impressa em 
                torno dele para ocultar manchas de batom que foi descrita como "Beauty Tips to Keep the Paper from Your Lips".
                A primeira tentativa em reposicionar a marca como "masculina", teve Julie London e modelos masculinos com mãos tatuadas, mas quando Weissman, o então chefe de 
                marketing da Philip Morris assumiu a responsabilidade da campanha no final dos anos 50, sua pesquisa demonstrou que pós-adolescentes é que estavam consumindo o 
                produto.
                Jack Landry, o executivo de publicidade da Philip Morris, coordenadamente com a agência de Leo Burnet apareceram com "comerciais que vão trazer fumantes novatos 
                para o Marlboro...[que transmitisse] "a imagem certa para capturar a fantasia da juventude...[e projeta] um símbolo perfeito de independência e rebeldia 
                individualista" - e assim surgia o "cowboy da Marlboro" ou Marlboro Man. Logo a marca se tornou um sucesso de venda duradouro, a nova imagem elevou suas vendas 
                de $5 bilhões em 1955 para $20 bilhões em 1957, em 1972 se tornou a principal marca de cigarros norte-americana e do mundo, em 1993, a Marlboro comandava 21% de 
                toda a venda doméstica norte-americana, a maior desde então, em 2000, sua participação no mercado era de 35% das vendas de cigarros nos EUA, vendendo mais do 
                que as seis outras marcas mais populares juntas, em 2003, as vendas mundiais dos cigarros Marlboro totalizaram $20 bilhões por anos.
                </p>
                <span><strong>Fonte:</strong><a href="https://pt.wikipedia.org/wiki/Marlboro"> Clique aqui</a></span>
                </span>
            </Main>
        )
    }
}