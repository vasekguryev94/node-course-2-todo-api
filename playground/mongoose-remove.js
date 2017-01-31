const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5890a889b4d997c8316e640b'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5890a889b4d997c8316e640b').then((todo) => {
  console.log(todo);
});
