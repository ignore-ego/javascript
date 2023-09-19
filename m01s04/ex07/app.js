var friends = [
  {
    name: 'Frodo',
    surname: 'Baggins',
  },
  {
    name: 'Sam',
    surname: 'Gamgee',
  },
  {
    name: 'Merry',
    surname: 'Brandybuck',
  },
  {
    name: 'Gandalf',
    surname: 'The White',
  },
  {
    name: 'Peregrin',
    surname: 'Took',
  },
];

console.warn(
  `Folosind o bucla for, afiseaza proprietatea surname a tuturor obiectelor din arrayul friends.`,
);

for (var i = 0; i < friends.length; i++) {
  var friend = friends[i];
  console.log(friend.surname);
}

console.warn(
  `Afiseaza numele complet inversat al tuturor prietenilor, insa o data ce l-ai gasit pe steven,
opreste bucla cu ajutorul keywordului break si afiseaza propozitia: “M-am oprit la Stevenson Steven.”.`,
);

for (var i = 0; i < friends.length; i++) {
  var friend = friends[i];
  var fullReversedName = friend.surname + ' ' + friend.name;

  if (friend.name === 'Merry' && friend.surname === 'Brandybuck') {
    console.log('M-am oprit la ' + fullReversedName + '.');

    break;
  }

  console.log(fullReversedName);
}

console.warn(
  `Folosind keywordul continue, afiseaza numele complet inversat al prietenilor,
  doar daca numarul de caractere total al numelor lor este mai mare de 13 sub forma de propozitii “Prenume Nume are mai mult de 13 caractere.”.`,
);

for (var i = 0; i < friends.length; i++) {
  var friend = friends[i];
  var totalCharacters = (friend.surname + friend.name).length;

  if (totalCharacters <= 13) {
    continue;
  }

  console.log(
    friend.surname + ' ' + friend.name + ' are mai mult de 13 caractere.',
  );
}

console.warn(
  `Folosind o bucla for, afiseaza proprietatea name a tuturor obiectelor din arrayul friends.`,
);

for (var i = 0; i < friends.length; i++) {
  var friend = friends[i];
  console.log(friend.name);
}

console.warn(`Afiseaza numele complet al tuturor prietenilor.`);
for (var i = 0; i < friends.length; i++) {
  var friend = friends[i];
  console.log(friend.name + ' ' + friend.surname);
}

console.warn(
  `Folosind keywordul break, afiseaza numele complet al prietenilor
   dar opeste bucla la  primul surname care are numarul de caractere mai mare sau egal decat 9 si afiseaz-l intr-o propozitie de forma “M-am oprit la Nume Prenume.”.`,
);

for (var i = 0; i < friends.length; i++) {
  var friend = friends[i];
  var fullName = friend.surname + ' ' + friend.name;

  if (friend.surname.length >= 9) {
    console.log('M-am oprit la ' + fullName + '.');

    break;
  }

  console.log(fullName);
}

// pixel tab nu e verde complet ca se contrazice cu cerinta 2
