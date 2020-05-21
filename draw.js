const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
let snakeSpeed = 100;


(function setup() {
  snake = new Snake();
  fruit = new Fruit();
  background = new Background();
  fruit.pickLocation();


  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.draw();
    fruit.draw();
    snake.update();
    snake.draw();

    if (snake.eat(fruit)) {
      fruit.pickLocation(snake.tail);
    }

    snake.checkCollision();
    document.querySelector('.score')
      .innerText = "Zdobyte punkty " + snake.total;
    document.querySelector('.highscore')
      .innerText = "Rekord: " + snake.highscore;

  }, snakeSpeed);
}());

window.addEventListener('keydown', ((evt) => { //Zmiana kierunku wężą po wciśnięciu przycisku
  const direction = evt.key.replace('Arrow', '');
  snake.changeDirection(direction);
}));

window.addEventListener('keydown', ((evt) => { //Zmiana kierunku wężą po wciśnięciu przycisku
  if (evt.key == "x") {
    fruit.pickLocation(snake.tail);
  }
}));