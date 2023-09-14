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

// insert code here

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
