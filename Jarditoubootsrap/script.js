document.getElementById("contact").addEventListener("submit", function (e) {



    var erreur;
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom")
    var sexe = document.getElementsByName("sexe")
    var naissance = document.getElementById("naissance")
    var CP = document.getElementById("CP")
    var adresse = document.getElementById("adresse")
    var ville = document.getElementById("ville")
    var email = document.getElementById("email")
    var selectt = document.getElementById("selectt")
    var question = document.getElementById("question")
    var checkm = document.getElementById("checkm")
    var accepted = document.getElementById("accepted")
    var nop = document.getElementById("nop")

    const nomFiltre = new RegExp(/^[A-Za-z]+$/);

    /*var sexecoche = false;
    for (var i = 0; i < sexe.length; i++) {
        let monoption = sexe[i];

        if (monoption.checked == true) {
            sexecoche = true;
        }
        if (monoption.checked == false) {
            document.getElementById("errsexe").textContent = ("cochez votre sex");
            erreur = true;

        }
        else {
            document.getElementById("errsexe").textContent = "";
            erreur = false
            break;
        }
    }*/

    if (nom.value == "") {
        document.getElementById("errNom").textContent = "Entrez votre vrai Nom";
        erreur = true;
    }
    else {
        if (!nomFiltre.test(nom.value)) {
            document.getElementById("errNom").textContent = "Entrez un Nom correct !";
            erreur = true;
        }
        else {
            document.getElementById("errNom").textContent = "";
        }
    };

    const prenomFiltre = nomFiltre

    if (prenom.value == "") {
        document.getElementById("errPrenom").textContent = "Entrez votre vrai Prenom";
        erreur = true;
    }
    else {
        if (!prenomFiltre.test(prenom.value)) {
            document.getElementById("errPrenom").textContent = "Entrez un Prenom correct !";
            erreur = true;
        }
        else {
            document.getElementById("errPrenom").textContent = "";
        }
    }

    if (sexe[0].checked || sexe[1].checked) {
        document.getElementById("errsexe").textContent = "";
    }
    
    else {
        document.getElementById("errsexe").textContent = "cochez votre sex";
        erreur = true
    }
    

    // console.log(sexecoche);

    if (naissance.value == "") {
        document.getElementById("errnaissance").textContent = "Sélectionnez votre date de naissance";
        erreur = true;
    }
    else {
        document.getElementById("errnaissance").textContent = "";
    };

    const CPFiltre = new RegExp(/^[0-9]{5}$/);

    // console.log(CP.value);
    if (CP.value == "") {
        document.getElementById("errCP").textContent = "Entrez votre Code postal";
        erreur = true;
    }
    else {
        if (!CPFiltre.test(CP.value)) {
            document.getElementById("errCP").textContent = "Entrez un CP correct  !";
            erreur = true;
        }
        else {
            document.getElementById("errCP").textContent = "";
        }
    }

    const EmailFiltre = new RegExp(/[\w]+@[a-z0-9]+.[a-z]{2,3}/);

    if (email.value == "") {
        document.getElementById("erremail").textContent = "Entrez votre Email";
        erreur = true;
    }
    else {
        if (!EmailFiltre.test(email.value)) {
            document.getElementById("erremail").textContent = "Entrez un Email correct !";
            erreur = true;
        }
        else {
            document.getElementById("erremail").textContent = "";
        }
    }

    if (selectt.value == "") {
        document.getElementById("errsujet").textContent = "Sélectionnez un sujet";
        erreur = true;
    }
    else {
        document.getElementById("errsujet").textContent = "";

    }

    console.log(selectt.value)



    if (checkm.checked == true) {
        document.getElementById("errcheckm").textContent = "";
    }
    else {
        document.getElementById("errcheckm").textContent = "Veuillez accepter le traitement";
        erreur = true;

    }


    console.log(erreur)


    if (erreur == true) {
        e.preventDefault();
    }















});
















