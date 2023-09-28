const cart = {
  name: 'Frodo',
  surname: 'Baggins',
  email: 'baggins@theshire.com',
  products: [
    {
      category: 'artifacts and items',
      name: 'the one ring',
      price: 420,
      quantity: 1,
      weight: 80,
    },
    {
      category: 'artifacts and items',
      name: 'mithril vest',
      price: 840,
      quantity: 2,
      weight: 180,
    },
    {
      category: 'food',
      name: 'po-ta-toes',
      price: 240,
      quantity: 3,
      weight: 15,
    },
    {
      category: 'artifacts and items',
      name: 'sting',
      price: 555,
      quantity: 1,
      weight: 240,
    },
    {
      category: 'food',
      name: 'spices',
      price: 666,
      quantity: 2,
      weight: 22,
    },
    {
      category: 'shire',
      name: 'a good book',
      price: 444,
      quantity: 1,
      weight: 84,
    },
  ],
};

console.warn(`Folosind forEach() Afiseaza in consola propozitia: “name surname are x tipuri de produse in cart.”
`);

// m-am pierdut aici cu for each :)))) pare mai usor doar cu console log si atat. s-a si inverzit pixeltab :))))
// cart.products.forEach(function (product) {

// });
console.log(
  `${cart.name} ${cart.surname} are ${cart.products.length} tipuri de produse in cart.`,
);

console.warn(
  `Folosind forEach() Afiseaza propozitia: “name are urmatoarele produse in cart: a, b, c, d, e si f.”`,
);
