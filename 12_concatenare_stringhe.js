
var verso1 = "Ahi quanto a dir qual era è cosa dura,\n";

var verso2 = "esta selva selvaggia e aspra e forte\n";

var verso3 = "che nel pensier rinova la paura!\n";

var strofa = verso1.concat('<p>', verso2, ' ', verso3, '<p>');
var strofa1 = verso1+verso2+verso3;

//console.log da come risultato la concatenazione di una stringa e un numero
var result = 1 +'10';
console.log(result);
var result = '10' +1;
console.log(result);

//faccio il CAST sulla stringa '10' TRASFORMANDOLA in un numeero
var result = (+'10') +1;
console.log(result);

//Parsifica il numero racchiuso in una stringa in un intero...conversione MENO veloce rispetto a come sopra essendo una funzione
var result2 = parseInt('10') +1;
console.log(result2);

// console.log(strofa);
// console.log(strofa1);





