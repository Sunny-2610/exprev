import express from 'express'

const app = express()
const PORT = 3000






app.get('/',(req,res)=>{
    console.log('Middle')
    res.send('Hello,Sunny')
})

app.get('/error',()=>{
    throw new Error('This is test error')
})

app.use((err,req,res,next)=>{
      console.error(err.message)
      res.send('Internal server error')
})


app.listen(PORT, () => {
    console.log(`Srever is running on http://localhost:${PORT}`)
})
