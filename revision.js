
//EXO 1
function sortLetters(string){

  //  string = string.split('');
  //  string = string.sort();
  //  string = string.join('');

   console.log(string.split("").sort().join(""));
    }
sortLetters("konexio");

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

 //EXO 3
function checkPal(str){

    var splitStr = str.split(""),
        reverseStr = splitStr.reverse(),
        joinStr = reverseStr.join('');

    if(joinStr == str){
        return "Palindrome! ";
    }
    else {
        return "Nope";
    }
}
console.log(checkPal("laptop"));

//correction Exo 3  
function checkPal(str){
  return str.split("").reverse().join("") ==str;}
  console.log(checkPal("racecar"));
//Exo 4
var word= [];
function swap(string){
  
    for (var i=0; i<string.length; i++) {
        if (string[i] == string[i].toLowerCase()) {
            word.push(string[i].toUpperCase());
            return word;
        }
        else if (string[i] == string[i].toUpperCase()){
          word.push(string[i].toLowerCase());
          return word;
        }
      }
    }
console.log(swap("Hello World"));
//correction
var word ="";
function swap(string){
  for (var i =0; i< string.length; i ++){
    if (string[i] == string[i].toUpperCase()) {
       word += string[i].toLowerCase();
  }
  else if(string[i] == string[i].toLowerCase()) {
   word += string[i].toUpperCase();
  }
  }
    return word;
}
console.log(swap("Hello World"));