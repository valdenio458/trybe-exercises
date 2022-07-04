const fs = require('fs').promises;
async function getSimpons() {
  try {
      const array = await fs.readFile('./simpsons.json','utf-8')    
      return JSON.parse(array)
  } catch (error) {
      console.log('Arquivo não encontrado', error)
  }
}

module.exports = { getSimpons };