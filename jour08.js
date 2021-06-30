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

// // To study :
// axios.get("https://pokeapi.co/api/v2/pokemon/").then(function (res) {
//     const pokemonData = res.data; 
//     const pokemonList = pokemonData.results
//     const pokemonName = pokemonList.map(pokemon => pokemon.name); 
//     function catchPokemon(num1) {
//         console.log("id :", num1);
//         console.log("name :", pokemonName[num1]);
//     }
//     catchPokemon (6)
// });
var player = 0;
for (i = Math.floor(Math.random()* (10 - 1) + 1); i <21 ; i++){
    player += i;
}
    

var bank= Math.floor(Math.random()* (21 - 16) + 16);
