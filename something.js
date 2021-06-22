//10
//17
//34
//30
//17
//30
//14
//exo (5)
//12
//24
//33
//39
//42
//0
//exo 6
//0
//box2= 4
//3
//box1 -1
//i =-2
//-3
//box2=5
//2
//box1-2
//box2 5
// -4
var i = 50;
while (i<=200){
    console.log(i);
    i+= 2;
}

//3
var ussainBolt= 0,
    tysonGay = 0;
    
while (ussainBolt <100 && tysonGay <100){
    ussainBolt+= Math.floor(Math.random()* 10)+1 ;
    tysonGay+= Math.floor(Math.random()* 10)+1 ;
    console.log(ussainBolt, tysonGay);
}
if (ussainBolt>tysonGay){
    console.log("winner is ussainBolt");
}
else if(tysonGay>ussainBolt){
    console.log("winner is tyson");
}
else {
    console.log("they are equal");
}


