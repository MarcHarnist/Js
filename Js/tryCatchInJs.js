/**
 * Try and catch
 */
var t = "\t";

try {
	var phrase = "une phrase avec des consonnes et des voyelles"
	var compteurVoyelles = 0;
    var nombreA = 0;
    var nombreE = 0;

    if(estVoyelle(phrase)){

        console.log("Il y a %i voyelles ", compteurVoyelles);
        console.log("Il y a %i a ", nombreA);
        console.log("Il y a %i e  ", nombreE);
        console.log(uneErreur);

    }




} catch (e) {
	console.log("1. Une erreur est survenue.");

}
console.log("Fin du traitement.")

function estVoyelle() {
    var estVoyelle = false;
    if(lettre != undefined && "aeiouy".indexOf(lettre) >= 0){
        estVoyelle = true;
    }
    return estVoyelle;
}