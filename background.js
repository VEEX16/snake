function Background() {
    this.x;
    this.y;

    this.draw = function () {
        for (let i = 0; i < columns; i++) {
            for (let l = 0; l < rows; l++) {
                //pętle generujące planszę
                if (l % 2 == 0) {
                    if (l == 0 || i == 0 || i == columns - 1 || l == rows - 1) {
                        ctx.fillStyle = "#422d13"
                        ctx.fillRect(i * scale, l * scale, scale, scale)
                        //tworzenie obramowania planszy
                    } else if (i % 2 == 0) {
                        ctx.fillStyle = "#192919";
                        ctx.fillRect(i * scale, l * scale, scale, scale)
                        //tworzenie jaśniejszego koloru planszy
                    } else {
                        ctx.fillStyle = "#141f14";
                        ctx.fillRect(i * scale, l * scale, scale, scale)
                        //tworzenie ciemniejszego koloru planszy
                    }
                } else {
                    if (l == 0 || i == 0 || i == columns - 1 || l == rows - 1) {
                        ctx.fillStyle = "#422d13";
                        ctx.fillRect(i * scale, l * scale, scale, scale)
                        //tworzenie obramowania planszy
                    } else if (i % 2 == 0) {
                        ctx.fillStyle = "#141f14";
                        ctx.fillRect(i * scale, l * scale, scale, scale)
                        //tworzenie ciemniejszego koloru planszy
                    } else {
                        ctx.fillStyle = "#192919";
                        ctx.fillRect(i * scale, l * scale, scale, scale)
                        //tworzenie jaśniejszego koloru planszy
                    }
                }
            }
        }
    }
}