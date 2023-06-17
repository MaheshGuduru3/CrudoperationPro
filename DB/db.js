/* HERE THE DATABASE CONNECTION CONSIST IN IT */
require('dotenv').config()
const url = process.env.MONGODB_URL
const mongoose = require('mongoose')

const dbconnect = ()=>{
mongoose.connect(url,{
    useNewUrlParser:true,
}).then(()=>console.log("Database is connected successfully..."))
.catch((err)=>console.log(err.message))
}
dbconnect()
module.exports = mongoose