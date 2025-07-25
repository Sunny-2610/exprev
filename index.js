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

app.use(express.json())

app.post ('/users',(req,res)=>{
    const {name,email} = req.body
    res.json({
        message:`User ${name} with email ${email} created sucessfully`
    })
})

app.put('/users/:id',(req,res)=>{
    const userId = req.params.id
    const {name,email} = req.body
    res.json({
        message: `User ${userId} updated to ${name} ,${email}`
    })
})

app.delete('/users/:id',(req,res)=>{
  const userId= req.params.id
  res.json({
    message:`User with ID ${userId} deleted sucessfully`
  })

})
         

app.listen(PORT, ()=>{
    console.log(`Srever is running on http://localhost:${PORT} `)
})