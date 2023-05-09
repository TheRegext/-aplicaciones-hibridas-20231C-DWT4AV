import yup from 'yup'

const productScheme = yup.object({
    name: yup.string().required(),
    price: yup.number().required("Manda el precio, gil!").positive(),
    description: yup.string().required(),
    tags: yup.array().of(yup.string()).required()
})

const productUpdateScheme = yup.object({
    name: yup.string(),
    price: yup.number().positive(),
    description: yup.string(),
    tags: yup.array().of(yup.string())
})

export {
    productScheme,
    productUpdateScheme
}