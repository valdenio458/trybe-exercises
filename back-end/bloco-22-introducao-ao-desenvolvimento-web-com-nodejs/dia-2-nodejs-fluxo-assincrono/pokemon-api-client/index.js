const axios = require('axios');

// jeito com then
const response = axios.get('https://pokeapi.co/api/v2/pokemon/3')   
    .then((response) => console.log(response.data.name));

// jeito async e await
const main = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    console.log(response.data.name);
}
main();