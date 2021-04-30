const admin = require('./admin')

module.exports = app => {
    
    app.post('/singin', app.api.auth.singin)
    app.post('/register',app.api.clients.createClient)

    
    const auth = app.config.passport.authenticate()
    app.route('/assistents')
        .all(auth)
        .get(admin(app.api.clients.getAssistents))
    app.route('/assistents/:id')
        .all(auth)
        .put(admin(app.api.clients.createAssistent))  
    app.route('/clients')
        .all(auth)
        .get(admin(app.api.clients.getClients))
        //.post(app.api.clients.createClient)
    app.route('/clients/:id')
        .all(auth)
        .put(admin(app.api.clients.createClient))

    app.route('/requests')
        .all(auth)
        .get(admin(app.api.requests.getOpenedRequests))
        .post(app.api.requests.createRequest)
    app.route('/requests/:id')
        .all(auth)
        .put(admin(app.api.requests.closeRequest))
    app.route('/requests/count')
        .all(auth)
        .get(admin(app.api.requests.countOpenedRequest))
}