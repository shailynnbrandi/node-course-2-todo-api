const {ObjectID} = require('mongodb');

const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.delete({}).then((result) =>{
//   console.log(result);
// });

Todo.findOneAndRemove({_id:'5bc4c8e8dd1a0d4319f3b5dd'}).then((todo) => {

});

// Todo.findByIdAndDelete('5bc4c8e8dd1a0d4319f3b5dd').then((todo)=>{
//   console.log(todo);
// })