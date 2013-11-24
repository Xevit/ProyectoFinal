// Hacemos primero un objeto dummy

//       1
//    -------
//  4 |     | 2
//    |     |
//    -------
//       3


FICHA_H = 62;
FICHA_W = 62;

var sprites = {
        m: { nombre: "m", sx: 253, sy: 44, w: FICHA_W, h: FICHA_H},                //monasterio
        mc: { nombre: "mc", sx: 331, sy: 44, w: FICHA_W, h: FICHA_H},                //monasterio con camino
        cr: { nombre: "cr", sx: 563, sy: 44, w: FICHA_W, h: FICHA_H},                //camino recto
        cc: { nombre: "cc", sx: 485, sy: 44, w: FICHA_W, h: FICHA_H},                //camino curva
        c3: { nombre: "c3", sx: 640, sy: 44, w: FICHA_W, h: FICHA_H},                //cruce de 3 caminos
        c4: { nombre: "c4", sx: 408, sy: 44, w: FICHA_W, h: FICHA_H},                //cruce de 4 caminos
        cmur: { nombre: "cmur", sx: 408, sy: 137, w: FICHA_W, h: FICHA_H},        //camino recto con muralla al lado(una de las fichas es la inicial)
        ccmur: { nombre: "ccmur", sx: 485, sy: 137, w: FICHA_W, h: FICHA_H},        //camino con curva y con muralla al lado
        chmur: { nombre: "chmur2", sx: 175, sy: 137, w: FICHA_W, h: FICHA_H},        //camino hacia muralla
        chmure: { nombre: "chmure", sx: 21, sy: 230, w: FICHA_W, h: FICHA_H},        //camino hacia muralla con escudo
        c3mur: { nombre: "c3mur", sx: 98, sy: 44, w: FICHA_W, h: FICHA_H},                //cruce de 3 caminos con muralla al lado
        ccmur2: { nombre: "ccmur2", sx: 717, sy: 137, w: FICHA_W, h: FICHA_H},        //camino con curva con 2 lados de ciudad contiguos
        ccmur2e: { nombre: "ccmur2e", sx: 98, sy: 230, w: FICHA_W, h: FICHA_H},        //camino con curva con 2 lados de ciudad contiguos con escudo
        ccmur3: { nombre: "ccmur3", sx: 562, sy: 137, w: FICHA_W, h: FICHA_H},        //camino con curva y muralla al lado(otro)
        murcam: { nombre: "murcam", sx: 21, sy: 44, w: FICHA_W, h: FICHA_H},        //media ficha muralla media ficha campo
        murcame: { nombre: "murcame", sx: 176, sy: 230, w: FICHA_W, h: FICHA_H},        //media ficha muralla media ficha campo con escudo
        mur2: { nombre: "mur2", sx: 176, sy: 44, w: FICHA_W, h: FICHA_H},                //una muralla a cada lado de la ficha
        mur2c: { nombre: "mur2c", sx: 253, sy: 137, w: FICHA_W, h: FICHA_H},        //2 murallas en lados contiguos
        mur1: { nombre: "mur1", sx: 330, sy: 137, w: FICHA_W, h: FICHA_H},        //1 muralla en un lado y el resto campo
        ciudad: { nombre: "ciudad", sx: 21, sy: 137, w: FICHA_W, h: FICHA_H},        //todo ciudad con escudo
        ciucam: { nombre: "ciudam", sx: 98, sy: 137, w: FICHA_W, h: FICHA_H},        //ciudad con un lado de campo
        ciucame: { nombre: "ciucame", sx: 331, sy: 230, w: FICHA_W, h: FICHA_H},        //ciudad con un lado de campo con escudo
        ciucam2: { nombre: "ciudam2", sx: 640, sy: 137, w: FICHA_W, h: FICHA_H},        //ciudad con 2 lados opuestos de campo
        ciucam2e: { nombre: "ciucam2e", sx: 408, sy: 230, w: FICHA_W, h: FICHA_H},        //ciudad con 2 lados opuestos de campo con escudo
        interrogante: { nombre: "interrogante", sx: 253, sy: 230, w: FICHA_W, h: FICHA_H}        //ficha con un interrogante
};

var CASTILLO = 'castillo';
var CAMINO = 'camino';
var CAMPO = 'campo;'

