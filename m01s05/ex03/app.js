const calculateRectangleArea = function (width, length) {
  const area = width * length;

  return area;
};

console.warn(
  `Stiind ca un camp dreptunghiular de hamei produce 25kg/m2 , ce diferenta de productie este intre un teren de 100m pe 250m si unul de 350m pe 200m?`,
);

let field1Length = 100;
let field1Width = 250;
let field2Length = 350;
let field2Width = 200;
let barleyYield = 25; // kg/m2
let beerYield = 2.5 / 10;

const field1Yield =
  calculateRectangleArea(field1Width, field1Length) * barleyYield;

const field2Yield =
  calculateRectangleArea(field2Width, field2Length) * barleyYield;

console.log(field2Yield - field1Yield);

// m2 * kg/m2
console.warn(
  `Stiind ca din 10kg de hamei produc 2.5l de bere, cati litri de bere va produce un teren de 400m pe 370m?`,
);

const field3Yield = calculateRectangleArea(400, 370) * barleyYield;
const field3BeerYield = field3Yield * beerYield;
console.log(field3BeerYield);

console.warn(`Stiind ca un camp dreptunghiular de grau produce 32kg/m2  de faina, afla si afiseaza cate kilograme
de paine produce un camp de 300 pe 200 metri, stiind ca dintr-un kilogram de faina ies 2.5 kg de paine.
`);

let wheatLength = 300;
let wheatWidth = 200;
let wheatYield = 32;
let breadYield = 2.5;

const wheat = calculateRectangleArea(wheatLength, wheatWidth) * wheatYield;
const bread = wheat * breadYield;

console.log(bread);

console.warn(`Dar doua campuri de 150 pe 200 si 500 pe 300 in total?
`);

let wheat1Lenght = 200;
let wheat1Width = 150;
let wheat2Lenght = 500;
let wheat2Width = 300;

const wheat1 = calculateRectangleArea(wheat1Lenght, wheat1Width) * wheatYield;
const wheat2 = calculateRectangleArea(wheat2Lenght, wheat2Width) * wheatYield;
const bread1 = wheat1 * breadYield;
const bread2 = wheat2 * breadYield;

console.log(bread1 + bread2);
