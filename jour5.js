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
const { get } = require("prompt");

//EXO 4
var prompt = require("prompt");

 var mysteryNum = Math.floor(Math.random() * 100 + 1);
  function play() {
    prompt.get({
        name : "userNum",
     description: "Quel est le nombre mystère ?",
    },
     function (err,res){
        if (err){
            return onErr(err);
        }
        else if (res.userNum<1||res.userNum>100){
            console.log("Give me number between 1 and 100");
            play();
        }
        else if(res.userNum < mysteryNum){
            console.log("C'est plus !");
            play();
        }
        else if (res.userNum > mysteryNum){
            console.log("C'est moins !");
            play();
        }
        else if (res.userNum ==mysteryNum){
            console.log("Bravo !!");
        }
     }
    )
  };
  play();