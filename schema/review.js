const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const rev = new Schema({
  title:{
    type:String,
    required:true,
  },
  body:{
    type:String,
    required:true,
  },
  rating:{
    type:Number,
    required:true,
  },
  id:{
    type:String,
    required:true,
  }
})

const review = mongoose.model('review',rev)

module.exports = review
