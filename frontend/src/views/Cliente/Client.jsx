import React, { Component } from 'react'
import axios from 'axios'
import Title from '../defaultViews/Title'
import './Client.css'

import {baseUrl} from '../../baseUrlApi'

const inicialState = {
    user: {
        marca: '',
        model: '',
        description: '',
        clientId: ''
    }
}

export default class Client extends Component {
    state = {...inicialState}

    updateField(event) {
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({ user })
    }
    cancel() {
        const user = {...inicialState.user}
        this.setState({user})
    }
    save() {
        const user = this.state.user
        const url = `${baseUrl}/requests`
        const request = async(url, user) => {
            await axios.post(url, user)
            .then(resp => {
                console.log(resp)
            })
            .catch(err => {
                console.log(err.response)
            })
        }
        request(url, user)
        this.cancel()
    }

    render() {
        return(
            <div className="client">
                <Title title="Solicitar chamado" link="/client"/>
                <div className="client-container">

                    <div className="form-group">
                        <label htmlFor="marca-form">Marca:</label>
                        <input id="marca-form" type="text" className="form-input" name="marca" value={this.state.user.marca} onChange={e => this.updateField(e)}/>

                        <label htmlFor="model-form">Modelo:</label>
                        <input id="model-form" type="text" className="form-input" name="model" value={this.state.user.model} onChange={e => this.updateField(e)}/>

                        <label htmlFor="description-form">Descrição:</label>
                        <input id="description-form" type="text" className="form-input" name="description" value={this.state.user.description} onChange={e => this.updateField(e)}/>

                        <label htmlFor="clientId-form">clientId:</label>
                        <input id="clientId-form" type="number" className="form-input" name="clientId" value={this.state.user.clientId} onChange={e => this.updateField(e)}/>

                    </div>
                    <div className="form-group-btn">
                        <div className="buttom-decline" onClick={e => this.cancel(e)}>Cancelar</div>
                        <div onClick={e => this.save(e)} className="buttom-accept">Enviar</div>
                    </div>

                </div>
            
            </div>
        )
    }
}