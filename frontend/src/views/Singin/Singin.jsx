import axios from 'axios'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { baseUrlFront, baseUrl } from '../../baseUrlApi'
import './Singin.css'

const inicialState = {
    user: {
        email: '',
        password: ''
    }
}

export default class Admin extends Component {

    state = {...inicialState}

    changeStateClient(e) {
        const user = {...this.state.user}
        user[e.target.name] = e.target.value
        this.setState({user})
    }
    sendToSingin() {
        const user = {...this.state.user}
        const url = `${baseUrl}/singin`
        axios.post(url, user)
            .then(resp => console.log(resp.data))
            .catch(err => console.log(err.response.token))
    }
    linkToHome() {
        return window.location.href = `${baseUrlFront}/home`
    }
    render() {
        return(
            <div className="singin">
                <div className="singin-box">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="email">
                                Email:
                            </label>
                            <input type="text" id="email" name="email" onChange={e => this.changeStateClient(e)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">
                                Senha:
                            </label>
                            <input type="password" id="password" name="password" onChange={e => this.changeStateClient(e)}/>
                        </div>
                        <div className="form-group-btn">
                            <div className="buttom-singin" onClick={e => this.sendToSingin(e)}>
                                Entrar
                            </div>
                        </div>
                    </div>
                    <div className="register-login">
                        <Link to="/register" className="link-register">Ainda não é cliente? cadastre-se aqui!</Link>
                    </div>
                </div>
            </div>
        )
    }
}