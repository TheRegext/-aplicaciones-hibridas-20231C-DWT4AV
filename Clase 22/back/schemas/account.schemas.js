import yup from 'yup'

const account = yup.object({
    userName: yup.string().trim().required().min(3),
    password: yup.string().required().min(3)
})

const profile = yup.object({
    name: yup.string().trim().required().min(3),
    email: yup.string().trim().required().email(),
    avatar: yup.string().trim().url()
})

export {
    account,
    profile
}