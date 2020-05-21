function Fruit() {
  this.x;
  this.y;
  let a;
  let b;

  // Losowe pojawianie się owocu
  this.pickLocation = function (tail) {
    this.x = (Math.floor(Math.random() * (columns - 3)) + 2) * scale;
    this.y = (Math.floor(Math.random() * (rows - 3)) + 2) * scale;
  }



  //Rysowanie owocu
  this.draw = function () {
    ctx.fillStyle = "#c91240";
    ctx.fillRect(this.x, this.y, scale, scale)
  }

  // this.draw = function () {
  //   // var c = document.getElementById("canvas");
  //   //  var ctx = c.getContext("2d");
  //   //ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   var img = document.getElementById("fruit")
  //   var pat = ctx.createPattern(img, "repeat");
  //   //ctx.rect(this.x, this.y, scale, scale);
  //   ctx.fillStyle = pat;
  //   ctx.fillRect(this.x, this.y, scale, scale)
  // }


}