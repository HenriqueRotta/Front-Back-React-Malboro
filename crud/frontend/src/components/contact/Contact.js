import React, { Component} from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'comment',
    title: 'Contato',
    subtitle: 'Entre em contato e fale conosco'

}

export default class Contact extends Component {
    render(){
        return(
            <Main {...headerProps}>
                {/* Fazer uma tabela com contato de enviar email */}
                <span>
                    <p>
                        Informações de contato:
                    </p>
                    <h3 className="text-danger">
                        Em reforma...
                    </h3>
                </span>
            </Main>
        )
    }
}