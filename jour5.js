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
