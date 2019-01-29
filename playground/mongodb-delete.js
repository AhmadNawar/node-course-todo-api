//const MongoClient = require('mongodb').MongoClient;

const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log(`Unable to connect to MongoDB server with error: ${err}`);
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // DeleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // })

    // DeleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result.result);
    // })

    // FindOneAndDelete
    db.collection('Todos').findOneAndDelete({
        completed: false
    }).then((result) => {
        console.log(result);
    })

    db.collection('Users').deleteMany({
        name: 'Ahmad'
    }).then((result) => {
        console.log(result.result);
    })
    db.collection('Users').deleteOne({
        _id: ObjectID("5c5097ec5463a024dcec5adb")
    }).then((result) => {
        console.log(result.result);
    })
    client.close();
});