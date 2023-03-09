const express= require('express')
const router=express.Router()
const {uploadPost}= require('../controller/postController')

router.post('/uploadPost',uploadPost)



router.all('/*',function(req,res){
    return res.status(400).send({status:false,message:"Invalid http request"})
})


module.exports=router