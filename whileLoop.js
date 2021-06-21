// 1
var i = 50;
while (i <= 200){
    if (i % 2 === 0){
        console.log(i);
    }
 i++;
}

// 2
var dice= null,
    count= 0;
function random(){
    return Math.floor(Math.random() *6);
}    
while (dice !==6){
    count= random() + 1;
    dice++;
}
console.log(count);

// 3
var ussainBolt = 0,
    tysonGay = 0;
 var random= Math.floor(Math.random() * 10);

while (ussainBolt <=100 || tysonGay <=100){
    ussainBolt += random;
    tysonGay += random;
    if(tysonGay >= 100){
        console.log("winner is Ussain Bolt");
    }
    else if (ussainBolt >= 100){
        console.log("The winner is Tyson Gay");
    }
    tysonGay++;
    ussainBolt++;

}
//Exo 4
//5
//2
//5
//-8

//Exo 5
//8
//9
//10
//11