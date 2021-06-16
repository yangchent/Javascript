//exo1-Array
var fruits =["mango", "Lemon", "bluebery"];
console.log(fruits);

//exo2-Access
var ingredients= ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

//exo3
var objects=["pen", "book","lamp"];

objects.unshift("chair");
console.log(objects);

objects.pop();
console.log(ingredients);

objects.push("laptop");
console.log(objects);

objects.shift();
console.log(objects);

//exo 4 - Order
var numbers=[4, 10, 8, 12, 6];

console.log(numbers.reverse());
console.log(numbers.sort((a, b) => a - b));

//exo 5 - Boucle
var total= 0;
var limit= 10;

for(var i= 0; i<=limit; i++){
    total = total + i;
}
console.log(total);

//exo 6- REverse
var sentence = "Hello Konexio!";
var tabSentence = sentence.split('');
var revSentence = [];

for (var i =0; i < tabSentence.length; i++) {
    revSentence.unshift(tabSentence[i]);
}
console.log(revSentence.join(""));

 //Bonus
 for(var i=0; i<100; i++){
     if( i % 3 === 0){
         console.log("fizz");
     }
 else if (i % 5 === 0){
     console.log("buzz");
     }
    if(i % 3 === 0 && i % 5 === 0){
    console.log("fizzbuzz");
    }
 else if(i % 7 === 0){
    continue;
}
}

//Bonus 2
var total= 0;
var limit= 10;
var i = 0;

while (i<limit) { 
    i++
    total = total + i
    console.log(total);
}

//Bonus 3
var promo = ["Amar", "Andy", "Ange", "Anthony", "Artha",
 "Barry", "Baydir", "Eliot", "Elodie", "Julien", "Kevin", 
 "Laura", "Mridha", "Mohamed", "Rahmad", "Victor"," Yangchen"];

 var winner = promo[Math.floor(Math.random() * promo.length)];

 console.log("And the winner is :", winner);

//Bonus