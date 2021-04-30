module.exports = app => {
    const createRequest = (req, res) => {
        const {existOrError} = app.config.validation
        const request = {...req.body}
        try {
            existOrError(request.marca, 'Informe a marca do aparelho')
            existOrError(request.model, 'Informe o modelo do aparelho')
            existOrError(request.description, 'Informe a descrição do defeito do aparelho')
            existOrError(request.clientId, 'informe o id do cliente')
        } catch(msg) {
            return res.status(400).send(msg)
        }
        const now = new Date
        app.db('requests')
            .insert({
                marca: request.marca,
                model: request.model,
                description: request.description,
                openedAt: now,
                clientId: request.clientId
            })
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }
    const closeRequest = (req, res) => {
        const now = new Date
        app.db('requests')
            .update({
                closedAt: now
            })
            .where('id', req.params.id)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }
    const getOpenedRequests = (req, res) => {
        app.db('requests')
            .whereNull('closedAt')
            .then(requests => res.json(requests))
            .catch(err => res.status(500).send(err))
    }
    const countOpenedRequest = (req, res) => {
        app.db('requests')
            .count('id')
            .whereNull('closedAt')
            .then(requests => res.json(requests))
            .catch(err => res.status(500).send(err))
            
        }
    return { createRequest, closeRequest, getOpenedRequests, countOpenedRequest }
}