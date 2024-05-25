const findPeopleByName = (personName) => {
    Person.find({ name: personName }, (err, data) => {
      if (err) return console.error(err);
      console.log('People found:', data);
    });
  };
  
  findPeopleByName('Alice');
  const findPersonById = (personId) => {
    Person.findById(personId, (err, data) => {
      if (err) return console.error(err);
      console.log('Person found:', data);
    });
  };
  
  findPersonById('some_person_id');
  const findEditThenSave = (personId) => {
    Person.findById(personId, (err, person) => {
      if (err) return console.error(err);
      person.favoriteFoods.push('Hamburger');
      person.save((err, updatedPerson) => {
        if (err) return console.error(err);
        console.log('Person updated:', updatedPerson);
      });
    });
  };
  
  findEditThenSave('some_person_id');
  const findAndUpdate = (personName) => {
    Person.findOneAndUpdate(
      { name: personName },
      { age: 20 },
      { new: true },
      (err, updatedPerson) => {
        if (err) return console.error(err);
        console.log('Person updated:', updatedPerson);
      }
    );
  };
  
  findAndUpdate('Alice');
  const removeById = (personId) => {
    Person.findByIdAndRemove(personId, (err, removedPerson) => {
      if (err) return console.error(err);
      console.log('Person removed:', removedPerson);
    });
  };
  
  removeById('some_person_id');
  const removeManyPeople = (done) => {
    Person.remove({ name: 'Mary' }, (err, result) => {
      if (err) return console.error(err);
      console.log('People removed:', result);
      done(null, result);
    });
  };
  
  removeManyPeople(() => {});
  const queryChain = (done) => {
    Person.find({ favoriteFoods: 'Burritos' })
      .sort('name')
      .limit(2)
      .select('-age')
      .exec((err, data) => {
        if (err) return console.error(err);
        console.log('People found:', data);
        done(null, data);
      });
  };
  
  queryChain(() => {});
  
  