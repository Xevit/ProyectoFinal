// Hacemos primero un objeto dummy

//       1
//    -------
//  4 |     | 2
//    |     |
//    -------
//       3

var CASTILLO = 'castillo';
var CAMINO = 'camino';
var CAMPO = 'campo;'

var FichaPropiedades = {
	murcam:  {nombre:"murcam", u:CAMPO,    r:CAMPO,    d:CASTILLO, l:CASTILLO, cont:5 },        		//media ficha muralla media ficha campo
	c3mur: 	 {nombre:"c3mur", u:CAMINO,   r:CAMINO,   d:CAMINO,   l:CASTILLO, cont:3 },           		//cruce de 3 caminos con muralla al lado
	mur2: 	 {nombre:"mur2", u:CAMPO,    r:CASTILLO, d:CAMPO,    l:CASTILLO, cont:3 },               	//una muralla a cada lado de la ficha
	m: 		 {nombre:"m", u: CAMPO,   r:CAMPO,    d:CAMPO,    l:CAMPO ,   cont:4 },                			//monasterio
  	mc: 	 {nombre:"mc", u:CAMPO,    r:CAMINO,   d:CAMPO,    l:CAMPO,    cont:2 },                			//monasterio con camino
	c4: 	 {nombre:"c4", u:CAMINO,   r:CAMINO,   d:CAMINO,   l:CAMINO,   cont:1 },                		//cruce de 4 caminos
	cc: 	 {nombre:"cc", u:CAMINO,   r:CAMINO,   d:CAMPO,    l:CAMPO,    cont:9 },                		//camino curva
 	cr: 	 {nombre:"cr", u:CAMPO,    r:CAMINO,   d:CAMPO,    l:CAMINO,   cont:8 },                		//camino recto
 	c3: 	 {nombre:"c3", u:CAMINO,   r:CAMINO,   d:CAMINO,   l:CAMPO,    cont:4 },                		//cruce de 3 caminos
	ciudad:  {nombre:"ciudad", u:CASTILLO, r:CASTILLO, d:CASTILLO, l:CASTILLO, cont:1 },        	//todo ciudad con escudo
	ciucam:  {nombre:"ciucam", u:CASTILLO, r:CAMPO,    d:CASTILLO, l:CASTILLO, cont:3 },        		//ciudad con un lado de campo
	chmur: 	 {nombre:"chmur", u:CASTILLO, r:CAMINO,   d:CASTILLO, l:CASTILLO, cont:1 },   			//camino hacia muralla
	mur2c: 	 {nombre:"mur2c", u:CASTILLO, r:CAMPO,    d:CAMPO,    l:CASTILLO, cont:2 },        			//2 murallas en lados contiguos
	mur1: 	 {nombre:"mur1", u:CAMPO,    r:CAMPO,    d:CAMPO,    l:CASTILLO, cont:5 },        				//1 muralla en un lado y el resto campo
 	cmur: 	 {nombre:"cmur", u:CAMINO,   r:CAMPO,    d:CAMINO,   l:CASTILLO, cont:3 },        			//camino recto con muralla al lado(una inicial)
 	ccmur: 	 {nombre:"ccmur", u:CAMINO,   r:CAMINO,   d:CAMPO,    l:CASTILLO, cont:3 },        			//camino con curva y con muralla al lado
	ccmur3:  {nombre:"ccmur3", u:CAMPO,    r:CAMINO,   d:CAMINO,   l:CASTILLO, cont:3 },        			//camino con curva y muralla al lado(otro)
	ciucam2: {nombre:"ciucam2", u:CASTILLO, r:CAMPO,    d:CASTILLO, l:CAMPO,    cont:1 },        		//ciudad con 2 lados opuestos de campo
	ccmur2:  {nombre:"ccmur2", u:CAMINO,   r:CAMINO,   d:CASTILLO, l:CASTILLO, cont:3 },	 			//camino con curva con 2 lados de ciudad contiguos
 	chmure:  {nombre:"chmure", u:CASTILLO, r:CAMINO,   d:CASTILLO, l:CASTILLO, cont:2 }, 			//camino hacia muralla con escudo
  	ccmur2e: {nombre:"ccmur2e", u:CAMINO,   r:CAMINO,   d:CASTILLO, l:CASTILLO, cont:2 },     		//camino con curva con 2 lados de ciudad,escudo
  	murcame: {nombre:"murcame", u:CAMPO,    r:CAMPO,    d:CASTILLO, l:CASTILLO, cont:2 },        		//media ficha muralla media ficha campo con escudo
  	ciucame: {nombre:"ciucame", u:CASTILLO, r:CAMPO,    d:CASTILLO, l:CASTILLO, cont:1 },        	//ciudad con un lado de campo con escudo
  	ciucam2e:{nombre:"ciucam2e", u:CASTILLO, r:CAMPO,    d:CASTILLO, l:CAMPO,    cont:2 }        		//ciudad con 2 lados opuestos de campo con escudo
}; 

	//Creo el array y luego hago el random del número que le pasamos al array
	var Aleatorio = function(){

		var conjunto = _.toArray(FichaPropiedades);
		var a = Math.floor(Math.random()*24);
		//alert("Numero aleatorio: " + a);
		//alert("Sprite aleatorio: " + conjunto[a]);
		return conjunto[a];
	};
	
	//Creamos tablero
	CrearTablero = function(){
		var x = new Array(72);
		for (var i = 0; i < 72; i++){
			x[i] = new Array(72);
		}
		for (var i = 0; i < 72; i++){
			for (var j = 0; j < 72; j++){
				x[i][j] = 0;
			}
		}
		return x;
	};

	//Aquí veo si hay fichas alrededor
	PosicionarFicha = function(Tablero, FichaPrueba, X, Y){
		var nosepuede = 0;
		if (Tablero[X][(Y-1)] != 0){ //Hay Ficha Arriba
			//alert("Tablero Arriba: " + Tablero[X][(Y-1)].d);
			//alert("FichaPrueba: " + FichaPrueba.u);
			if (Tablero[X][(Y-1)].d != FichaPrueba.u){ //Hay Ficha Arriba y Coincide
				nosepuede = 1;
			}
		}
		if ((Tablero[(X+1)][Y] != 0) && (nosepuede == 0)){ //Hay Ficha Derecha
			//alert("Tablero Derecha: " + Tablero[(X+1)][Y].l);
			//alert("FichaPrueba: " + FichaPrueba.r);
			if (Tablero[(X+1)][Y].l != FichaPrueba.r){ //Hay Ficha Derecha y Coincide
				nosepuede = 1;
			}
		}
		if ((Tablero[X][(Y+1)] != 0) && (nosepuede == 0)){ //Hay Ficha Abajo
			//alert("Tablero Abajo: " + Tablero[X][(Y+1)].u);
			//alert("FichaPrueba: " + FichaPrueba.d);
			if (Tablero[X][(Y+1)].u != FichaPrueba.d){	// Hay Ficha Abajo y Coincide
				nosepuede = 1;
			}
		}
		if ((Tablero[(X-1)][Y] != 0) && (nosepuede == 0)){ //Hay Ficha Izquierda
			//alert("Tablero Izquierda: " + Tablero[(X-1)][Y].r);
			//alert("FichaPrueba: " + FichaPrueba.l);
			if (Tablero[(X-1)][Y].r != FichaPrueba.l){ //Hay Ficha Izquierda y Coincide
				nosepuede = 1; 
			}
		}
		if (nosepuede == 1){
			alert("No se coloca");
			return 0;
		}
		else{
			Tablero[X][Y] = FichaPrueba;
			alert("Se coloca satisfactoriamente");
			return 1;
		}
	};
	
	//Desde aquí ejecutamos todo el código.
	EjecutaTotal = function(){
		var Ficha1 = Aleatorio();
		var Ficha2 = Aleatorio();
		var FichaPrueba = Aleatorio();

		//Comparar(Ficha1, Ficha2);
		alert("Ficha1: " + Ficha1.nombre);
		alert("Ficha2: " + Ficha2.nombre);
		alert("FichaPrueba: " + FichaPrueba.nombre);
		//Creamos tablero
		Tablero = CrearTablero();
		//Posicionamos ficha		
		Tablero[36][36] = Ficha1;
		Tablero[37][35] = Ficha2;
		//Nos pasan una posición en el tablero mediante los ejes x e y
		x = 37;	
		y = 36;
		//Hago una función para posicionar la ficha en la posición que me pasan		
		var sol = PosicionarFicha(Tablero, FichaPrueba, x, y);
		
		////////////Hago Prueba con fichas elegidas para que salga correcto/////////////
		/*alert("Segunda Parte");
		var FichaDada1 = Dada(3);
		var FichaDada2 = Dada(0);
		var FichaDadaP = Dada(17);
		alert("Dada1: " + FichaDada1.nombre);
		alert("Dada2: " + FichaDada2.nombre);
		alert("DadaP: " + FichaDadaP.nombre);
		//
		alert("Prop FichaDada1: " + FichaDadaP.u);
		Tablero[0][1] = FichaDada1;
		Tablero[1][0] = FichaDada2;
		//alert("FichaDadaP: " + FichaDadaP.u);
		x = 1;
		y = 1;
 		var sol2 = PosicionarFicha(Tablero, FichaDadaP, x, y);*/
		alert("Termina");
	};

$(function() {
	EjecutaTotal();
});




