// 1
var total =0;
for ( var i = 5; i <= 10; i ++){
    total += i * i;
}
console.log(total);

// 2
var sum= 0;
for ( i = 100; i <= 1000; i ++){
    sum += i% 7 === 0;
}
console.log(sum);

// 3
var overAll = 0;
 function roll(){
    return Math.floor(Math.random() * 6);
 }
 
for (var i= 1; i <= 20; i ++){
    var dice = roll();

    if( i >= 5) {
        overAll = dice + i;
    }
}

console.log(overAll);

// EXO 4
//10
//34
//box1 = 17;
//box2 = 30;
//i = 14;


//EXO 5
//24
//33
//39
//42
// box1= 42
// i = 0

//EXO 6
//0
//3
//-3
//2
//box1= -2
//box2= 5
//i = -4