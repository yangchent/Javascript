//EXO 1 FORMAT

function formatDate(a){

     a = new Date(a);
    const date = a.getDate();
    const monthName = a.getMonth()+1;
    const year = a.getFullYear();

    console.log(date + '/' + monthName + '/' + year);
}
formatDate("2021/03/11");

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

prompt.start();  // démarre le prompt

function onErr(err) { // permet de gérer les erreurs
  console.log(err);
  return;
}

prompt.get([{
    name : "Username", 
    description : "Name",
    validator : /^[a-zA-Z\s\-]+$/gi,
},
{
    name : "e-mail",
    description : "e-mail",
    validator: /[a-z@A-Z1-9-_]/gi,
},
{
    name : "password",
    description : "Password",
    validator : /[a-z@A-Z1-9-_]/gi
}
]
    , 
    function (err, res) {  // demande à obtenir les propriétés "username" et "email"
  if (err) {
		return onErr(err);
	}

  console.log("Données reçues :");
  console.log("=> Username : " + res.username); // affiche le résultat pour la propriété "username"
  console.log("=> Email : " + res.email); // affiche le résultat pour la propriété "email"
});


