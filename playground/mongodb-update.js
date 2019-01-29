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

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5c50b572b04329e905326fce")
    // }, {
    //     $set: {
    //         completed: true,
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').insertOne({
    //     name: 'Mike',
    //     age: 24,
    //     location: 'Istanbul'
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'Mike'
    }, {
        $set: {
            name: 'Ahmad'
        },
        $inc: {
            age: 1
        }
    }).then((result) => {
        console.log(result);
    })
    client.close();
});