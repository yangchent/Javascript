//EXO 1 COUNTRIES
const axios= require('axios');


axios.get("https://restcountries.eu/rest/v2/all").then((res)=> {
    
    
    var getCountries = res.data;
    const countriesName = [];
    countriesName.push(getCountries.map(getCountries => getCountries.name +'-'))  ;
     console.log(`${countriesName}`);
}
);
//EXO 2 CHUCK NORRIS

function getFact(){
axios.get("https://api.chucknorris.io/jokes/random").then ((res) => {
    var jokes= res.data;
    console.log(jokes.value);
})
}
getFact();

//EXO Pokemon
 catchPokemon= (num) => {
    axios.get("https://pokeapi.co/api/v2/pokemon/" + num).then ((res) => {
        var list = res.data;
        console.log(list.name)
});
 }
catchPokemon(1);



