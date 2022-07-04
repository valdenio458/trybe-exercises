const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
{ id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
{ id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
{ id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco de acerola 300ml', price: 4.0 },
  { id: 4, name: 'Heineken', price: 16.0 },
  { id: 5, name: 'Cerveja Long Neck', price: 9.0 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const languages = ['HTML', 'CSS', 'JavaScript', 'React'];

//* RECIPES:

app.get('/recipes', function (_req, res) {
return res.status(200).json(recipes);
});

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));
  res.status(200).json(filteredRecipes);
});
app.get('/recipes/:id', function (req, res) {
const { id } = req.params;
const recipe = recipes.find((elem) => elem.id === parseInt(id));

if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

return res.status(200).json(recipe);
});

app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

//...

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

//...


//*DRINKS:

app.get('/drinks', function (_req, res) {
  return res.status(200).json(drinks)
});

app.get('/drinks/search', function (req, res) {
  const { name } = req.query;
  const filteredRecipes = drinks.filter((r) => r.name.includes(name) );
  res.status(200).json(filteredRecipes);
});

app.get('/drinks/:id', function (req, res) {
    const { id } = req.params;
    const drink = drinks.find((elem) => elem.id === parseInt(id));

    if (!drink) return res.status(404).json({ message: 'Recipe not found!'});

    return res.status(200).json(drink)
});

app.post('/drinks', (req, res) => {
  const { name } = req.body;
  drinks.push(name);
  res.send(`Bebida ${name} adicionada com sucesso!`);
});

app.put('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const { name } = req.body;
  const drinksIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (drinksIndex === -1) return res.status(404).json({ message: 'Drink not found!' });

  drinks[drinksIndex] = { ...drinks[drinksIndex], name };

  res.status(204).end();
});

app.delete('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'drink not found!' });

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
});

//* LANGUAGES:
app.get('/languages', (req, res) => {
  return res.status(200).json(languages);
});

app.post('/languages', (req, res) => {
  const { name } = req.body;
  languages.push(name);
  res.send(`Linguagem ${name} adicionada com sucesso!`);
});

//* REQUISIÇÂO PARA ROTA QUE NÂO EXISTE:
app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

//* RODAR A APLICAÇÂO:
app.listen(3001, () => {
  console.log('Aplicação rodando na porta 3001!');
});