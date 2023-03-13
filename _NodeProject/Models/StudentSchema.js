const mongoose=require("mongoose");
//fs
//1- build schema with validations
const schema=new mongoose.Schema({
    _id:Number,// mongoose.Types.ObjectID
    name:{type:String, required:true},
    age:{type:Number, required:true},
    department:{type:Number,ref:"departments"},
    course:{type:Array,ref:"Courses"},
   
});

//2- register for schema in mongoose
module.exports=mongoose.model("students",schema);

