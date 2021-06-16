//exo1
var integer= 102;
var float= 13.9;
console.log(integer);
console.log(float);

//exo2
var basic=34;
var stringified= basic.toString();
console.log(stringified);

//exo3
var num=1.5;
var rounded=Math.round(num);
console.log(rounded);

//exo4
var test=12;
var bis= 5;
console.log(test + bis);//17
console.log(test - bis);//7
console.log(test * bis);//60
console.log(test/bis);//2.4
console.log(test % bis);//2
console.log(test** bis);//248832

//exo5
var test=143;
var bis=219;
console.log(test>bis);//false
console.log(test<bis);//true
console.log(test>=bis);//false
console.log(test<=bis);//true
console.log(test==bis);//false
console.log(test===bis);//false
console.log(test!=bis);//true
console.log(test!==bis);//true

//exo6
var limit= 50;
var score=  64;
if (score >= limit) { 
    console.log("ok good")
}
else {
    console.log("Oh nooo...")
    }

//exo7
var password= "azerty";
if (password.length>5) {
    console.log("The password is secure")
}

//exo8
if (score>= limit && password.length>5){
    console.log("Everything is good")
}
else if(score>=limit || password.length>5) {
    console.log("Something is good")
}
else {
    console.log("Nothing is good")
}

//Bonus
var random= [1, 2, 3, 4, 5, 6];
if (random===6){
    console.log("Yes I win")
}
else {
    console.log("So close...")
}

//Bonus2
var month= "January";
switch(month)
{
    case "January" :
        console.log("winter");
    break;
    case "March" :
        console.log("Spring") ;
    break;     
    case "june":
        console.log("summer")
    break;
    case "September":
        console.log("Fall")
     break;   
    default:
        console.log("Its not a name of month");
}

//Bonus3
var roundedNumber=3.3;
console.log(Math.floor(roundedNumber));//3
console.log(Math.ceil(roundedNumber));//4

if (roundedNumber>3.5) {
    console.log(4);
}
else {
    console.log(3);
}
//ne march pas avec 12.4 mais d'autre

var aNumber=roundedNumber.toString();
console.log(aNumber.substring(0, 1));

/*//CORRECTION BONUS1
var random= Math.floor(Math.random()*(6-1+1)+1);
if (random === 6){
    console.log("yes i win");
}
else {
    console.log("So close");
}

//Bonus3 CORRECTION
var roundedNumber =3.6

if (((roundedNumber- Math.floor(roundedNumber))*10)>= 5){
    console.log(Math.ceil(roundedNumber))
}
else 
{
    console.log(Math.floor(roundedNumber));
}
////or Bonus 3

if (roundedNumber % 1 >= 0.5){

console.log(Math.ceil(roundedNumber))
}
else 
{
    console.log(Math.floor(roundedNumber));
}*/