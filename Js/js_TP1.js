/**
 *  TP 1 JS ENI 2019
 *
 *  Afficher aléatoirement les nombres compris dans 100
 */

  // Tableau qui contient les cent nombres
var ml = "\n\t";
var cent = [];
var tableau2 = [];
var text = "";

// On rempli le tableau cent de nombres de 0 à 99
for (i = 0; i < 100; i++) {
    cent[i] = i;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Ajoute le nombre aléatoire à tableau2 tant que le tableau2 a moins de 100 case
while(tableau2.length < 100 )
{

    // Nombre aléatoire
    let nombreAleatoire = getRandomInt(100);

    //Si le nombre aléatoire n'appartient pas au tableau2 on l'y ajoute
    if (tableau2.indexOf(nombreAleatoire) < 0) //Si le retour est -1 on l'ajoute
    {
        tableau2.push(nombreAleatoire);//ajoute le nombre aléatoire au tableau
    }

}


//Affiche la taille de cent[]
console.log(ml + "Taille de cent = %i", cent.length)

//affiche le contenu du tableau2
for(let pas of tableau2)
{
    console.log(ml+"boucle foreach donne " + pas);
}


