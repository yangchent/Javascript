 //Exo 2 Multiply
 function multiply(num){
    for (var i = 1; i <= 10; i++){
     var  multi = num * i;
     console.log(`${num} * ${i}= ${multi}`);
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

 //Addition
 function addition(num){
    for (var i = 1; i <= 10; i++){
     var  add = num + i;
     console.log(`${num} + ${i}= ${add}`);
    }
  }
 //  console.log(process.argv);
 //  multiply(6);
 if (process.argv.length === 3){
     addition(parseInt(process.argv[2]));
 }
 else {
     console.log("Error");
 }
 //exo 3 export
 module.exports.multiply = multiply;

 module.exports.addition = addition;