
var nome = "Giovanni";
var cognome = 'Desiderio';
//i backslash permettono di includere virgolette nella variabile
var indirizzo = "Via \"de Santis\"";
var indirizzo2 = 'Via del "sole rinascente"' 

//paragrafo poco chiaro 
var note = "\
cbjabcjsb\
asjnsckab\
ajbckajb\
\
";

//concatenando stringa paragrafo(più leggibile)
//t sta per tabulazione
//r per riga (row)
var note2 = "ancjiajnckas\t\t\n"+
            "\tacjlaknxklna\r\n" + 
            "\tkcnklnacnka\r\n";

//include carattere unicode per potere usare simboli speciali (es.caratteri cinesi)
var note3 ="\u0041"

/*
console.log(nome);
console.log(cognome);
console.log(indirizzo);
console.log(indirizzo2);
console.log(note2);
*/

console.log(note3);

