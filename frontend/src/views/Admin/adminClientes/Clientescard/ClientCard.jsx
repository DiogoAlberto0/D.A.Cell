import React from 'react'
import './ClientCard.css'
const Cliente = props => {
    return(
        <div className="client-card">
            <div className="client-id">
                <div className="cliente-id-title">
                    ID
                </div>
                <div className="id-client">
                    {props.id}
                </div>
            </div>
            <div className="client-infos">
                <div className="group-infos">
                    <div className="info-client-title">
                        Nome
                    </div>
                    <div className="info-client">
                        {props.name}
                    </div>
                </div>

                <div className="group-infos">
                    <div className="info-client-title">
                        Telefone
                    </div>
                    <div className="info-client">
                        {props.tel}
                    </div>
                </div>

                <div className="group-infos">
                    <div className="info-client-title">
                        E-mail
                    </div>
                    <div className="info-client">
                        {props.email}
                    </div>
                </div>

                <div className="group-infos">
                    <div className="info-client-title">
                        Cidade
                    </div>
                    <div className="info-client">
                        {props.city}
                    </div>
                </div>

                <div className="group-infos">
                    <div className="info-client-title">
                        Endereço
                    </div>
                    <div className="info-client">
                        {props.address}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cliente