const mongoose = requiew('mongoose')
const Schema = mongoose.Schema;

const review = new Schema({
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
