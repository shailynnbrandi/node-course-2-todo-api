// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  db.collection('Users').find({location: 'Mount Bethel'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs, undefined, 2));
  })

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bb7e8a0dd1a0d4319f29de7')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bb68eff32894b2f541916a5')
  }, {
    $set: {
      location: 'Pennsylvaina'
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // client.close();
});