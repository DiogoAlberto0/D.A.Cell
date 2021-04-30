import React, { Component } from 'react'
import {baseUrl} from '../../baseUrlApi'
import axios from 'axios'
import './Register.css'


const inicialState = {
    user: {
        name:'',
        tel: '',
        city: '',
        address: '',
        email: '',
        password: '',
        confirmPassword: ''
    },
    list: []
}
export default class Register extends Component {
    state = {...inicialState}

    addList(event) {
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    save() {
        const user = {...this.state.user}
        const url = `${baseUrl}/clients`
        axios.post(url, user)
            .then(resp => {
                console.log('Deu bom' + resp)
            })
            .catch(err => {
                console.log(err.response)
            })

    }


    render() {
        return(
            <div className="register">
                <div className="form-register">
                    <div className="form-group-register">
                        <label htmlFor="name-register">Nome:{this.state.user.name}</label>
                        <input type="text" id="name-register" name="name" onChange={event => this.addList(event)}/>
                    </div>

                    <div className="form-group-register">
                        <label htmlFor="telefone-register">Telefone:{this.state.user.telefone}</label>
                        <input type="text" id="telefone-register" name="tel" onChange={event => this.addList(event)}/>
                    </div>

                    <div className="form-group-register">
                        <label htmlFor="city-register">Cidade:{this.state.user.city}</label>
                        <input type="text" id="city-register" name="city" onChange={event => this.addList(event)}/>
                    </div>
                    
                    <div className="form-group-register">
                        <label htmlFor="address-register">Endereço:{this.state.user.address}</label>
                        <input type="text" id="address-register" name="address" onChange={event => this.addList(event)}/>
                    </div>

                    <div className="form-group-register">
                        <label htmlFor="email-register">E-mail:{this.state.user.email}</label>
                        <input type="email" id="email-register" name="email" onChange={event => this.addList(event)}/>
                    </div>

                    <div className="form-group-register">
                        <label htmlFor="password-register">Senha:{this.state.user.password}</label>
                        <input type="password" id="password-register" name="password" onChange={event => this.addList(event)}/>
                    </div>

                    <div className="form-group-register border-bottom">
                        <label htmlFor="confirm-password-register">Confirmar senha:{this.state.user.confirmPassword}</label>
                        <input type="password" id="confirm-password-register" name="confirmPassword" onChange={event => this.addList(event)}/>
                    </div>

                    <div className="form-group-buttom-register">
                        <div className="buttom-decline">
                            Voltar
                        </div>
                        <div className="buttom-accept" onClick={e => this.save(e)}>
                            Enviar
                        </div>
                    </div>




                </div>

            </div>
        )
    }
}