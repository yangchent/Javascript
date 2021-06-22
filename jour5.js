// //Exo 1
// function calculator(num1,operateur,num2){
//     console.log(num1, operateur, num2);
//     if (operateur === "+" ) {
//         console.log(num1 + num2);
//     }
//     else if(operateur== "-"){
//         console.log(num1 - num2);
//     }
//     if (operateur === "*"){
//         console.log(num1 * num2);
//     }
//     else if(operateur=== "/"){
//         console.log(num1 % num2);
//     }
// }
// calculator(4 ,"*", 5);
// console.log(process.argv);
//  calculator(parseInt(process.argv[2]),process.argv[3],parseInt(process.argv[4]));

 //Exo 2
 function multiply(num){
   for (var i = 1; i <= 10; i++){
    var  multi = num * i;
    console.log(multi);
   }
 }
//  console.log(process.argv);
//  multiply(6);
if (process.argv.length === 3){
    multiply(process.argv[2]);
}
else {
    console.log("Error");
}
 

 //EXO 3
