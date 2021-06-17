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

