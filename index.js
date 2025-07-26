import express from 'express'
import multer from 'multer'
import { storage } from './config/multer.js'


const app = express()
const upload= multer({storage,
    limits:{
        fileSize:10240000
    }

})
const PORT = 3000
app.use(express.urlencoded({extended: 'true'}))
app.use(upload.single('image'))


app.get('/',(req,res)=>{

  res.send('Hello,Sunny')
})

app.post('/form',(req,res)=>{
     console.log(req.body)
     console.log(req.file)
     res.send('Form Recieved')
})


app.listen(PORT, () => {
    console.log(`Srever is running on http://localhost:${PORT}`)
})
