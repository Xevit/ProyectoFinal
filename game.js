// Hacemos primero un objeto dummy

//       1
//    -------
//  4 |     | 2
//    |     |
//    -------
//       3

FichaActual = new function() {
        this.girada = false;
        this.h = FICHA_H;
        this.w = FICHA_W;
        this.x = 990;
        this.y = 100;
        this.sprite = 'interrogante';
}

var FichaP1 = new FichaActual();

FichaP1.prototype.sprite = 'chmure';

var FichaP2 = new FichaActual();

FichaP2.prototype.sprite = 'murcame';

Elec = new function() {
	this.ficha = function() {
		
	}
}

$(function() {
    Game.initialize("juego");
});
