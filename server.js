/*******************************************************************************
*  Defines functions that can be invoked over the network by clients.
*/

Meteor.methods({

	ColocaFicha: function (ficha,ox,oy) {
		ficha = Tablero.colocarficha;
		return ficha;
	}

	RobaFicha: function() {
		ficha = Tablero.robarficha;
		return ficha;
	}

	ColocaSeguidor: function(ficha){
		seguidor = Tablero.colocarseguidor
		return seguidor;
	}

	CierraCamino: function(ficha,flag) {
		puntos = Tablero.cierracamino
		return puntos;
	}
	
	CierraCastillo: function(ficha) {
		puntos = Tablero.cierracastillo
		return puntos;
	}

	CierraClaustro: function(ficha){
		puntos = Tablero.cierraclaustro
		return puntos;
	}

	/*colocarseguidor: function(ficha)
		return ...
	}*/

	/*objetojugador: function(nombre, edad, n_jugador){
		
	}*/

	ObjetoFicha: function(x,y,i,tipoficha){
		this.i=i; //nos indica la posición real en la lista tablero
		this.x=x; // x e y nos indican la posición 
		this.y=y; // ficticia en el tablero virtual
		this.lleno=false;
		this.tipo=tipoficha;	
	}	

});

