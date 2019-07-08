/**
 *  TP 1 JS ENI 2019
 *
 *  Afficher aléatoirement les nombres compris dans 100
 */

  // Tableau qui contient les cent nombres
var ml = "\n\t";
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