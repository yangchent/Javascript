// // 1
// var i = 50;
// while (i <= 200){
//     if (i % 2 === 0){
//         console.log(i);
//     }
//  i++;
// }

// // 2
// var dice= null,
//     count= 0;
// function random(){
//     return Math.floor(Math.random() *6);
// }    
// while (dice !==6){
//     count= random() + 1;
//     dice++;
// }
// console.log(count);

// 3
var ussainBolt = 0,
    tysonGay = 0;
 

while (ussainBolt <100 && tysonGay <100){
    var ussainrandom= Math.floor(Math.random() * 10)+1;
    var tysonGayrandom= Math.floor(Math.random() * 10)+1;
    ussainBolt += ussainrandom ;
    tysonGay += tysonGayrandom;
}
    if(tysonGay >ussainBolt){
        console.log("winner is Tyson");
    }
    else if (ussainBolt > tysonGay){
        console.log("The winner is ussain Bolt");
    }
    else {
        console.log("equal");
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