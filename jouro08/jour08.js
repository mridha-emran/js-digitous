var axios = require('axios');

// var countriesNames=[]
//  function getCountries (){
//     axios.get("https://restcountries.eu/rest/v2/all").then(function (res,data) {
// 		var result = res.data
        
//     countriesNames=result.map(function(mun){
//         return mun.name
//     })
//     console.log(countriesNames.join(" - "))
// });
// } 
// getCountries()
// function getfact(){
//     axios.get("https://api.chucknorris.io/jokes/random").then(function(res,data){
//         var result=res.data;
        
//         console.log(result.value)
//     })
// }
// getfact()

function catchpokemon(id){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(function(res,data){
        var result=res.data;

        console.log(result.name)
    })
}
catchpokemon(32)