// Declarando las variables
var startGame = "";

setTimeout(function(){
  startGame = prompt('¿Deseas jugar?', 'Si');
startGame= startGame.toUpperCase();

var elemento = document.getElementById('title');

if (startGame === "SI") {
  alert('Responde con a, b, c');
  document.getElementById("boton1").style.visibility = "visible";
  document.getElementById("boton2").style.visibility = "visible";
  document.getElementById("boton3").style.visibility = "visible";
  elemento.innerHTML = "HisToriA De ArgeNtiNA";
  document.getElementById("tabla").style.visibility = "visible";
  document.getElementById("show").style.visibility = "visible";
  document.getElementById("posicion").style.visibility = "visible";
  document.getElementById("title").style.visibility = "visible";
  
  //respuesta1 .b
  var respuesta1 = prompt('¿que DiA es coNsiDeRaDo el "DiA De La inDePenDenciA"? \n a. 9 De juLio De 1816 \n b. 9 De juLio De 1810 \n c. 9 De juLio De 1812');
  //respuesta2 .b
  var respuesta2 = prompt('¿Que DiA MAnueL beLgRAno izó LA bAnDerA por priMerA vez? \n a. 25 De MAyo de 1810 \n b. 10 De AgosTo de 1812 \n c. 27 De feBrero De 1812' );
  //respuesta3 .a
  var respuesta3 = prompt('¿Que DiA LAs FuerzAs MiLiTAres ArgeNTiNAs toMaroN coNtroL DeL pAis? \n a. 1976 \n b. 1972 \n c. 1974');
} else if (startGame === "NO") {
  elemento.innerHTML = " Ok Nos vemos otro día :( ";
  document.getElementById("tabla").style.visibility = "hidden";
  document.getElementById("show").style.visibility = "hidden";
  document.getElementById("posicion").style.visibility = "hidden";
  document.getElementById("title").style.visibility = "hidden";
  
} else {
  elemento.innerHTML = "Solo puedes contestar con \"Si\" o \"No\". ¡Refresque la página y responda nuevamente!";
  document.getElementById("tabla").style.visibility = "hidden";
  document.getElementById("show").style.visibility = "hidden";
  document.getElementById("posicion").style.visibility = "hidden";
   document.getElementById("title").style.visibility = "hidden";
  
}

// Selecciono los elementos del html por ID y asigno la respuesta del usuario
var elemento1 = document.getElementById('prob1');
elemento1.innerHTML = respuesta1.toUpperCase();
var elemento2 = document.getElementById('prob2');
elemento2.innerHTML = respuesta2.toUpperCase();
var elemento3 = document.getElementById('prob3');
elemento3.innerHTML = respuesta3.toUpperCase();



var acertadas = 0;
var puntaje = 0;

if (respuesta1.toUpperCase()=="A" && respuesta2.toUpperCase()=="C" && respuesta3.toUpperCase()=="A") {

  acertadas= 3;
  puntaje = 30;
} else {
  if (respuesta1.toUpperCase()!="B" && respuesta2.toUpperCase()!="B" && respuesta3.toUpperCase()!="C") {
      acertadas=0;
      puntaje = 0;
  } else {
    if (respuesta1.toUpperCase()!="B" && respuesta2.toUpperCase()!="B" && respuesta3.toUpperCase()=="C") {
       acertadas=1;
       puntaje = 10;
    } else {
      if (respuesta1.toUpperCase()!="A" && respuesta2.toUpperCase()=="B" && respuesta3.toUpperCase()!="C") {
        acertadas=1;
        puntaje = 10;
      } else {
        if (respuesta1.toUpperCase()=="C" && respuesta2.toUpperCase()!="B" && respuesta3.toUpperCase()!="A") {
            acertadas=1;
            puntaje = 10;
        } else {
          acertadas=2;
          puntaje = 20;}
      }
    }
  }
}

var acertadas1 = document.getElementById("acertadas");
acertadas1.innerHTML="Acertaste "+ acertadas+" de 3.";

var puntuacion1 = document.getElementById("puntuacion");
puntuacion1.innerHTML="Tienes "+ puntaje+" puntos.";


},1000);

// Botones de explicación de preguntas



