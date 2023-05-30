import * as service from '../../services/account.services.js'

async function createAccount(req, res) {
    return service.createAccount(req.body)
        .then(() => {
            res.status(201).json({ message: 'Cuenta creada con exito!' })
        })
        .catch((err) => {
            res.status(400).json({ error: { message: err.message } })
        })
}


async function login(req, res) {
    return service.login(req.body)
        .then((account) => {
            res.status(200).json({ message: 'Cuenta encontrada con exito!', account })
        })
        .catch((err) => {
            res.status(400).json({ error: { message: err.message } })
        })
}

export {
    createAccount,
    login
}