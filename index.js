import express from 'express'

const app= express()

const PORT = 3000

//defining route

app.get('/',(req,res)=>{
    res.send('Hello,Express by sunny')

})

app.listen(PORT, ()=>{
    console.log(`Srever is running on http://localhost:${PORT} `)
})