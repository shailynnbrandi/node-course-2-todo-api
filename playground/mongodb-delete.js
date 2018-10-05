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

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
  //   console.log(result);
  // })

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // })

  //findOneAndDelete()
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=> {
  //   console.log(result);
  // });

db.collection('Users').findOneAndDelete({_id: new ObjectID("5bb69625dd1a0d4319f29513")}).then((results) => {
  console.log(JSON.stringify(results, undefined, 2));
})

  // client.close();
});