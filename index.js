import express from 'express'
import { connectDB } from './config/db.js';
import { Person } from './models/Person.js';


const app = express();
const PORT = 3000; // or any other port

await connectDB()



app.get('/',(req,res)=>{

  res.send('Hello,Sunny')
})

app.post('/person',express.json(),async(req,res)=>{
     
    
    const {email,name,age} = req.body
    
     const newPerson = new Person({
        name,
        age,
        email
     })
     await newPerson.save()
     console.log(newPerson)
     res.send('Person Added')
})



app.listen(PORT, () => {
    console.log(`Srever is running on http://localhost:${PORT}`)
})
