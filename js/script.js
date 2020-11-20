
//Permet de charger le document pour pouvoir accéder au JavaScript//
document.addEventListener("DOMContentLoaded", function(event) {


    //l'objet Le jeu
    //class qui contient tout les actions possible du jeu
    // la fonction constructor permet d'initialiser le jeu
    class Jeu{
        constructor() {
            console.log("Création du jeu");
        }

    }

    //L'objet Le serpent
    //class qui contient tout les actions possible du serpent
    // la fonction constructor permet d'initialiser le serpent
    class Serpent{
        constructor(){
            console.log("Création du serpent");
    }
    }

    //L'objet La pomme
    //class qui contient tout les actions possible de la pomme
    // la fonction constructor permet d'initialiser la pomme
    class Pomme{
        constructor(){
            console.log("Création de la pomme");
        }
    }


    var unePartie = new Jeu();

});