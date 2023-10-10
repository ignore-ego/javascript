var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(`Afiseaza in consola folosind metoda forEach() numele fiecarui animal.
`);

person.pets.forEach(function (pet) {
  console.log(pet.name);
});

console.warn(`Folosind o bucla for afiseaza suma anilor animalelor. `);

let ageSum = 0;

for (let i = 0; i < person.pets.length; i++) {
  ageSum += person.pets[i].age;
}
console.log(ageSum);

console.warn(
  `Folosind forEach(), afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.`,
);

person.pets.forEach(function (pet) {
  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

console.warn(
  `Folosind o bucla for, afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta
  de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).`,
);

const agePerson = 2023 - person.birthYear;
for (let i = 0; i < person.pets.length; i++) {
  const pet = person.pets[i];
  const ageDiff = agePerson - pet.age;
  console.log(
    `Intre ${person.firstName} si ${pet.name} este o diferenta de ${ageDiff} ani.`,
  );
}

console.warn(
  `Folosind o bucla for, afiseaza in ordine inversa numele animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”. `,
);

for (let i = person.pets.length - 1; i >= 0; i--) {
  const pet = person.pets[i];
  console.log(`Animalul meu se numeste ${pet.name}.`);
}

console.warn(`Folosind o bucla for, afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am, dar
intre noi este o diferenta de xx ani.” Salveaza primul pet intr-o variabila numita oldestPet si porneste bucla, daca varsta animalului curent din bucla este mai mare decat oldestPet.age, atunci oldestPet devine animalul curent.
`);

let oldestPet = person.pets[0];
for (let i = 1; i < person.pets.length; i++) {
  let pet = person.pets[i];

  if (pet.age > oldestPet.age) {
    oldestPet = pet;
  }
}

const ageDiff = agePerson - oldestPet.age;
console.log(
  `${oldestPet.name} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`,
);

console.warn(
  `Folosind o bucla forEach, afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.`,
);

// am incercat aici sa aplic niste cod de la ex 11 ce ne-ai aratat dar nu imi iese cu "si" la final
let message = `Am `;
person.pets.forEach(function (pet, index, pets) {
  var punctuation = ', ';
  var punctuation = ', ';

  if (pets.length - 1 === index) {
    punctuation = '.';
  }

  if (pets.length - 2 === index) {
    punctuation = ' si ';
  }

  message += pet.species + punctuation;
});
console.log(message);
