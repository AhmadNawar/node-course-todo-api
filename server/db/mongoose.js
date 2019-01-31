var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb:ahmad:ahmad123456789@ds145484.mlab.com:45484/todoapp98' || 'mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
});
module.export = {
    mongoose
};