const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const revrouter = express.Router()
const review = require('../schema/review')

revrouter.post('/addrev',function(req,res,next){
  review.create(req.body).then(function(rev){
    res.send(rev);
  })
})

revrouter.post('/getrev',function(req,res,next){
  review.find({id:req.body.id},function(err,obj){
    res.send(obj);
    console.log(obj);
  })
})

module.exports = revrouter;
