const person = {
  getName: function () {
    return 'Frodo Baggins';
  },

  getAge: function () {
    return 34;
  },
};

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  return person[methodName]();
}

console.warn(`Folosind accesorul, salveaza numele mic al persoanei intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”
`);

console.log(`Eu sunt ${accessor('Name')}.`);

console.warn(`Afiseaza anul de nastere al persoanei folosind anul curent.`);

const currentYear = new Date().getFullYear();

console.log((currentYear - accessor('Age')).toString());
