const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const libraryBook = new Schema({
  name:{
    type:String,
    required:true,
  },
  rating:{
    type:Number,
    default:5,
  },
  author:{
    type:String,
    required:true,
  },
  available:{
    type:Boolean,
    default:true,
  },
  rev:{
    type:Number,
    default:1,
  },
  image:{
    type:'string',
    required:'true',
  }
})

const library = mongoose.model('library',libraryBook);

module.exports = library;
