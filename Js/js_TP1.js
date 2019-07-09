/**
 *  TP 1 JS ENI 2019
 *
 *  Auteur: Marc
 */

/**  Question 3 :
 *   Mettre en majuscule la première lettre de chaque mot de la phrase.
 *   var chaine = "une phrase sans majuscule";
 */

var ml = "\n\t";
var chaine_2 = "une phrase sans majuscule";
function capital_letter(str)
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(ml + capital_letter(chaine_2));


var chaine_3 = "UNE PHRASE TOUT EN MAJUSCULE";
function toutEnMinusculeSaufLaPremiereLettre(phrase){
    var string1 = chaine_3[0] + chaine_3.substring(1).toLowerCase();
   	return string1;
}
console.log("Toute la phrase en minuscule sauf la première lettre:")
console.log(ml + toutEnMinusculeSaufLaPremiereLettre(chaine_3))



/**
 * Trier les lettres de la phrase par ordre alphabétique.
 *   var chaine ="une chaine avec des lettres dans un certain ordre pour donner du sens";
 */

   var chaine ="une chaine avec des lettres dans un certain ordre pour donner du sens";

    function trieur(str)
    {
        return str.split('').sort().join('');
    }
    console.log(trieur(chaine));


 /**
 *  Afficher aléatoirement les nombres compris dans 100
 */
// Tableau qui contient les cent nombres

var cent = [];
var tableau2 = [];
var nbreRandom = 0;

// On rempli le tableau cent de nombres de 0 à 99
for (i = 0; i < 100; i++) {
    cent[i] = i;
}

function getRandomInt(max) {
    //Si le nombre aléatoire n'appartient pas au tableau2 on l'y ajoute
    nbreRandom++;
    return Math.floor(Math.random() * Math.floor(max));

}

//Tant que le tableau 2 n'a pas atteint 100 cases on lui ajoute un nombre aléatoire
while(tableau2.length < 100 )
{
    // Crée un nombre aléatoire
    let nombreAleatoire = getRandomInt(100);

    //Si le nombre aléatoire ne fait pas partie du tableau 2 on l'ajoute au tableau 2
    if (tableau2.indexOf(nombreAleatoire) < 0) //Si le retour est -1 on l'ajoute
    {
        tableau2.push(nombreAleatoire);//ajoute le nombre aléatoire au tableau
    }
}

console.log(tableau2.toString());
console.log(ml + "Nombre de random = " + nbreRandom);