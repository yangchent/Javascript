// Exo 1
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

//Exo 2
var cat2 = {
    name : "Billy",
    age : 4,
    isCute : false,
}
var cats = [ cat , cat2 ];
console.log(cats[0].age);
console.log(cats[1].isCute);

// Exo 3
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
