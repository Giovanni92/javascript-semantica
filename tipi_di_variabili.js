
//Nei contesti a tipizzazione dinamica forte, i valori assegnati alle variabili hanno dei tipi ben definiti, mentre in contesti di tipizzazione dinamica debole,
// le variabili possono riferirsi a valori di qualsiasi tipo, che possono cambiare dinamicamente in seguito a manipolazioni esterne.



var test; 
//undefined value
console.log(test);

//string value
test='Nome';
console.log(test + '=>'+ typeof test); 

//number value
test= 42;
console.log(test + '=>'+ typeof test); 

//array value (object)
test =[2,3,88];
console.log(test + '=>'+ typeof test); 

//object value
test = {};
console.log(test + '=>'+ typeof test); 

//object value
test = {name:'Giovanni', lastname:'Desiderio'};
console.log(test.name+',' +test.lastname +' => '+ typeof test); 

//function value
test = function(){
    return "test";
}
console.log(test + '=>'+ typeof test); 
console.log(test() + '=>'+ typeof test); 

//boolean value
test= false;
console.log(test + '=>'+ typeof test); 

