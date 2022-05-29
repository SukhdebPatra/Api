const  mongoose=require ('mongoose');

const userSchema=new mongoose.Schema({
    SINO:String,
    Name:String,
    Class:String,
    Section:String,
    Age:String,
    Attendance:String,
})

module.exports=mongoose.model("infotracks",userSchema)