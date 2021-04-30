import React, { Component } from 'react'
import './adminCliente.css'
import Title from '../../defaultViews/Title'
import Menu from '../templateAdmin/menuAdmin/MenuAdmin'
import Cliente from './Clientescard/ClientCard'
import axios from 'axios'

import {baseUrl} from '../../../baseUrlApi'


const inicialState = {
    list: []
}
export default class adminClients extends Component {
    state = {...inicialState}
    UNSAFE_componentWillMount() {
        axios.get(`${baseUrl}/clients`)
        .then(response => {
            this.setState({ list : response.data})
            console.log(this.state.list)
        })
        .catch(err => console.log(err.erro))
    }
    renderCard() {
        return this.state.list.map(client => {
            return(
                <Cliente key={client.id} {...client}/>
            )
        })
    }



    render() {
        return(
            <div className="admin-cliente">
                <Title title="Admin" link="/admin"/>
                <Menu />
                <div className="content-admin">
                    {
                        this.renderCard()
                    }
                </div>
            </div>
                
        )
    }
}