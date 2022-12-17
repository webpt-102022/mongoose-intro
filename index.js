const mongoose = require('mongoose');
const MONGO_URL = 'mongodb://localhost:27017/zoo';
mongoose.set('strictQuery', true);
const Cat = require('./models/Cat');

const cats = [
  {
    name: 'Garfield',
    age: 15,
    color: 'orange'
  },
  {
    name: 'Matilda',
    age: 3,
    color: 'purple',
    sickness: true
  },
  {
    name: ' Hobbes ',
    age: 7,
    color: 'white'
  },
  {
    name: 'Princess',
    age: 9,
    color: 'white'
  },
]

mongoose.connect(MONGO_URL)
  .then(response => console.log(`Connected to ${response.connection.name}`))
  .then(() => {
    //db.cats.insertOne()
    return Cat.create(cats);
  })
  // Para editar 1 (esto ahora no funciona porque la ruta anterior devuelve un array)
  // .then((cat) => {
  //   return Cat.findByIdAndUpdate(cat._id, { color: 'white' }, { new: true }) // new:true sirve para que nos devuelva el documento modificado
  // })
  .then(cats => console.log(cats))
  .then(() => mongoose.connection.close())
  .catch(err => console.error(err))

// The same with async/await
// const seedDB = async () => {
//   try {
//     const response = await mongoose.connect(MONGO_URL);
//     console.log(`Connected to ${response.connection.name}`)
//     const createdCat = await Cat.create({
//       name: 'Garfield',
//       age: 15,
//       color: 'orange'
//     });
//     console.log(createdCat)
//     await mongoose.connection.close();
//   } catch (error) {
//     console.error(error)
//   }
// }

// seedDB();
