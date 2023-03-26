
const mongoose = require('mongoose');

const Contact = new mongoose.schema({
name: {
    type: String, 
    require: true, 
},
age : {
    type: String,
    require: true,
},
favoriteFoods:{
    type: String,
    require: true,
}


})
module.exports= mongoose.model("contact", Contact)