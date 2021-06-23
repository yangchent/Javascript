var numbers =[];
for (var i = 0; i<= 50; i ++){
    numbers.push(Math.floor(Math.random(i)*100)  +1);
}
for (var i =0; i <= numbers.length; i++){
     var total= numbers + i;
}
console.log(total);

//Exo 2
myNum = [];
for (var i =0; i<= 50; i ++){
 myNum.push(Math.floor(Math.random(i)*(200-50 + 1)+50));
}
console.log(myNum);//checking
 var maxNum = 0;
    for (let i = 1; i < 50; i++) {
      if (myNum[i] > maxNum) {
        maxNum = myNum[i];
      }
 }
 console.log(maxNum);

 //EXO 3
 var numbers =[];
for (var i = 0; i <= 50; i++){
    numbers.push(Math.floor(Math.random(i)*(200-50 + 1)+50));
}
var i = 0;
while( i <=50){
    if(numbers[i] >= 75 && numbers[i]<= 100){
        console.log(numbers[i]);
    }
    i++;
 }
//EXO 4
var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
var letters= [];
var count = 0;
for (var i = 0; i <= words.length -1; i++){
     letters= words[i].split(" ").join("");
     for(var a = 0; a < words.length  ; a++){
        if(letters[a]=='o'){
            count++;
     }
  }
}
console.log(count)
