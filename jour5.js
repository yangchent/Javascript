//Exo 1
function calculator(num1,operateur,num2){
    console.log(num1, operateur, num2);
    if (operateur === "+" ) {
        console.log(num1 + num2);
    }
    else if(operateur== "-"){
        console.log(num1 - num2);
    }
    if (operateur === "*"){
        console.log(num1 * num2);
    }
    else if(operateur=== "/"){
        console.log(num1 % num2);
    }
}
if (process.argv.length === 5){
    calculator(parseInt(process.argv[2]),process.argv[3],parseInt(process.argv[4]));
}
else {
    console.log("Error");
}

// calculator(4 ,"*", 5);
// console.log(process.argv)

//EXO 3 to import function in table-utiles.js
 var multiplier= require('./table-utile');
 
//EXO 4
var mysteryNum = Math.floor(Math.random() * 100 + 1);
function play(){
}