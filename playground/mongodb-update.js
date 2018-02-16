//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

 /* db.collection('Todos').findOneAndUpdate({
     _id:new ObjectID('5a86bd0b66d93d549c2c8563')
 },{$set:{
     completed:false
 }},{
     returnOriginal:false
 }).then((result)=>{
     console.log(result);
 })

});  */

db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5a86b488cfbc3a384ad7b285')
},{$set:{
    name:'Sarvesh'
},
    $inc:{
        age:1
    }},{
    returnOriginal:false
}).then((result)=>{
    console.log(result);
})

}); 



 // db.close();

