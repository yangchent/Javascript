const axios= require('axios');


axios.get("https://restcountries.eu/rest/v2/all").then((res)=> {
    var getCountries = res.data;
    const countriesName = getCountries.map(getCountries => getCountries.name);
     console.log(countriesName);
}
);

