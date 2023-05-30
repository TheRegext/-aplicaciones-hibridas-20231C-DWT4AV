import { MongoClient, ObjectId } from 'mongodb'
import bcrypt from 'bcrypt'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("DB_AHT")
const accounts = db.collection("accounts")

async function createAccount(account) {
    await client.connect()

    const accountExist = await accounts.findOne({ userName: account.userName })

    if (accountExist) {
        throw new Error('La cuenta ya existe') // genera un error en el sistema (dicho de otroa forma fuerta el catch)
    }

    const newAccount = { ...account }

    const salt = await bcrypt.genSalt(10)

    newAccount.password = await bcrypt.hash(account.password, salt)

    await accounts.insertOne(newAccount)
}

async function login(account) {
    await client.connect()

    const accountExist = await accounts.findOne({ userName: account.userName })

    if (!accountExist) {
        throw new Error('La cuenta no existe') // genera un error en el sistema (dicho de otroa forma fuerta el catch)
    }

    const isMatch = await bcrypt.compare(account.password, accountExist.password)

    if (!isMatch) {
        throw new Error('Password incorrecto') // genera un error en el sistema (dicho de otroa forma fuerta el catch)
    }

    return { ...accountExist, password: undefined }
}

export {
    createAccount,
    login
}