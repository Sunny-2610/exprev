import express from 'express'

const app = express()
const PORT = 3000

//set EJS as the view engine
app.set('view engine', 'ejs')





app.get('/',(req,res)=>{

   const userName = 'Sunny Sinha'
   res.render('index',{userName})
})




app.listen(PORT, () => {
    console.log(`Srever is running on http://localhost:${PORT}`)
})
