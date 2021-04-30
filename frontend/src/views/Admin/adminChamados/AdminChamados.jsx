import React, { Component } from 'react'
import Title from '../../defaultViews/Title'
import MenuAdmin from '../templateAdmin/menuAdmin/MenuAdmin'
import Chamados from './Chamados/Chamados'
import './AdminChamados.css'
import axios from 'axios'

import {baseUrl} from '../../../baseUrlApi'

const inicialState = {
    list: []
}

export default class Admin extends Component {
    state = {...inicialState}

    UNSAFE_componentWillMount() {
        axios.get(`${baseUrl}/requests`)
            .then(resp => {
                this.setState({list: resp.data})
                console.log(this.state.list)
            })
            .catch(err => console.log(err.erro))
    }

    closeRequest(requestId) {
        axios.put(`${baseUrl}/requests/${requestId}`)
            .then(resp => {
                this.setState({list: resp.data})
                console.log(this.state.list)
            })
            .catch(err => console.log(err.erro))
        document.location.reload()
    }

    renderChamados() {
        return this.state.list.map(chamado => {
            chamado.date = new Date(chamado.openedAt)
            return(
                <Chamados key={chamado.id} {...chamado} buttomClose={this.closeRequest}/>
            )
        })
    }
    render() {
        return(
            <div className="admin">
                <Title title="Admin" link="/admin" />
                <MenuAdmin/>
                <div className="content-admin">
                    {
                        this.renderChamados()
                    }
                </div>
            </div>
        )
    }
}