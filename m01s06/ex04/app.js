(function () {
  const paragraphElement = document.createElement('p');
  paragraphElement.classList.add('message');
  document.body.append(paragraphElement);

  document.addEventListener('DOMContentLoaded', function () {
    const stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', function () {
      const message = 'Mouseul este pe scena';

      console.log(message);
      showMessage(message);
    });

    stage.addEventListener('mouseout', function () {
      const message = 'Mouseul nu este pe scena';

      console.log(message);
      showMessage(message);
    });
  });

  function showMessage(message) {
    paragraphElement.innerText = message;
  }
})();
