import { MongoClient } from "mongodb"

// protocolo://ip:port
const client = new MongoClient("mongodb://127.0.0.1:27017")

client.connect()
    .then(function () {
        const db = client.db("DB_AHT")

        db.collection("Coleccion").insertOne({ name: "Hola desde Node!" })






    })
    .catch(function () {
        console.log("No se pudo conectar...")
    })