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

var id = '5c51ceaab8ebf83b2cf99c65';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
} else {
    // Todo.find({
    //     _id: id
    // }).then((todos) => {
    //     console.log('Todos: ', todos);
    // });

    // Todo.findOne({
    //     _id: id
    // }).then((todo) => {
    //     console.log('Todo: ', todo);
    // });

    // Todo.findById(id).then((todo) => {
    //     if (!todo) {
    //         return console.log('Id not found.');
    //     }
    //     console.log('Todo By Id: ', todo);
    // }).catch((e) => console.log(e));

    User.findById(id).then((user) => {
        if (!user) {
            return console.log('Id not found.');
        }
        console.log(JSON.stringify(user, undefined, 2));
    }).catch((err) => console.log(err));
}