var person = {
  name: 'Frodo',
  surname: 'Baggins',
  age: 34,
  petOwner: true,
  skills: [
    'html',
    'Javascript',
    'css',
    'java',
    'c++',
    'node',
    'Jquery',
    'node.js',
  ],

  friends: [
    {
      name: 'Samwise',
      surname: 'Gamgee',
      age: 30,
    },

    {
      name: 'Peregrin',
      surname: 'Took',
      age: 31,
    },

    {
      name: 'Meriadoc',
      surname: 'Brandybuck',
      age: 29,
    },
  ],
};

console.warn(
  `Folosind obiectul person si forEach,
  afiseaza skillurile din pozitiile impare ale arrayului in propozitii de forma "Tehnologia xxx se afla pe pozitia iii, impara, a arrayului."`,
);

person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(
      'Tehnologia ' +
        skill +
        ' se afla pe pozitia ' +
        index +
        ', impara, a arrayului.',
    );
  }
});

console.warn(
  ` In mod similar, afiseaza skillurile care contin litera a in propozitii de forma "Tehnologia xxx contine caracterul "a". "`,
);

person.skills.forEach(function (skill) {
  if (skill.includes('a')) {
    console.log('Tehnologia ' + skill + ' contine litera "a".');
  }
});

console.warn(
  ` Folosind forEach, afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."`,
);

var message = 'Prietenii mei se numesc ';
person.friends.forEach(function (friend, index, friends) {
  var punctuation = ', ';

  if (friends.length - 1 === index) {
    punctuation = '.';
  }

  // scurtatura pt message = message + ''
  message += friend.name + ' ' + friend.surname + punctuation;
});
console.log(message);

console.warn(
  `Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul
   friends, doar daca au varsta mai mare decat 30 inclusiv folosind o propozitie de felul:
    "Varstele insumate sunt: xxx."Folosind forEach, afiseaza suma anilor de nastere a persoanelor care au varsta impara.`,
);

var sumAge = 0;
person.friends.forEach(function (age) {
  if (age > 30) {
    sumAge = sumAge + age;
  }
  console.log('Varstele insumate sunt: ' + sumAge);
});

console.warn(` Folosind forEach, afiseaza suma anilor de nastere a persoanelor care au varsta impara.
`);
