function Line() {
    this.p1;
    this.playerTurn = function() {      
        this.p1 = rect(0, 0, this.gapX + gridSize, gridSize);
        //this.p2 = rect(0, 0, this.gapX + gridSize, gridSize);
    }
}