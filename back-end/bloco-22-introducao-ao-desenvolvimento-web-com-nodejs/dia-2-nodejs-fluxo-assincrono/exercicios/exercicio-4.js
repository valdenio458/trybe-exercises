const fs = require('fs');

fs.promises.readFile('./simpsons.json', 'utf-8')
.then(fileContent => {console.log(
    JSON.parse(fileContent)[0].id,
    ' - ',
    JSON.parse(fileContent)[0].name
    )})
.catch(err => {
    console.log(err.message);
    process.exit(1) // encerra o processo
});

const simpsonsData = (id) => {
    fs.promises.readFile('./simpsons.json', 'utf-8')
    .then((content) => {
        const data = JSON.parse(content);
        const filterData = data.filter((elem) => elem.id === id.toString());
        if (filterData.length === 0) {
            throw new Error('id não encontrado')
        }
        return console.log(filterData);
    })    
}
simpsonsData('4');