
document.addEventListener('DOMContentLoaded', function(){   
   
    var progLanguages = ['C', 'C++', 'JAVA', 'PHYTON', 'SWIFT', 'PHP', 'C SHARP'];
var cont = 0; 
totLang = progLanguages.length;
var formID = document.getElementById('idDati');
var htmlContent = ''; 
for (; cont < totLang; cont++){ 
htmlContent += '<div><input type="checkbox" value='+progLanguages[cont]+'">'+progLanguages[cont] +'</div>'; 
}
console.log(htmlContent);
formID.innerHTML = htmlContent; 
});


var nascosta='variabile inutilizzata';