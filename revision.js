
//EXO 1
function sortLetters(string){

        string = string.split('');
        string = string.sort();
        string = string.join('');

   console.log(string)
    }
sortLetters("konexio");

//exo 2
function countEach(str){
    
    var array= str.split(""),
         letters= [],
         countx= 1,
         counto= 1;
    for(var i =0; i <=array.length; i++){
        if(array[i]==="o"){
           counto++;
        }
       else if(array[i]==="x"){
           countx++;
        }
        }
            if(countx===counto){
                return true;
        }
            else {
            return false
        }
}
console.log(countEach("xxxoxoo"));

//EXO 3