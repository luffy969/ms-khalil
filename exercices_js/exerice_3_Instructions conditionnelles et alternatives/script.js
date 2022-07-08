
var nombre = prompt("Entrez un nombre");

if (nombre % 2 == 0 ) {
alert("nombre pair");
}
else {
alert("nombre impair");
}



var anneeNaissance = prompt("Entree votre année de naissance");
var age = 2022-anneeNaissance ;
if (age >= 18){alert("majeur")}
else {alert("mineur")};







var nombre1 = prompt ("1er nombre")
var signe = prompt ("entrez un signe")
var nombre2 = prompt ("2eme nombre")

switch (signe){
case "+": 
alert(nombre1+nombre2);
break;

case "-": 
alert(nombre1-nombre2);
break;

case "*": 
alert(nombre1*nombre2);
break;
case "/": 
if (nombre2 == 0){
alert("division par 0");
alert("erreur");
break;
}
alert(nombre1/nombre2);
break;

default :
alert("erreur");
}
















