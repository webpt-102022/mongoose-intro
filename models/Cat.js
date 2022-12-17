const mongoose = require('mongoose');
const { Schema } = mongoose;
//const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: {
    type: String,
    unique: true,
    //required: true
    required: [true, 'Name is mandatory. Please add a name.']
  },
  age: {
    type: Number,
    min: 0
  },
  color: {
    type: String,
    //enum: ['white', 'black', 'brown', 'orange', 'multicolor']
    enum: {
      values: ['white', 'black', 'brown', 'orange', 'gray', 'multicolor'],
      message: 'That is not an accepted color. Try another one.'
    }
  },
  sickness: {
    type: Boolean,
    default: false
  },
  adopted: {
    type: Date,
    default: Date.now()
  },
  isNice: {
    type: Boolean,
    default: true
  }
});

const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;

