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

console.warn(
  `Folosind forEach() Afiseaza propozitia: “name are urmatoarele produse in cart: a, b, c, d, e si f.”`,
);

let productsString = '';

cart.products.forEach(function (product, index) {
  if (index === 0) {
    productsString += product.name;
  } else if (index === cart.products.length - 1) {
    productsString += ` si ${product.name}`;
  } else {
    productsString += `, ${product.name}`;
  }
});

console.log(`${cart.name} are urmatoarele produse in cart: ${productsString}.`);

console.warn(
  `folosind forEach () Afiseaza propozitia “Valoarea totala a cartului lui name este xxx.”`,
);

let totalValue = 0;
cart.products.forEach(function (product) {
  totalValue += product.price * product.quantity;
});

console.log(`Valoarea totala a cartului lui ${cart.name} este ${totalValue}.`);

console.warn(
  `folosind forEach () Afiseaza propozitia “Greutatea totala a cartului lui name este xxx.”`,
);

let totalWeight = 0;
cart.products.forEach(function (product) {
  totalWeight += product.quantity * product.weight;
});

console.log(
  `Greutatea totala a cartului lui ${cart.name} este ${totalWeight}.`,
);

console.warn(
  `folosind forEach () Afiseaza propozitia “Name isi cumpara un total de xxx produse.”`,
);

let totalProducts = 0;
cart.products.forEach(function (products) {
  totalProducts += products.quantity;
});

console.log(`${cart.name} isi cumpara un total de ${totalProducts} produse.`);

console.warn(
  `folosind forEach Afiseaza propozitia “Cartul contine produse din categoria Mobile in valoare totala de xxx.”`,
);

// pana aici pixeltab era dinamic dar el chiar voia sa afisez mobile si valoarea 0
let totalFoodPrice = 0;

cart.products.forEach(function (product) {
  if (product.category === 'food') {
    totalFoodPrice += product.price * product.quantity;
  }
});

console.log(
  `Cartul contine produse din categoria food in valoare totala de  ${totalFoodPrice}.`,
);

console.warn(`folosind for each Afiseaza propozitia “Greutatea totala a produselor din categoria Mobile este xxx.”
`);

let totalFoodWeight = 0;
cart.products.forEach(function (product) {
  if (product.category === 'food') {
    totalFoodWeight += product.weight * product.quantity;
  }
});

console.log(
  `Greutatea totala a produselor din categoria food este ${totalFoodWeight}.`,
);

// nu inteleg cerinta aici
console.warn(
  `folosind for each Afiseaza propozitia “Totalul pretului per produs din cart este xxx.”`,
);

console.warn(`Afiseaza propozitia: “Nume prenume isi permite | nu isi permite cartul.” In functie de buget
`);

const maximumBudget = 5500;

if (totalValue <= maximumBudget) {
  console.log(`${cart.name} isi permite cartul.`);
} else {
  console.log(`${cart.name} nu isi permite cartul.`);
}

console.warn(
  `Afiseaza propozitia “Firma de curierat poate | nu poate livra comanda.” In functie de greutatea totala a produselor din cart.`,
);

const maximumWeight = 855;
if (totalWeight <= maximumWeight) {
  console.log(`Firma de curierat poate livra comanda.`);
} else {
  console.log(`Firma de curierat nu poate livra comanda.`);
}
