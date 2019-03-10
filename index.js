const express = require('express')
const app = express()
app.set('view engine', 'ejs')

const multer = require('multer')
// const upload = multer({dest:'./public/images/'})
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+'-'+file.originalname)
    }
})
const upload = multer({storage})

app.get('/',(req,res)=>{
    res.render('upload')
})
app.post('/upload',upload.single('avatar'),(req,res)=>{
    file = req.file
    input = req.body
    res.send({
        file,
        input
    })
})

app.listen(3000)