var FichaPropiedades = {
	murcam: {u:CAMPO, r:CAMPO, d:CASTILLO, l:CASTILLO, cont:5 },        		//media ficha muralla media ficha campo
	c3mur: {u:CAMINO, r:CAMINO, d:CAMINO, l:CASTILLO, cont:3 },           		//cruce de 3 caminos con muralla al lado
	mur2: {u:CAMPO, r:CASTILLO, d:CAMPO, l:CASTILLO, cont:3 },               	//una muralla a cada lado de la ficha
	m: {u: CAMPO, r:CAMPO, d:CAMPO, l:CAMPO , cont:4},                			//monasterio
  	mc: {u:CAMPO, r:CAMINO, d:CAMPO, l:CAMPO, cont:2 },                			//monasterio con camino
	c4: {u:CAMINO, r:CAMINO, d:CAMINO, l:CAMINO, cont:1 },                		//cruce de 4 caminos
	cc: {u:CAMINO, r:CAMINO, d:CAMPO, l:CAMPO, cont:9 },                		//camino curva
 	 cr: {u:CAMPO, r:CAMINO, d:CAMPO, l:CAMINO, cont:8 },                		//camino recto
 	c3: {u:CAMINO, r:CAMINO, d:CAMINO, l:CAMPO, cont:4 },                		//cruce de 3 caminos
	ciudad: {u:CASTILLO, r:CASTILLO, d:CASTILLO, l:CASTILLO, cont:1},        	//todo ciudad con escudo
	ciucam: {u:CASTILLO, r:CAMPO, d:CASTILLO, l:CASTILLO, cont:3 },        		//ciudad con un lado de campo
	chmur: {u:CASTILLO, r:CAMINO, d:CASTILLO, l:CASTILLO, cont:1 },   			//camino hacia muralla
	mur2c: {u:CASTILLO, r:CAMPO, d:CAMPO, l:CASTILLO, cont:2 },        			//2 murallas en lados contiguos
	mur1: {u:CAMPO, r:CAMPO, d:CAMPO, l:CASTILLO, cont:5 },        				//1 muralla en un lado y el resto campo
 	cmur: {u:CAMINO, r:CAMPO, d:CAMINO, l:CASTILLO, cont:3 },        			//camino recto con muralla al lado(una de las fichas es la inicial)
 	ccmur: {u:CAMINO, r:CAMINO, d:CAMPO, l:CASTILLO, cont:3 },        			//camino con curva y con muralla al lado
	ccmur3: {u:CAMPO, r:CAMINO, d:CAMINO, l:CASTILLO, cont:3 },        			//camino con curva y muralla al lado(otro)
	ciucam2: {u:CASTILLO, r:CAMPO, d:CASTILLO, l:CAMPO, cont:1 },        		//ciudad con 2 lados opuestos de campo
	ccmur2: {u:CAMINO, r:CAMINO, d:CASTILLO, l:CASTILLO, cont:3 },	 			//camino con curva con 2 lados de ciudad contiguos
 	chmure: {u:CASTILLO, r:CAMINO, d:CASTILLO, l:CASTILLO, cont:2 }, 			//camino hacia muralla con escudo
  	ccmur2e: {u:CAMINO, r:CAMINO, d:CASTILLO, l:CASTILLO, cont:2 },     		//camino con curva con 2 lados de ciudad contiguos con escudo
  	murcame: {u:CAMPO, r:CAMPO, d:CASTILLO, l:CASTILLO, cont:2 },        		//media ficha muralla media ficha campo con escudo
  	ciucame: {u:CASTILLO, r:CAMPO, d:CASTILLO, l:CASTILLO, cont:1 },        	//ciudad con un lado de campo con escudo
  	ciucam2e: {u:CASTILLO, r:CAMPO, d:CASTILLO, l:CAMPO, cont:2 },        		//ciudad con 2 lados opuestos de campo con escudo

}; 

//Creo el array y luego hago el random del número que le pasamos al array
var Aleatorio = function(){

	conjunto = _.toArray(sprites);

	var a = Math.floor(Math.random()*26)
	return conjunto[a];
};

//Función Inicio, iniciamos la creación de una ficha aleatoria

		//Le pasamos la función aleatorio para que elija un sprite y se lo pasamos
		// al diccionario FichaPropiedades para poder consultar si el cont = 0
		Elegir = function() {
			var aleatorio= Aleatorio();
			while (FichaPropiedades[aleatorio.nombre].cont == 0){
				aleatorio= Aleatorio();
			}

		return aleatorio;	
	};	
	// Definimos la variable genérica ficha. La útlima propiedad es la ficha elegida
	Ficha = function(x, y,sprite) {
    	    this.x = x;
    	    this.y = y;
    	    this.w = FICHA_W;
    	    this.h = FICHA_H;
    	    this.sprite = sprite;
			this.prop = FichaPropiedades[sprite.nombre];

	};

	//Función que llama a Elegir() para obtener una ficha aleatoria
	Initialize = function(){
			randoms = Elegir();
			var ficha_inicial = new Ficha(394, 263, randoms);
			return ficha_inicial;
			//$("resultado").html(ficha_inicial);
			//$("#content span").html(ficha_inicial);
	};
	//Función que compara los lados derecha e izquierda
	Comparar = function(f1,f2){
		if(f1.prop.r == f2.prop.l)
			alert("Coincide!");
		else
			alert("No Coincide!");

	};	
$(function() {
    var Ficha1 = Initialize();
	var Ficha2 = Initialize();
	Comparar(Ficha1, Ficha2);
	alert(Ficha1.sprite.nombre);
	alert(Ficha2.sprite.nombre);
});




