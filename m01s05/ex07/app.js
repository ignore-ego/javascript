const dateBuilder = [
  function () {
    return '2023';
  },
  function () {
    return 'Martie';
  },
  function () {
    return '18';
  },
];

dateBuilder[3] = function () {
  return 'Sambata';
};

console.warn(`Afiseaza propozitia: “Suntem in aaaa an.”.`);

console.log(`Suntem in anul ${dateBuilder[0]()}.`);

console.warn(`Afiseaza propozitia: “Suntem in luna ll in anul aaaa.”.`);

console.log(`Suntem in luna ${dateBuilder[1]()} in anul ${dateBuilder[0]()}.`);

console.warn(`Afiseaza propozitia: “Astazi este zz.”.`);

console.log(`Astazi este ${dateBuilder[3]()}.`);

console.log(`Suntem in ${dateBuilder[1]()} ${dateBuilder[0]()}.`);

console.log(`Astazi este ${dateBuilder[3]()}, ${dateBuilder[2]()}.`);

console.log(
  `Data curenta este ${dateBuilder[2]()} ${dateBuilder[1]()} ${dateBuilder[0]()}.`,
);
