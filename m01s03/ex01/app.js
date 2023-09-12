var object = {
  name: 'The Old',
  surname: 'Gods',
  age: 2000,
  petOwner: true,
  carOwner: false,
};

console.warn(`Ma numesc xxx yyy si am xx ani.`);

console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' ' +
    'si am' +
    ' ' +
    object.age +
    ' ' +
    'ani.',
);

console.warn(
  'Afiseaza anul in care te-ai nascut scazand varsta pe care ai trecut-o in obiect din anul curent (un proces numit hardcodare)',
);

console.log((2023 - object.age).toString());

console.warn(
  'Adauga o cheie noua de tip boolean cu numele petOwner (observa capitalizarea).',
);

console.log(
  object.name + ' ' + object.surname + ' are ' + object.age + ' ani.',
);

console.log(object.name + ' s-a nascut in ' + (2023 - object.age) + '.');
