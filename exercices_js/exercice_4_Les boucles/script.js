
function displayArray(strArray) {
    document.getElementById("Nb").innerHTML = strArray.length;

    for(let pr of strArray) {
        document.getElementById("body").innerHTML += "<tr><td>" + pr + "</td></tr>";
    }
}

let prenom = [];

while (true){
    let input = prompt("Entrez un nom :");

    if(input === "") {
        break;
    }

    prenom.push(input);
}

displayArray(prenom);


//EXERCICE2

var N = prompt("entrez un nombre")
for (let i = 0; i<N ;i++) {
    console.log(i)
}
//exercice3var 

var entiers = [];

do {
    entiers.push (parseInt(prompt("num")));
    console.log(entiers);
}while(entiers[entiers.length - 1] != 0)
console.log(typeof(entiers[0]));

var somme ;


for (var s=0 ; ;s++ ){
    somme += entiers[s];

}
console.log(somme + parseInt(entiers));


//exercice4

var X = prompt("entrez x")
for(var n=1 ; n<=10 ; n++){
    console.log( n + "*" + X + "=" + n*X  )
}

//EXERCICE5




var mot = prompt("entrez le mot")

var  voyelles = ["a","e","i","u","o","y"];

var nv = 0 


for (let i of mot.toLowerCase()){
    if(voyelles.includes(i)){
        nv++}
    }
alert(nv)

