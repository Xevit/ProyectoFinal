/*******************************************************************************
*  Defines functions that can be invoked over the network by clients.
*/

Meteor.methods({

	Tablero.colocarficha: function (ficha,ox,oy) {
		return ficha;
	}

	Tablero.robarficha: function() {
		return ficha;
	}

	Tablero.colocarseguidor: function(ficha){
		return seguidor;
	}

	Tablero.cierracamino: function(ficha,flag) {
		return puntos;
	}
	
	Tablero.cierracastillo: function(ficha) {
		return puntos;
	}

	Tablero.cierraclaustro: function(ficha){
		return puntos;
	}

	/*colocarseguidor: function(ficha)
		return ...
	}*/

	/*objetojugador: function(nombre, edad, n_jugador){
		
	}*/

	objetoficha: function(x,y,i,tipoficha){}	

});

