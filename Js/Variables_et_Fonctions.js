/**
 *  Hello World
 *
 * */

var n = 2;
var n2 = doubler(n);

function doubler(param1) {
    var inside = "Hello world"
    return param1 * 2;
}
var tab = "\n\t";
console.log(tab + 'Le double de %i est %i', n, n2);
console.log(tab + 'var inside')
console.log(tab + "n  ==  %i", n)
console.log(tab + n)

var n10 = 2;
var n11 = 7;
var div =  n10/n11;

console.log(tab + '%i divisé par %i = %f', n10, n11, div);


