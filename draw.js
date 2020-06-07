const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
//ustalanie parametrów HTML5 canvas
let level;

let box;

snake = new Snake();
fruit = new Fruit();
background = new Background();


document.getElementById("easy").addEventListener("click", (evt) => {
  if (!level) level = startGame(100);
  //document.getElementById("level").style.visibility = "hidden";
  box = document.getElementById("level");
  box.innerHTML = "";
  box.className = "";
});

document.getElementById("medium").addEventListener("click", (evt) => {
  if (!level) level = startGame(75);
  box = document.getElementById("level");
  box.innerHTML = "";
  box.className = "";
});

document.getElementById("hard").addEventListener("click", (evt) => {
  if (!level) level = startGame(50);
  box = document.getElementById("level");
  box.innerHTML = "";
  box.className = "";
});



function startGame(snakeSpeed) {

  document.getElementById("change").style.visibility = "visible";
  document.getElementById("info").innerText = "Wciśnij strzałkę aby rozpocząć";

  (function setup() {
    fruit.pickLocation();

    //zmiana położenia zdobyczy

    window.setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      background.draw();
      //tworzenie tła
      fruit.draw();
      //generowanie zdobyczy
      snake.update();
      //aktualizowanie wielkości węża
      snake.draw();
      //stworzenie węża na widoku

      if (snake.eat(fruit)) {
        fruit.pickLocation(snake.tail);
        //wywołanie działań związanych ze zebraniem zdobyczy
      }

      if (!snake.pause) snake.checkCollision();

      document.querySelector('.score')
        .innerText = "Zdobyte punkty " + snake.total;
      //ładowanie do widoku odpowiedniego stringa, reprezentującego zdobyte punkty
      document.querySelector('.highscore')
        .innerText = "Rekord: " + snake.highscore;
      //ładowanie do widoku odpowiedniego stringa, reprezentującego rekord zdobytych punktów
    }, snakeSpeed);
  }());
}

window.addEventListener('keydown', ((evt) => { //Zmiana kierunku wężą po wciśnięciu przycisku
  const direction = evt.key.replace('Arrow', '');
  if (direction == "Up" || direction == "Down" || direction == "Right" || direction == "Left") {
    snake.changeDirection(direction);
    document.getElementById("info").innerText = "Wciśnij P aby zatrzymać grę";
  }
}));

window.addEventListener('keydown', ((evt) => { //Zmiana kierunku wężą po wciśnięciu przycisku
  if (evt.key == "x") {
    fruit.pickLocation(snake.tail);
  }
}));

window.addEventListener('keydown', ((evt) => {
  if (evt.key == "p") {
    document.getElementById("info").innerText = "Wciśnij strzałkę aby rozpocząć";;
  }
}));