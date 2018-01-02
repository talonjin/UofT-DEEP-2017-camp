function Grid(x, y) {
    this.grid = [];
    this.numCol = x;
    this.numRow = y;
    this.x;
    this.y;
    this.gapX = 75;
    this.gapY = 75;

    this.create = function(){
        for (col = 0; col < this.numCol; col++) {
            this.grid[col] = [];
            this.x = col * (this.gapX + gridSize);
            for (row = 0; row < this.numRow; row++) {
                this.y = row * (this.gapY + gridSize);
                this.grid[col][row] = {x: this.x, y: this.y, w: gridSize, h: gridSize};
            }
        }
    }

    this.show = function() {
        for (var i in this.grid){
            for (var j in this.grid[i]){
                theBlock = this.grid[i][j];
                rect(theBlock.x, theBlock.y, theBlock.w, theBlock.h);
            }
        }
    }
}

