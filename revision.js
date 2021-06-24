
// //EXO 1
// function sortLetters(string){

//   //  string = string.split('');
//   //  string = string.sort();
//   //  string = string.join('');

//    console.log(string.split("").sort().join(""));
//     }
// sortLetters("konexio");

//exo 2
function countEach(str){
    
    var  countx= 0,
         counto= 0;
    for(var i =0; i <= str.length; i++){
     
      switch(str[i]){
        case "x":
          countx++;
        break;
        case "o":
          counto++;
        break;
      }
      return countx === counto
  }
        }
           
console.log(countEach("xxxxoo"));

// //EXO 3
// function checkPal(str){

//     var splitStr = str.split(""),
//     reverseStr = splitStr.reverse(),
//     joinStr = reverseStr.join('');

//     if(joinStr == str){
//         return "Palindrome! ";
//     }
//     else {
//         return "Nope";
//     }
// }
// console.log(checkPal("racecar"));

// //Exo 4
// function swap(string){
//     var upWord =[];
//     var lowWord= [];
//     for (i=0; i<string.length; i++) {
//         if (string[i] == string[i].toLowerCase()) {
//             upWord[i] = string[i].toUpperCase();
//             return lowword[i];
//         }
//         else {
//           lowWord[i] = string[i].toLowerCase();
//           return upWord[i];
//         }
//       }
//     }
// console.log(swap("Hello"));