const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())
const app = express()
const PORT = 4000;


  mongoose.set('strictQuery', false);
  mongoose.connect('mongodb+srv://jawwad:jawwad790@expenses.m3rhihb.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('MongoBD server connected ');
}).catch((err) => {
    console.log(err);
})

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.post('/transitions',(req,res)=>{

    console.log(res);
})

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:4000");
})