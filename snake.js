function Snake() {
  this.x = 960;
  this.y = 400;
  //pozycja startowa węża
  this.xSpeed = scale * 1;
  this.ySpeed = 0;
  //prędkość węża
  this.total = 0;
  //ilość zdobytych punktów
  this.tail = [];
  //wielkość ogonu
  this.highscore = 0;
  this.pause = false;

  this.draw = function () {
    ctx.fillStyle = "#167a2a";
    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x,
        this.tail[i].y, scale, scale);
    }

    ctx.fillRect(this.x, this.y, scale, scale);
  }


  window.addEventListener('keydown', ((evt) => {
    if (evt.key == "p") {
      this.pause = true;
      this.xSpeed = 0;
      this.ySpeed = 0;
      //w przypadku wybrania "p"- przerwa w grze
    }
  }));


  this.update = function () {
    if (!this.pause) {
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }

    if (!this.pause) {
      this.tail[this.total - 1] = {
        x: this.x,
        y: this.y
      };
    }

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
    //zmiania kierunku przemieszczania się węża
    switch (direction) {
      case 'Up':
        if (this.xSpeed == 0 && this.ySpeed == scale * 1) break;
        this.xSpeed = 0;
        this.ySpeed = -scale * 1;
        this.pause = false;
        break;
      case 'Down':
        if (this.xSpeed == 0 && this.ySpeed == -scale * 1) break;
        this.xSpeed = 0;
        this.ySpeed = scale * 1;
        this.pause = false;
        break;
      case 'Left':
        if (this.xSpeed == scale * 1 && this.ySpeed == 0) break;
        this.xSpeed = -scale * 1;
        this.ySpeed = 0;
        this.pause = false;
        break;
      case 'Right':
        if (this.xSpeed == -scale * 1 && this.ySpeed == 0) break;
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        this.pause = false;
        break;
    }
  }
  //działanie w przypadku zdobycia punktu
  this.eat = function (fruit) {
    if (this.x === fruit.x &&
      this.y === fruit.y) {
      this.total++;
      if (this.total > this.highscore) this.highscore = this.total;
      return true;
    }

    return false;
  }
  //funkcja sprawdzająca zderzenie węża z samym sobą
  this.checkCollision = function () {
    for (var i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i].x &&
        this.y === this.tail[i].y) {
        this.lose();
      }
    }
  }
  //zmiana ustawień parametrów na wartości domyślne w przypadku przegranej
  this.lose = function () {
    this.total = 0;
    this.tail = [];
    this.x = 960;
    this.y = 400;
    // FileSave("cos", "cos.txt");
  }

  // function FileSave(sourceText, fileIdentity) {
  //   var workElement = document.createElement("a");
  //   if ('download' in workElement) {
  //     workElement.href = "data:" + 'text/plain' + "charset=utf-8," + escape(sourceText);
  //     workElement.setAttribute("download", fileIdentity);
  //     document.body.appendChild(workElement);
  //     var eventMouse = document.createEvent("MouseEvents");
  //     eventMouse.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  //     workElement.dispatchEvent(eventMouse);
  //     document.body.removeChild(workElement);
  //   } else throw 'File saving not supported for this browser';
  // }
}