USE sakila;
-- Escreva uma query que exiba apenas os sobrenomes únicos cadastrados
SELECT DISTINCT last_name FROM actor;

-- Quantos sobrenomes únicos temos na tabela
SELECT COUNT(DISTINCT last_name) FROM actor;

-- Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados , mas não mostre o idioma english
SELECT * FROM language LIMIT 5 OFFSET 1;

-- Vá até a tabela film e selecione todos os dados da tabela
SELECT * FROM language; 

-- Crie uma query para encontrar os 20 primeiros filmes , incluindo o título , o ano de lançamento , a duração , a classificação indicativa e o custo de substituição . Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição	
SELECT title, release_year, rental_duration, rating, replacement_cost FROM film
	ORDER BY rental_duration, replacement_cost 
		LIMIT 20;
   



-- Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome
SELECT * FROM actor
ORDER BY last_name ASC, first_name DESC