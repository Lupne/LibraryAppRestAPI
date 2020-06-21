const express = require('express')
const app = express();
const mongoose = require('mongoose');
const router = require('./models/users')
const bookrouter = require('./models/library')
const revrouter = require('./models/rev')
const bodyparser = require('body-parser')
const PORT = 4000;

app.use(bodyparser.json());

mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true,
 useUnifiedTopology: true ,
 useFindAndModify: false,
});
mongoose.Promise = global.Promise;

app.use(router);
app.use(bookrouter);
app.use(revrouter);

app.use(function(err,req,res,next){
  res.status(422).send({error:err.message})
})


app.listen(process.env.port||PORT,()=>{
  console.log("Server Online!");
})
