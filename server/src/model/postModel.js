const mongoose=require('mongoose')

const postSchema= new mongoose.Schema({
    caption:{type:String},
    reply:{type:String}
},{timestamps:true})

module.exports=mongoose.model("Post",postSchema)