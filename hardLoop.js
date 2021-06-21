var numbers =[];
for (var i = 0; i<= 50; i ++){
    numbers.push(Math.floor(Math.random(i)*100)  +1);
}
for (var i =0; i <= numbers.length; i++){
     var total= numbers + i;
}
console.log(total);
