import express from 'express'

const app = express()
const PORT = 3000

app.use((req,res,next)=>{
   console.log('Start') 
   res.on('finish',()=>{
    console.log('End')
   })
   next()
})




app.get('/',(req,res)=>{
    console.log('Middle')
    res.send('Hello,Sunny')
})



app.listen(PORT, () => {
    console.log(`Srever is running on http://localhost:${PORT}`)
})
