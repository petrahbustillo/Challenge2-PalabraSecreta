var canvas = document.getElementById('lienzo');
var ctx = canvas.getContext("2d");
var remover = document.getElementById('lienzo');

function dibujarFiguraColgada() {  

  if(chances <=6) {
	ctx.lineWidth = 15;
	ctx.strokeStyle = '#212121';  
	ctx.beginPath();//figura linea base
	ctx.moveTo(50,400);
	ctx.lineTo(350,400);
	ctx.stroke();
   };

  if(chances <=5) {//figura linea vertical mastil 
	ctx.beginPath();
	ctx.moveTo(100,400);
	ctx.lineTo(100,80);
	ctx.lineTo(250,80);
	ctx.stroke();
   };

   if(chances <=4) {//figura linea cuerda
	ctx.beginPath();
	ctx.moveTo(250,80);
	ctx.lineWidth = 5;
	ctx.lineTo(250,170);
	ctx.stroke();
    };
 
   if(chances <=3) {
	ctx.lineWidth = 7;
	ctx.strokeStyle = '#dd4407';
	ctx.beginPath();//figura linea de cuerpo
	ctx.moveTo(250,170);
	ctx.lineTo(250,250);
	ctx.stroke();
   };

   if(chances <=2) {
	ctx.lineWidth = 7;
	ctx.strokeStyle = '#dd4407';
	ctx.beginPath();//figura linea de brazo izquierdo
	ctx.moveTo(250,180);
	ctx.lineTo(230,250);
	ctx.stroke();

	ctx.beginPath();//figura linea de brazo derecho
	ctx.moveTo(250,180);
	ctx.lineTo(270,250);
	ctx.stroke();
   };

   if(chances <=1) {
	ctx.lineWidth = 7;
	ctx.strokeStyle = '#dd4407';
	ctx.beginPath();//figura linea de pierna izquierda
	ctx.moveTo(250,250);
	ctx.lineTo(240,310);
	ctx.stroke();

	ctx.beginPath();//figura linea de pierna derecha
	ctx.moveTo(250,250);
	ctx.lineTo(260,310);
	ctx.stroke();
   };

   if(chances === 0) {
	ctx.lineWidth = 7;
	ctx.strokeStyle = '#dd4407';
	ctx.beginPath();
	ctx.arc(276, 180, 26, 0, Math.PI * 2);
  	ctx.stroke(); // figura circular
    };
}

function dibujarFiguraSalvada() {
	if(palabraAdivina.search("_") === -1) {  
		ctx.lineWidth = 15;
		ctx.strokeStyle = '#212121';  
		ctx.beginPath();//figura linea base
		ctx.moveTo(50,400);
		ctx.lineTo(350,400);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(100,400);
		ctx.lineTo(100,80);
		ctx.lineTo(250,80);
		ctx.stroke();
	
		ctx.beginPath();
		ctx.moveTo(250,80);
		ctx.lineWidth = 5;
		ctx.lineTo(250,170);
		ctx.stroke();

		ctx.lineWidth = 7;
		ctx.strokeStyle = '#dd4407';
		ctx.beginPath();//figura linea de cuerpo
		ctx.moveTo(250,320);
		ctx.lineTo(250,265);
		ctx.stroke();
	
		ctx.lineWidth = 7;
		ctx.strokeStyle = '#dd4407';
		ctx.beginPath();//figura linea de brazo izquierdo
		ctx.moveTo(250,295);
		ctx.lineTo(200,250);
		ctx.stroke();
	
		ctx.beginPath();//figura linea de brazo derecho
		ctx.moveTo(250,295);
		ctx.lineTo(300,250);
		ctx.stroke();
	
		ctx.lineWidth = 7;
		ctx.strokeStyle = '#dd4407';
		ctx.beginPath();//figura linea de pierna izquierda
		ctx.moveTo(250,320);
		ctx.lineTo(240,400);
		ctx.stroke();
	
		ctx.beginPath();//figura linea de pierna derecha
		ctx.moveTo(250,320);
		ctx.lineTo(260,400);
		ctx.stroke();
	
		ctx.lineWidth = 7;
		ctx.strokeStyle = '#dd4407';
		ctx.beginPath();
		ctx.arc(250, 238, 26, 0, Math.PI * 2);
		  ctx.stroke(); // figura circular
	}
}


