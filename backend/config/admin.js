module.exports = middleware => {
    return (req, res) => {
        if(req.user.admin) {
            middleware(req, res)
        } else {
            res.status(401).send('Usuário não é administrador.')
        }
    }
}