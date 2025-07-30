import express from 'express'
import cookieParser from 'cookie-parser';




const app = express();
const PORT = 3000; // or any other port

app.use(cookieParser())


app.use(express.json())
app.get('/',(req,res)=>{

  res.cookie('name','express-app',{maxAge: 360000})

  res.send('Hello,Sunny')
})

 app.get('/fetch',(req,res)=>{
    
     console.log(req.cookies)
     res.send('APi Called')

 })

    app.get('/remove-cookie',(req,res)=>{
     res.clearCookie('name')
     res.send('Cookie cleared')
    })




app.listen(PORT, () => {
    console.log(`Srever is running on http://localhost:${PORT}`)
})
