var userInput = prompt('Baga numar boss');
var number = Number(userInput);
var errorMessage = 'Numar am zis';
var paragraphElement = document.getElementById('message');

if (userInput === null || userInput.trim() === '' || isNaN(number)) {
  console.log(errorMessage);
} else if (number === 20) {
  var message = `Numarul ${number} este egal cu 20`;
  console.log(message);
  paragraphElement.innerText = message;
} else if (number > 20) {
  var message = `Numarul ${number} este mai mare decat 20`;
  console.log(message);
  paragraphElement.innerText = message;
} else {
  var message = `Numarul ${number} este mai mic decat 20`;
  console.log(message);
  paragraphElement.innerText = message;
}
