import express from 'express'

const app = express()
const PORT = 3000

 app.use('/welcome',(req,res,next)=>{
    console.log('A new request received at ' +Date.now())
    next()
 })


// catch all invalid routes


// catch all invalid routes
app.get('/',(req,res)=>{
    res.send('Hello,Sunny')
})
app.get('/welcome',(req,res)=>{
    res.send('Welcome to express app')
})


app.listen(PORT, () => {
    console.log(`Srever is running on http://localhost:${PORT}`)
})
