import React from 'react'
import './Chamados.css'
const Chamados = props => {
    return(
        <div className="chamado">
            <div className="info-id-chamado">
                <div className="title-id">
                    ID
                </div>
                <div className="id-chamado">
                    {props.id}
                </div>
            </div>
            <div className="infos-chamado">
                <div className="info-chamado">
                    <div className="title">
                        Marca
                    </div>
                    <div className="content-chamado">
                        {props.marca}
                    </div>      
                </div>
                <div className="info-chamado">
                    <div className="title">
                        Modelo
                    </div>
                    <div className="content-chamado">
                        {props.model}
                    </div>
                </div>
                <div className="info-chamado">
                    <div className="title">
                        ID do cliente
                    </div>
                    <div className="content-chamado">
                        {props.clientId}
                    </div>
                </div>
                <div className="info-chamado">
                    <div className="title">
                        Data
                    </div>
                    <div className="content-chamado">
                        {props.date.toLocaleDateString('pt-BR')}
                    </div>
                </div>
                <div className="info-chamado">
                    <div className="title">
                        Opções
                    </div>
                    <div className="content-chamado">
                        <div className="buttom-closeChamado" onClick={e => props.buttomClose(props.id)}>
                            Finalizar
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chamados