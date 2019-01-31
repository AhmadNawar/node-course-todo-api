const {
    ObjectID
} = require('mongodb');
const {
    mongoos
} = require('./../server/db/mongoose');


const {
    User
} = require('./../server/models/user');
const {
    Todo
} = require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findByIdAndDelete('5c5319b4974a62ad6df86b60').then((todo) => {
    console.log(todo);
});