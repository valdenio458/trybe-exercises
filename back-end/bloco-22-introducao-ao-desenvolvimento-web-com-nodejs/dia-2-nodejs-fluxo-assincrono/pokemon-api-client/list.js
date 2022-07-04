const axios = require('axios');

const getPokemonById = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(response.data.name);     
}
for (let i =1; i <= 10; i++){
    getPokemonById(i)
}