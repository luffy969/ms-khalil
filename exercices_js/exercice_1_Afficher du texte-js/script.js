var nom = prompt("saisissez votre nom ");
var prenom = prompt("saisissez votre prénom");

if (confirm ("étes vous un homme ?") == true){
    alert("Bonjour monsieur " + nom +" "+ prenom + "\nBienvenu dans notre site web !");
}
else{
    alert("Bonjour madame " + nom + " "+ prenom +"\nBienvenu dans notre site web !");
}
