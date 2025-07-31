import express from 'express'
import cookieParser from 'cookie-parser';

import session from 'express-session';


const app = express();
const PORT = 3000; // or any other port

app.use(cookieParser())
app.use(session({
  secret:'smaple-secret',
  resave:false,
  saveUninitialized:false
}))

  const users = []

app.use(express.json())
app.get('/',(req,res)=>{

  res.send('Hello,Sunny')
})

   
app.post('/register', async(req,res)=>{
     const {username,password}  =req.body
     users.push({
      username,
      password
     })
     res.send('User registered')
})
  app.post('/login', async(req,res)=>{
     const {username,password}  =req.body
      const user =users.find(u=>u.username===username)
      if (!user || password !== user.password){
        return res.send('Not Authorised')
      } 
      req.session.user = user
     res.send('User Logged In')
})

  app.get('/dashboard',(req,res)=>{
          if(!req.session.user){
            return res.send('Unauthorized')
          }
        res.send(`Welcome, ${req.session.user.username}`)
  })


app.listen(PORT, () => {
    console.log(`Srever is running on http://localhost:${PORT}`)
})
