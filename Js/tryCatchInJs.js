/**
 * Try and catch
 */
var t = "\t";

var phrase = "une phrase avec des consonnes et des voyelles";
var compteurVoyelles = 0;
var nombreA = 0;
var nombreE = 0;
try {
    console.log(phrase);
    console.log(estVoyelle(phrase));
    /**
    if(estVoyelle(phrase)){

        for(let lettre of phrase){
            compteurVoyelles++;
            switch(lettre){
                case 'a':
                    nombreA++;
                    break;
                case 'e':
                    nombreE++
                    break;
            }
        }
        console.log("Il y a %i voyelles ", compteurVoyelles);
        console.log("Il y a %i a ", nombreA);
        console.log("Il y a %i e  ", nombreE);

        //  console.log(uneErreur);

    }
    */
}
catch (e)
{
    console.log("1. Une erreur est survenue.");

}


  
console.log("Fin du traitement.")

function estVoyelle(phrase) {
    console.log(voy)
    var retour = false;
    /*
    if(lettre != undefined && "aeiouy".indexOf(lettre) >= 0){
        console.log(phrase)
        estVoyelle = true;
    }
    */

    return retour;



}