import express from 'express'
import ProductRoute from './routes/products.routes.js'
import ProductRouteApi from './api/routes/products.api.routes.js'
import AccountRoute from './api/routes/account.api.routes.js'
import cors from 'cors'
import multer from 'multer'
import sharp from 'sharp'

const app = express() // creea el servidor
app.use(cors())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'products_images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })
// const upload = multer({ dest: '/uploads' })




app.use(express.urlencoded({ extended: true }))
app.use('/api', express.json()) // en caso de que el body este en JSON, se hace el parseBody

app.use('/', express.static('public'))
app.use('/products/img', express.static('products_images'))

app.use('/', ProductRoute)
app.use('/api', ProductRouteApi)
app.use('/api', AccountRoute)

function resizeImage(req, res, next) {
    sharp(req.file.path)
        .resize(200)
        .jpeg({ mozjpeg: true })
        .toFile('products_images/' + req.file.filename + '.jpg')
        .then(function (newFileInfo) {
            console.log(newFileInfo)
            next()
        })
        .catch(function (err) {
            console.log(err)
            res.send(500).json({ message: 'Error al redimensionar la imagen' })
        })
}

app.post('/upload', [upload.single('imagen_principal'), resizeImage], function (req, res) {
    console.log("Body:", req.body)
    console.log("Files:", req.file)

    res.status(200).json({ message: 'Archivo subido con exito!' })
})

app.listen(2023, function () {
    console.log('Servidor corriendo en el host http://localhost:2023')
})