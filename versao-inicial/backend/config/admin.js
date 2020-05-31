module.exports = middleware => {
    return (req, res, next) => {
        if(req.user.admin) {
            middleware(req, res, next)
        } else {
            console.log(req.user);
            console.log(req.user.name);
            console.log(req.user.admin);
            res.status(402).send('Usuário não é administrador')
        }
    }
}