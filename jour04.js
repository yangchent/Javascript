// Exo 1 - Object
var cat = {
    name : "Garfield",
     age : 3,
     isCute : true,
}
console.log(cat);
console.log(cat.age);
if (cat.isCute === true){
    console.log("So cute !");
}

//Exo 2 - Combine
var cat2 = {
    name : "Billy",
    age : 4,
    isCute : false,
}
var cats = [ cat , cat2 ];
console.log(cats[0].age);
console.log(cats[1].isCute);

// Exo 3 - Even
function checkIfEven(num){
    if (num % 2 ===0){
    console.log("Even");
    }
    else if(num % 2 !== 0){
    console.log("odd");
    }
}
checkIfEven(5);
checkIfEven(10);

//Exo 4 - Compare
function compare(num1,num2){
    if (num1 > num2){
        console.log("num1 is bigger");
    }
    else if(num1 < num2){
        console.log("num2 is bigger");
    }
    else {
        console.log("both are the same");
    }
}
compare(34,5);
compare(7,89);
compare(5,5);

//Exo 5 - Add up
function addUp(num){
    var numAdd=0;
     for( var i = 0; i<=num; i++){
         numAdd= numAdd +i ;
     }
     return numAdd
}
console.log(addUp(12));

//Exo 6- Time

function format(num) 
{
    var h = Math.floor(num / 3600);
    var m = Math.floor(num % 3600 / 60);
    var s = Math.floor(num % 3600 % 60);

    return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
}
console.log(format(3700));

//Bonus
var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        retVal = "";
function generatePassword(num) {
    
        if (num < 6 || num > 15){
            console.log("error");
        }
        else{
    for (var i = 0; i < num; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return retVal;
}
}
console.log(generatePassword(12));

// Bonus using charCode not working
var charset = String.fromCharCode(65,90),
        retVal = "";
function generatePassword(num) {
    
        if (num < 6 || num > 15){
            console.log("error");
        }
        else{
    for (var i = 0; i < num; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return retVal;
}
}
console.log(generatePassword(12));
