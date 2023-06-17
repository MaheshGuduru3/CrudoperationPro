/*HERE THE REQUIRED FEILD THAT YOU WANT IN IT*/
const mongoose  = require('mongoose')
const Schema = new mongoose.Schema({
    name : {
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    }
    
})


module.exports = mongoose.model('results',Schema)