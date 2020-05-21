function Snake() {
  this.x = 960;
  this.y = 400;
  this.xSpeed = scale * 1;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];
  this.highscore = 0;

  this.draw = function () {
    ctx.fillStyle = "#167a2a";
    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x,
        this.tail[i].y, scale, scale);
    }

    ctx.fillRect(this.x, this.y, scale, scale);
  }
  window.addEventListener('keydown', ((evt) => { //pausa
    if (evt.key == "p") {
      this.xSpeed = 0;
    }
  }));
  this.update = function () {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }

    this.tail[this.total - 1] = {
      x: this.x,
      y: this.y
    };

    this.x += this.xSpeed;
    this.y += this.ySpeed;


    // Obsługa uderzenia w ścianę
    if (this.x > canvas.width - 40) {
      this.lose();
    }

    if (this.y > canvas.height - 40) {
      this.lose();
    }

    if (this.x < 20) {
      this.lose();
    }

    if (this.y < 20) {
      this.lose();
    }
  }

  // Zmiana kierunku węża po wciśnięciu przycisku
  this.changeDirection = function (direction) {
    switch (direction) {
      case 'Up':
        if (this.xSpeed == 0 && this.ySpeed == scale * 1) break;
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        break;
      case 'Down':
        if (this.xSpeed == 0 && this.ySpeed == -scale * 1) break;
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        break;
      case 'Left':
        if (this.xSpeed == scale * 1 && this.ySpeed == 0) break;
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        break;
      case 'Right':
        if (this.xSpeed == -scale * 1 && this.ySpeed == 0) break;
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        break;
    }
  }

  this.eat = function (fruit) {
    if (this.x === fruit.x &&
      this.y === fruit.y) {
      this.total++;
      if (this.total > this.highscore) this.highscore = this.total;
      return true;
    }

    return false;
  }

  this.checkCollision = function () {
    for (var i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i].x &&
        this.y === this.tail[i].y) {
        this.lose();
      }
    }
  }

  this.lose = function () {
    this.total = 0;
    this.tail = [];
    this.x = 960;
    this.y = 400;
  }
}