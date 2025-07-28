import express from 'express'
import { connectDB } from './config/db.js';
import { Person } from './models/Person.js';


const app = express();
const PORT = 3000; // or any other port

await connectDB()


app.use(express.json())
app.get('/',(req,res)=>{

  res.send('Hello,Sunny')
})
//Saving data in mongodb
app.post('/person',async(req,res)=>{
     
  try {
      
    const {email,name,age} = req.body
    
     const newPerson = new Person({
        name,
        age,
        email
     })
     await newPerson.save()
     console.log(newPerson)
     res.send('Person Added')
  } catch (error) {
    res.send(error.message)
  }
})


//updating aad in mongodb


//updating aad in mongodb
app.put('/person',async(req,res)=>{
     
    
    const {id} = req.body
    const personData =  await Person.findByIdAndUpdate(id,{age:'44'})
    //modifying the data
   
    console.log(personData)
     
     res.send('Person Updated')
})



//deleted Data from MongoDb

app.delete('/person/:id',async (req,res)=>{
    const {id} =req.params
    await Person.findByIdAndDelete(id)
    res.send('User Deleted')
})


app.listen(PORT, () => {
    console.log(`Srever is running on http://localhost:${PORT}`)
})
