var PU = parseInt(prompt("Prix d'unité"))  //Prix d'unité
var QTECOM = parseInt(prompt("Quantité commandée"))   //Quantité commandée

let TOT = (PU * QTECOM);


var REM1 = TOT * 0.05
var REM2 = TOT * 0.10
var REM = REM1 || REM2
var PORT1 = 0
var PORT2 = TOT * 0.02
var PORT = PORT1 || PORT2

if (100 <= TOT <= 200) { REM1 }

else if (TOT > 200) { REM2 }

if (TOT >= 500) { PORT1 }

else if (TOT < 500) { PORT2 }



var PAP = (TOT - REM) + PORT;

console.log("Le prix à payer est  :" + TOT)
console.log("La remise est  : " + REM)
console.log("Le port est  : " + PORT)



alert("le prix à payer :" + PAP)




var PU = Number(prompt("Saisissez le prix de votre article :"))
var QTECOM = Number(prompt("Saisissez la quantité de vos articles :"))
var PAP = 0
var TOT = PU * QTECOM

if (TOT >= 100 && TOT <= 200) {
    var resultat = (TOT * 5) / 100;
    var PAP = TOT - resultat
    alert("Le prix à payer est de : " + PAP + "€ après une remise de 5%")
    if (PAP < 500) {
        var PORT = (PAP * 2) / 100
        alert("Les frais de ports s'éleves à : " + PORT + "€")
        if (PORT < 6) {
            var resultat = (PAP + 6);
            alert("Le prix à payer avec les frais de port est de : " + resultat + "€");
        }
    }
}
else if (TOT < 100) {
    var PAP = TOT
    if (PAP < 500) {
        var PORT = (PAP * 2) / 100;
        alert(PORT)
        if (PORT < 6) {
            var resultat = (PAP + 6)
            alert("Les prix a payer avec les frais de port et sans remise est de : " + resultat + "€")
        }
    }
}
else {
    var resultat = (TOT * 10) / 100;
    var PAP = TOT - resultat;
    alert("Le prix à payer sera de : " + PAP + "€ après une remise de 10%");
    console.log("Le prix à payer sera de : " + PAP + "€ après une remise de 10%");
    if (PAP < 500) {
        var port = (PAP * 2) / 100;
        var resultatfinish = PAP + port;
        alert("Les frais de port s'élèves à : " + port + "€");
        console.log("Les frais de port s'élèves à : " + port + "€");

        if (port < 6) {
            var resultat = (TOT + 6);
            alert(resultat)
            alert("Le prix avec les frais de port sera de : " + resultat + "€");
            console.log(" Le prix avce les frais de port sera de : " + resultat + "€");
        }

        alert("Le prix à payer après frais de port sera de : " + resultatfinish + "€");
        console.log("Le prix à payer après frais de port sera de : " + resultatfinish + "€");
    }
    else {
        alert("Le prix à payer après toutes les réduction sera de : " + PAP + "€");
    }
}

// function processCommande() {
//     let PU = parseInt(document.getElementById("PU").value);
//     let QTECOM = parseInt(document.getElementById("QTECOM").value);
//     let TOT = PU * QTECOM;
//     let REM = calculeRemise(TOT);
//     let PORT = calculePort(TOT, REM);


//     let PAP = (TOT * REM) + PORT;
//     //affichage du total et de la remise 
//     document.getElementById("TOT").innerHTML = Le prix a payer est de ${PAP.toFixed(2)}€,<br>Remise: ${Math.round(((REM - 1) * 100) * -1)}%;
// }

// function calculeRemise(TOT) {

//     if (TOT >= 100 && TOT <= 200) {
//         return 0.95
//     }
//     else if (TOT > 200) {
//         return 0.90
//     } else {
//         return 1
//     }
// }

// function calculePort(TOT, REM) {
//     let PORT;
//     if (TOT * REM > 500) {
//         PORT = 0
//     }
//     else {
//         PORT = 0.02 * (TOT * REM)
//     }

//     if (PORT < 6 && PORT != 0) {
//         PORT = 6
//     }

//     return PORT;
// }

// let bouton = document.getElementById("btn_commande");

// bouton.addEventListener("click", function() {
//     processCommande();

// });