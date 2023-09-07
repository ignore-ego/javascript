var person = {
  name: 'Joe',
  surname: 'Momma',
  age: 34,
  petOwner: true,
  skills: ['html', 'javascript', 'css'],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' si stiu' +
    ' ' +
    person.skills[0] +
    ' si ' +
    person.skills[2] +
    '.',
);

console.log('Sunt ' + person.name + ' si acum invat JavaScript.');

console.log(
  'Am ' +
    person.friends.length +
    ' prieteni: ' +
    person.friends[0].name +
    ', ' +
    person.friends[1].name +
    ' si ' +
    person.friends[2].name +
    '.',
);
