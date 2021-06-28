// // EXO 1
// const fs = require("fs");
// fs.readFile("jour07.txt" , function (err,data) {
//     if (err){
//         console.log("error");
//         return;
//     }
//     console.log(data.toString());
// });
// // EXO 2
// var array=[1, 2, 3, 4, 5];
// var double= array.map(num=> num *2);
// console.log(double);

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
var shortNames = longNames.map(function (name){
    return name.firstName + name.lastName;

}  );
console.log(shortNames);