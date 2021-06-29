// EXO 1
const fs = require("fs");
fs.readFile("jour07.txt" , function (err,data) {
    if (err){
        console.log("error");
        return;
    }
    console.log(data.toString());
});

// EXO 2
var array=[1, 2, 3, 4, 5];
var double= array.map(num=> num *2);
console.log(double);

//EXO 3
var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];
var shortNames = longNames.map(function(name){
    // return {name : name.firstName +  name.lastName};
	return {name :` ${name.firstName} ${name.lastName}` };
});
    console.log(shortNames);


//EXO 4
var array= [1,"foo", 34, "javascript", 8];
var numbers = array.filter(Number);

    console.log(numbers);

//EXO 5
var numbers = [1, 2, 3, 4, 5, 6, 7, 8],
    even = numbers.filter(num => num % 2 == 0);
    console.log(even);

//EXO 6
var cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
];
var soldOut= cakes.filter(cake => cake.flavor === "chocolate" );
var  chocolateFlavor= soldOut.map(a => a.status = "sold out !")
;
console.log(soldOut);


//bonus
var prompt= require("prompt")
    

