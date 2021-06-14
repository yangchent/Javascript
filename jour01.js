//exo 1
console.log("Hello World !");

//exo 2
var test= "My name is Yangchen";
console.log(test);

//exo 3
var name="Yangchen";
console.log("Nice to meet you" + " " + name );

//exo 4
var testLength= "I'm very long !";
console.log(testLength.length);

//exo 5
var food="croissant is meh";
console.log(food.replace('meh' , 'so good'));

//exo 6
var basic= "This is Cool";
var basicUp = basic.toUpperCase();
var basicDown= basic.toLowerCase();
console.log(basic);
console.log(basicUp);
console.log(basicDown);

//exo 7
var word = "banana";
var letters = word.split('');
console.log(letters);

//exo 8
var age="42";
var template=  `I'm ${age} years old`;
console.log(template);

//Bonus

var someText="This is a page";
console.log(someText.substr(2,6));
// is is

console.log(someText.substring(2,6));
// is i

console.log(someText.slice(2,6));
//is i
console.log(someText.slice(-5));
//page

var name='Durand';
var name1= "Nicolas";
console.log(name +" "  + name1);
//same result

var changed= "Bonjour";
console.log(changed.replace(/o/g, 'a'));