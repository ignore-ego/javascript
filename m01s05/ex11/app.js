function calculateSurface(width, length, height) {
  if (arguments.length === 1) {
    return width ** 2;
  } else if (arguments.length === 2) {
    return width * length;
  } else if (arguments.length === 3) {
    return width * length * height;
  }
}

function calculateCircleArea(radius) {
  return Math.PI * radius ** 2;
}
console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

const pet = {
  name: 'Smaug',
  species: 'dragon',
  age: 2400,
  getName: function () {
    return this.name;
  },
  getSpecies: function () {
    return this.species;
  },
  getAge: function () {
    return this.age;
  },
};

const petName = pet.getName();
const petAge = pet.getAge();
const species = pet.getSpecies();

console.log(`${petName} este ${species} si are ${petAge} ani.`);
console.log(`Animalul meu are ${petAge} ani.`);

// mi-a mai ramas asta
// Cerinta este: Functia "calculateSurface" trebuie sa returneze 950 pentru parametrii 20, 15 si 5
// Functia "calculateSurface" a returnat 1500 dar trebuia sa returneze 950.
//  si nu inteleg ce am gresit
