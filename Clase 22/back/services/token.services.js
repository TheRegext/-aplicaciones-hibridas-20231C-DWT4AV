import jwt from 'jsonwebtoken'
import { MongoClient, ObjectId } from 'mongodb'
const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("DB_AHT")
const tokensCollections = db.collection("tokens")


async function createToken(account) {

    const token = jwt.sign(account, 'CLAVE SECRETA')

    await client.connect()

    await tokensCollections.insertOne({ token, account_id: new ObjectId(account._id) })

    return token

}

async function verifyToken(token) {
    try {
        const payload = jwt.verify(token, "CLAVE SECRETA")

        await client.connect()

        const exist = await tokensCollections.findOne({ token, account_id: new ObjectId(payload._id) })

        if (!exist) {
            return null
        }

        return payload

    } catch (err) {
        return null
    }
}

async function removeToken(token) {
    await client.connect()

    await tokensCollections.deleteOne({ token })

}


export {
    createToken,
    verifyToken,
    removeToken
}