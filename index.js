import express from 'express'

const app = express()
const PORT = 3000


app.use('/public',express.static('public'))
app.use('/images',express.static('images'))




app.get('/',(req,res)=>{

  res.send('Hello,Sunny')
})




app.listen(PORT, () => {
    console.log(`Srever is running on http://localhost:${PORT}`)
})
