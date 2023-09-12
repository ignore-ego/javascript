var person = {
  firstName: 'Joe',
  lastName: 'Momma',
  email: 'joe@example.com',
  birthYear: 1420,
  pets: [
    {
      name: 'Casiopea',
      species: 'pisica',
      age: '15',
    },
    {
      name: 'Andromeda',
      species: 'paianjen',
      age: '42',
    },
    {
      name: 'Galadriel',
      species: 'elf',
      age: '3200',
    },
  ],
  zipCode: '69420',
};

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.log((2023 - person.pets[2].age).toString());

console.log(
  person.firstName +
    ', ' +
    person.pets[0].name +
    ', ' +
    person.pets[1].name +
    ', ' +
    person.pets[2].name +
    ' locuiesc toti in aceeasi casa',
);

console.log((person.pets[0].age - person.pets[2].age).toString());

console.log(
  'Ma numesc ' +
    person.firstName +
    ' ' +
    person.lastName +
    ', m-am nascut in ' +
    person.birthYear +
    ' si codul meu postal este:' +
    person.zipCode,
);

console.log(
  'Animalele mele s-au nascut in ' +
    (2023 - person.pets[0].age) +
    ', ' +
    (2023 - person.pets[1].age) +
    ', respectiv ' +
    (2023 - person.pets[2].age),
);

// astea nu erau in cerinte dar erau in pixeltab neinverzite :))))
console.log((2023 - person.birthYear - person.pets[0].age).toString());

console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    person.pets[0].name +
    ' este o diferenta de ' +
    (2023 - person.birthYear - person.pets[0].age) +
    ' ani.',
);
