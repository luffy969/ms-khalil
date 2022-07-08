//ex1
/* var latailledutab = prompt("definissez la taille du tableau")

 var mytableau = [latailledutab];

for(let i=1 ; i<latailledutab ; i++)
{
    mytableau.push(prompt("entrez des valeurs"));
}

console.log(mytableau)*/

//ex2

function afficheTab ()
{ 
    alert(postes);
}

function getInterger(str) {
    return Number(prompt(str));
}

function saisieTab(tableau, taille) {
    for(let i = 0; i < taille; i++) {
        tableau.push(getInterger("Entrez un nombre entier :"));
    }

    return tableau;
}

function rechercheTab() {
    alert(postes[getInterger("Numero de poste :")]);
}

function initTab()
{
    let taille = getInterger("Taille du tableau :");

    let arr = [taille];

    return saisieTab(arr, taille);
}

function infoTab()
{
    alert("Maximum : " + Math.max(...postes));
  
    let somme = 0;

    for(const nb of postes){
        somme += nb;
    }

    alert("Moyenne : " + somme/postes.length);


}

let postes = initTab();

let input = "";

while(input != "quitter"){
    input = prompt("1.Afficher tous les postes\n2.Afficher un poste par l'index\n3.afficher le maximum et la moyenne des postes\nquitter pour quitter").toLowerCase();

    switch(input) {
        case "1":
            afficheTab();
            continue;
        break;

        case "2":
            rechercheTab();
            continue;
        break;

        case "3":
            infoTab();
            continue;
        break;

        case "quitter":
        break;

        default:
            alert("Entrez une valeur valide");
            continue;
    }

    break;
}



/*
//ex2 v1
var postes = [10]

function afiichetab ()
{ 
    console.log(postes)
};

function inittab()
{
 postes.unshift(Number(prompt("rajoute")));
 console.log(postes)
};

function infotab ()
{

    console.log(Math.max(...postes))

    
        let somme = 0; 
        for(let i=0; i<postes.length; i++){
          somme = somme + postes[i];
        }
        let result = somme/postes.length;
    console.log(result)


};

afiichetab();

inittab();

infotab();

*/
