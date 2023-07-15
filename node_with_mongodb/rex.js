const mongoose=require('mongoose');
const a=mongoose.Schema({
    name:{
    type:String,
    required:true
    }
});

module.exports=mongoose.model("data",a); 