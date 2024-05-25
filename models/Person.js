const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
const Person = require('./models/Person');

const createAndSavePerson = () => {
  const newPerson = new Person({
    name: 'John Doe',
    age: 30,
    favoriteFoods: ['Pizza', 'Burger']
  });

  newPerson.save((err, data) => {
    if (err) return console.error(err);
    console.log('Person saved:', data);
  });
};

createAndSavePerson();
const createManyPeople = (arrayOfPeople) => {
    Person.create(arrayOfPeople, (err, data) => {
      if (err) return console.error(err);
      console.log('People created:', data);
    });
  };
  
  const arrayOfPeople = [
    { name: 'Alice', age: 25, favoriteFoods: ['Salad', 'Apple'] },
    { name: 'Bob', age: 35, favoriteFoods: ['Pizza', 'Pasta'] },
    { name: 'Charlie', age: 28, favoriteFoods: ['Steak', 'Burger'] }
  ];
  
  createManyPeople(arrayOfPeople);
  