//adresse ([0-9]*) ?([a-zA-Z,\. ]*) ?([0-9]{5}) ?([a-zA-Z]*)











//Fonction de validation du formulaire de contact de JardiTou
/*function Validation(contact, event) {
    //Initialisation d'un booléen qui va verifier si le formulaire est valide ou pas 
    //si il est valide, le formulaire sera envoyé
    //si il est pas valide, on restera sur la page
    let controle = true;
    //Initialisation d'une expresion régulière pour futur vérifications de valeurs
    let REGEX;

    //test si le champ Nom n'est pas rempli
    if (contact.elements['nom'].value.length == 0) {
        //retire la classe bootstrap pour rendre le champ vert
        contact.elements['nom'].classList.remove('is-valid');
        //ajout d'une classe bootstrap pour rendre le champ rouge
        contact.elements['nom'].classList.add('is-invalid');
        //formulaire invalide
        controle = false;
    }
    else //si le champ Nom est rempli
    {
        //retire la classe bootstrap pour rendre le champ rouge
        contact.elements['nom'].classList.remove('is-invalid');
        //ajout d'une classe bootstrap pour rendre le champ vert
        contact.elements['nom'].classList.add('is-valid');
    }

    //test si le champ Prénom n'est pas rempli
    if (contact.elements['prénom'].value.length == 0) {
        //ajout d'une classe bootstrap pour rendre le champ rouge
        contact.elements['prénom'].classList.remove('is-valid');
        contact.elements['prénom'].classList.add('is-invalid');
        //formulaire invalide
        controle = false;
    }
    else //si le champ Prénom est rempli
    {
        //ajout d'une classe bootstrap pour rendre le champ vert
        contact.elements['prénom'].classList.remove('is-invalid');
        contact.elements['prénom'].classList.add('is-valid');
    }

    //test si un bouton radio Sexe n'est pas sélectionné
    if (contact.elements['sexe'].value.length == 0) {
        //ajout d'une classe bootstrap pour rendre les boutons rouge
        contact.elements['feminin'].classList.remove('is-valid');
        contact.elements['feminin'].classList.add('is-invalid');
        contact.elements['masculin'].classList.remove('is-valid');
        contact.elements['masculin'].classList.add('is-invalid');
        //contact.elements['neutre'].classList.remove('is-valid');
        //contact.elements['neutre'].classList.add('is-invalid');
        //formulaire invalide
        controle = false;
    }
    else //si un bouton radio Sexe est sélectionné
    {
        //ajout d'une classe bootstrap pour rendre les boutons vert
        contact.elements['feminin'].classList.remove('is-invalid');
        contact.elements['feminin'].classList.add('is-valid');
        contact.elements['masculin'].classList.remove('is-invalid');
        contact.elements['masculin'].classList.add('is-valid');
        //contact.elements['neutre'].classList.remove('is-invalid');
        //contact.elements['neutre'].classList.add('is-valid');
    }

    //test si le champ Date de Naissance n'est pas rempli ou rempli avec une date future
    if (Date.parse(contact.elements['naissance'].value) >= Date.now() || contact.elements['naissance'].value == "") {
        //ajout d'une classe bootstrap pour rendre le champ rouge
        contact.elements['naissance'].classList.remove('is-valid');
        contact.elements['naissance'].classList.add('is-invalid');
        //formulaire invalide
        controle = false;
        //test si le champ Date de Naissance est rempli avec une date future
        if (Date.parse(contact.elements['naissance'].value) >= Date.now()) {
            //changement du texte d'erreur pour indiquer à l'utilisateur qu'il n'est pas né dans le futur
            //document.getElementById('naissance-invalid').textContent = "A part si vous êtes né dans le futur, selectionnez une date passée ;-)";
            document.getElementById('naissance-invalid').textContent = "A part si vous êtes né dans le futur, selectionnez une date passée ;-)";
        }
    }
    else //si le champ Date de Naissance est rempli avec une date antérieure à aujourd'hui
    {
        //ajout d'une classe bootstrap pour rendre le champ vert
        contact.elements['naissance'].classList.remove('is-invalid');
        contact.elements['naissance'].classList.add('is-valid');
    }

    //Mise en place de l'expression régulière pour le Code Postal
    REGEX = new RegExp("^[0-9]{5}$");
    //Test si le Code Postal ne respecte pas l'expression régulière
    if (REGEX.test(contact.elements['CP'].value) == false) {
        //ajout d'une classe bootstrap pour rendre le champ rouge
        contact.elements['CP'].classList.remove('is-valid');
        contact.elements['CP'].classList.add('is-invalid');
        //formulaire invalide
        controle = false;
    }
    else //si le Code Postal respecte l'expression régulière
    {
        //ajout d'une classe bootstrap pour rendre le champ vert
        contact.elements['CP'].classList.remove('is-invalid');
        contact.elements['CP'].classList.add('is-valid');
    }

    //Mise en place de l'expression régulière pour le mail
    REGEX = new RegExp("[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})");
    //Test si l'Email ne respecte pas l'expression régulière
    if (REGEX.test(contact.elements['email'].value) == false) {
        //ajout d'une classe bootstrap pour rendre le champ rouge
        contact.elements['email'].classList.remove('is-valid');
        contact.elements['email'].classList.add('is-invalid');
        //formulaire invalide
        controle = false;
    }
    else //si l'Email respecte l'expression régulière
    {
        //ajout d'une classe bootstrap pour rendre le champ vert
        contact.elements['email'].classList.remove('is-invalid');
        contact.elements['email'].classList.add('is-valid');
    }

    //test si un Sujet de la liste déroualante n'est pas sélectionné
    if (contact.elements['sujet'].value.length == 0) {
        //ajout d'une classe bootstrap pour rendre le champ rouge
        contact.elements['sujet'].classList.remove('is-valid');
        contact.elements['sujet'].classList.add('is-invalid');
        //formulaire invalide
        controle = false;
    }
    else //si un Sujet de la liste déroualante est sélectionné
    {
        //ajout d'une classe bootstrap pour rendre le champ vert
        contact.elements['sujet'].classList.remove('is-invalid');
        contact.elements['sujet'].classList.add('is-valid');
    }

    //test si le champ Question n'est pas rempli
    if (contact.elements['question'].value.length == 0) {
        //ajout d'une classe bootstrap pour rendre le champ rouge
        contact.elements['question'].classList.remove('is-valid');
        contact.elements['question'].classList.add('is-invalid');
        //formulaire invalide
        controle = false;
    }
    else //si le champ Question est rempli
    {
        //ajout d'une classe bootstrap pour rendre le champ vert
        contact.elements['question'].classList.remove('is-invalid');
        contact.elements['question'].classList.add('is-valid');
    }

    //test si la case J'accepte n'a pas été cochée (checkValidity, vérifie par rapport aux critères de validité écrit dans les balises HTML de l'input)
    if (!(contact.elements['accepted'].checkValidity())) {
        //ajout d'une classe bootstrap pour rendre le champ rouge
        contact.elements['accepted'].classList.remove('is-valid');
        contact.elements['accepted'].classList.add('is-invalid');
        //formulaire invalide
        controle = false;
    }
    else //si la case J'accepte a été cochée
    {
        //ajout d'une classe bootstrap pour rendre le champ vert
        contact.elements['accepted'].classList.remove('is-invalid');
        contact.elements['accepted'].classList.add('is-valid');
    }

    //vérifie si le formulaire est faux
    if (controle == false) {
        //empèche l'envoie du formulaire 
        event.preventDefault();
    }
    //retourne la fonction controle du formulaire
    return controle;
}

let contact = document.getElementById('contact');
//Ajout d'une écoute pour verifier si le formulaire est envoyé, il fera tourner la fonction Validation
contact.addEventListener("submit", function (event) { return Validation(contact, event); });*/