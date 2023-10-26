const button = document.getElementById('clicker');
const removeButton = document.getElementById('removeEvent');
const queryButton = document.getElementById('query');
const message = document.getElementById('message');

function clickHandler() {
  alert('Ai apasat butonul!');
}

button.addEventListener('click', clickHandler);

removeButton.addEventListener('click', function () {
  button.removeEventListener('click', clickHandler);
});

queryButton.addEventListener('click', function () {
  const agePrompt = prompt('Varsta boss:');
  // sper sa fi avut sens "validarea" asta :)))) am gandit sa nu fie gol si
  // sa fie numar dar nu stiu cum sa afiseze dupa ce baga totusi un numar
  if (agePrompt !== null && !isNaN(agePrompt)) {
    console.log(`Varsta ta este ${agePrompt}`);
  } else {
    prompt(`Numar ba`);
  }
  message.innerText = agePrompt;
});
