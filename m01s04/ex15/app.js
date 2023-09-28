const person = {
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
  `Folosind fisierele de la exercitiul 06 si doua bucle for imbricate (nested),
   afiseaza diferenta de varsta dintre fiecare membru al arrayului friends si ceilalti membri.`,
);

for (let i = 0; i < person.friends.length; i++) {
  for (let j = 0; j < person.friends.length; j++) {
    if (i !== j) {
      const friend1 = person.friends[i];
      const friend2 = person.friends[j];
      const ageDiff = Math.abs(friend1.age - friend2.age);
      console.log(
        `Intre ${friend1.name} si ${friend2.name} este o diferenta de ${ageDiff} ani.`,
      );
    }
  }
}
