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

    