const mongoose=require("mongoose");

//1- build schema with validations
const schema=new mongoose.Schema({
    _id:Number,// mongoose.Types.ObjectID
    name:{type:String, required:true,unique:true},
    rate:{type:Number,required:true},
    duration:{type:Number,required:true},
});

//2- register for schema in mongoose
module.exports=mongoose.model("Courses",schema);

