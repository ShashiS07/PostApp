const postModel=require("../model/postModel")


const uploadPost=async function(req,res){
   try{
    let data=req.body

    const posts= await postModel.create(data)
    return res.status(201).send({status:true, message:"Post Uploaded",data:data})
   }catch(error){
        return res.status(500).send({status:false,message:error.message})
   }
}

module.exports={uploadPost}