import * as service from '../../services/account.services.js'
import * as tokenService from '../../services/token.services.js'
import * as profileService from '../../services/profile.services.js'

async function createAccount(req, res) {
    return service.createAccount(req.body)
        .then(() => {
            res.status(201).json({ message: 'Cuenta creada con exito!' })
        })
        .catch((err) => {
            res.status(400).json({ error: { message: err.message } })
        })
}

async function createProfile(req, res) {
    return profileService.createProfile(req.account, req.body)
        .then(() => {
            res.status(201).json({ message: 'Perfil creado con exito!' })
        })
        .catch((err) => {
            res.status(400).json({ error: { message: err.message } })
        })
}

async function getProfile(req, res) {
    console.log(req.account)
    return profileService.getProfile(req.account?._id)
        .then((profile) => {
            res.status(200).json(profile)
        })
        .catch((err) => {
            res.status(400).json({ error: { message: err.message } })
        })
}

async function login(req, res) {
    return service.login(req.body)
        .then(async (account) => {
            return { account, token: await tokenService.createToken(account) }
        })
        .then((datos) => {
            res.status(200).json(datos)
        })
        .catch((err) => {
            res.status(400).json({ error: { message: err.message } })
        })
}


async function logout(req, res) {
    return tokenService.removeToken(req.headers['auth-token'])
        .then(() => {
            res.status(200).json({ message: 'Sesion cerrada con exito!' })
        })
        .catch((err) => {
            res.status(400).json({ error: { message: err.message } })
        })
}

export {
    createAccount,
    createProfile,
    getProfile,
    login,
    logout
}