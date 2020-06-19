const express = require('express')
const app = express();
const bodyparser = require('body-parser')
const router = express.Router();
const register = require('../schema/reg')
const library = require('../schema/books')

router.post('/addbook',function(req,res,next){
  library.create(req.body).then(function(newbook){
    res.send(newbook);
  })
})
router.post('/login',(req,res,next)=>{
  const {username,password} = req.body
  register.findOne({username:username,password:password},function(err,obj){
  if(obj != null)
  {
  res.send(true)
 }
  else {
    res.send(false)
  }
  })
})

router.post('/getdetails',(req,res,next)=>{
  const {username} = req.body
  register.findOne({username:username},function(err,obj){
    res.send(obj);
  })
})

router.post('/reg',function(req,res,next){
  register.create(req.body).then(function(student){
    res.send(student);
  })
})

router.put('/update/:username',function(req,res,next){
  register.findOneAndUpdate({username:req.params.username},req.body).then(function(){
    register.findOne({username:req.params.username}).then(function(obj){console.log(obj)})
  })
})

module.exports = router;
