/**
 *  TP 1 JS ENI 2019
 *
 *  Afficher aléatoirement les nombres compris dans 100
 */

  // Tableau qui contient les cent nombres
var cent = [];
var tableau2 = [];
var text = "";
var i;
for (i = 0; i < 100; i++) {
    cent[i] = i;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
// Nombre aléatoire
var nombreAleatoire = getRandomInt(100);

//Si le nombre n'appartient pas au tableau2 à afficher on l'ajoute
for(i=0; i<cent.length; i++)
{
    if(cent[i] == nombreAleatoire)
    {
        tableau2.push(nombreAleatoire);
    }
}

//affiche le contenu du tableau2
for(let pas of tableau2)
{
    console.log(pas);
}


