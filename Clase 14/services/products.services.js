import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("DB_AHT")

async function getProducts(filter = {}) {
    await client.connect()
    return db.collection("products").find({ deleted: { $ne: true } }).toArray()
}

async function getProductById(idProduct) {
    await client.connect()
    return db.collection("products").findOne({ _id: new ObjectId(idProduct) })
}

async function createProduct(product) {
    await client.connect()
    await db.collection("products").insertOne(product)
    return product
}

async function editProduct(idProduct, product) {
    await client.connect()
    await db.collection("products").updateOne({ _id: new ObjectId(idProduct) }, { $set: product })
    return product
}

async function replaceProduct(idProduct, product) {
    await client.connect()
    await db.collection("products").replaceOne({ _id: new ObjectId(idProduct) }, product)
    return product
}


async function deleteProduct(idProduct) {
    await client.connect()
    await db.collection("products").deleteOne({ _id: new ObjectId(idProduct) })
    return {
        id: idProduct
    }
}

export {
    getProducts,
    getProductById,
    createProduct,
    editProduct,
    replaceProduct,
    deleteProduct
}