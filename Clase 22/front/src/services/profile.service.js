import API from './api.service'

export async function getCurrent() {
    return API.call({ uri: '/profile' })
}

export default {
    getCurrent
}