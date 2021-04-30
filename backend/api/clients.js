const encryptPassword = require('../config/encryptPass')
module.exports = app => {
    const {existOrError, equalsOrError} = app.config.validation
    const createClient = (req, res) => {
        const client = {...req.body}
        try {
            existOrError(client.name, 'Informe o nome')
            existOrError(client.tel, 'Informe o telefone')
            existOrError(client.email, 'Informe o email')
            existOrError(client.password, 'Informe a senha')
            existOrError(client.confirmPassword, 'Confirme a senha')
            existOrError(client.city, 'Informe o cidade')
            existOrError(client.address, 'Informe o endereço')

            equalsOrError(client.password, client.confirmPassword, 'Senhas não confirmam')
        } catch(msg) {
            return res.status(400).send(msg)
        }

        if(req.params.id) client.id = req.params.id
        client.password = encryptPassword(client.password)
        if(!client.id) {
            app.db('clients')
                .insert({
                    name: client.name,
                    tel: client.tel,
                    email: client.email,
                    password: client.password,
                    city: client.city,
                    address: client.address
                })
                .then(_ => res.status(204).send('Cliente cadastrado com sucesso!'))
                .catch(err => res.status(500).send(err))
        } else {
            app.db('clients')
            .update({
                name: client.name,
                tel: client.tel,
                email: client.email,
                password: client.password,
                city: client.city,
                address: client.address
            })
            .where('id', client.id)
            .then(_ => res.status(204).send('Cliente cadastrado com sucesso!'))
            .catch(err => res.status(500).send(err))
        }
    }
    const getClients = (req, res) => {
        app.db('clients')
            .select('id', 'name', 'tel', 'email', 'city', 'address', 'Admin')
            .where('Admin', false)
            .then(clients => res.json(clients))
            .catch(err => res.status(500).send(err))
    }

    const getAssistents = (req, res) => {
        app.db('clients')
        .select('id', 'name', 'tel', 'email', 'city', 'address', 'Admin')
        .where('Admin', true)
        .then(clients => res.json(clients))
        .catch(err => res.status(500).send(err))
    }
    const createAssistent = (req, res) => {
        app.db('clients')
            .update('Admin', true)
            .where('id', req.params.id)
            .then(_ => res.status(204).send('Assistente cadastrado com sucesso'))
            .catch(err => res.status(500).send(err))
    }

    return { createClient, getClients, getAssistents, createAssistent }
}