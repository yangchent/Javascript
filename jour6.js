//EXO 1 FORMAT

function formatDate(a){

     a = new Date(a);
    const date = a.getDate();
    const monthName = a.getMonth();
    const year = a.getFullYear();

    console.log(date + '/' + monthName +1 + '/' + year);
}
formatDate("2021/03/11");

//correction exo 1
function formatDate(string){
  let date= new Date(string);
 console.log(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)

}
formatDate("2001/10/17");

//Exo 2 AGE
function calculateAge(str){

    var a = new Date(str);
    console.log(a)

    console.log(new Date())
    
    var year = new Date(new 
        Date -a); 
    console.log(year);
    console.log(year.getFullYear()-1970)
}
calculateAge("1985-11-24");

//Exo 2 AGE Simple way
function calculateAge(str){
     
    var a = new Date(),
       yearNow= a.getFullYear(),
       monthNow= a.getMonth()+1,
       dateNow= a.getDate();

    var b= new Date(str),
        yearB= b.getFullYear(str),
        monthB= b.getMonth(str)+1,
        dateB= b.getDate(str);

      var age= 0;  
    if(monthNow > monthB){
      age =yearNow- yearB;
    } 
    else if(monthNow == monthB){
     
      if(dateNow>= dateB){
        age = yearNow - yearB;
      }
      else {
        age = yearNow - yearB - 1;
      }
    }
    else {
      age = yearNow- yearB -1;
    }
    console.log(age) ;
}
calculateAge("1985-11-24");

//Exo 3 VALIDATOR

var prompt = require("prompt");

function checkProfile() { 

  var properties= [{
    name : "Username", 
    validator : /([a-zA-Z\s\-]+)/gi,
  },
  {
    name : "e-mail",
    validator: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
  },
  {
    name : "password",
    validator : /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]/i
  }];

prompt.start(); 
    function onErr(err) { 
        console.log(err);
        return 1;
    }
    prompt.get(properties, function (err, res) {
        if (err) {
            return onErr(err);
        }
        console.log("All good !!");
    });
}
checkProfile();


