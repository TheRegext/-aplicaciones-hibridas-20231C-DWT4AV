import * as accountSchemas from '../schemas/account.schemas.js'

async function validateAccount(req, res, next) {
    return accountSchemas.account.validate(req.body, { abortEarly: false, stripUnknown: true })
        .then((account) => {
            req.body = account
            next()
        })
        .catch((err) => {
            res.status(400).json({ error: err })
        })
}


async function validateProfile(req, res, next) {
    return accountSchemas.profile.validate(req.body, { abortEarly: false, stripUnknown: true })
        .then((profile) => {
            req.body = profile
            next()
        })
        .catch((err) => {
            res.status(400).json({ error: err })
        })
}


export {
    validateAccount,
    validateProfile
}