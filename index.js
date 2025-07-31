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

app.use(express.json())
app.get('/',(req,res)=>{

  res.send('Hello,Sunny')
})

    app.get('/visit',(req,res)=>{
        if(req.session.page_views) {
          req.session.page_views++;
          res.send(`You Visited this page ${req.session.page_views} times`)
        } else {
          req.session.page_views = 1
          res.send("welcome to the page for the first time !")
        }
    })


   app.get('/remove-visit',(req,res)=>{
        req.session.destroy()
        res.send('Session Removes')
   })



app.listen(PORT, () => {
    console.log(`Srever is running on http://localhost:${PORT}`)
})
