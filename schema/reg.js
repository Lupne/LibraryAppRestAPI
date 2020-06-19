
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
  first_name:{
    type:String,
    required:true,
  },
  last_name:{
    type:String,
    required:true,
  },
  dept:{
    type:String,
    required:true,
  },
  username:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,
  },
  book:{
    type:Number,
    default:0,
  },
  fine:{
    type:Number,
    default:0,
  },
  dp:{
    type:String,
    default:'https://clipartart.com/images/profile-image-icon-clipart-1.png',
  },
  issue:{
    type:[{_id:String,idate:String,rdate:String}],
    default:[{_id:"-1",idate:"-1",rdate:"-1"},{_id:"-1",idate:"-1",rdate:"-1"},{_id:"-1",idate:"-1",rdate:"-1"}],
  }
})

const register = mongoose.model('student',Student)

module.exports = register;
