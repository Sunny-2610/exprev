import express from 'express'
import multer from 'multer'

const app = express()
const upload= multer()
const PORT = 3000
app.use(express.urlencoded({extended: 'true'}))
app.use(upload.array())


app.get('/',(req,res)=>{

  res.send('Hello,Sunny')
})

app.post('/form',(req,res)=>{
     console.log(req.body)
     res.send('Form Recieved')
})


app.listen(PORT, () => {
    console.log(`Srever is running on http://localhost:${PORT}`)
})
