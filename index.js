import express from 'express'
import { userLogin, userSignup } from './controllers.js'
import router from './route.js'


const app= express()

const PORT = 3000

//defining route

app.get('/',(req,res)=>{
    res.send('Hello,Express by sunny')

})

app.use('/user',router)
app.listen(PORT, ()=>{
    console.log(`Srever is running on http://localhost:${PORT} `)
})