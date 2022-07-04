-- 1) Monte um query que exiba:

-- A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
SELECT ROUND(AVG(length),2) 'Média de Duração' FROM sakila.film; 
-- A duração mínima dos filmes como 'Duração Mínima';
SELECT ROUND(MIN(length),2) 'Duração Mínima' FROM sakila.film;
-- A duração máxima dos filmes como 'Duração Máxima';
SELECT ROUND(MAX(length),2) 'Duração Máxima' FROM sakila.film;
-- A soma de todas as durações como 'Tempo de Exibição Total';
SELECT ROUND(SUM(length),2) 'Tempo de Exibição Total' FROM sakila.film;
-- E finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
SELECT COUNT(*) 'Filmes Registrados' FROM sakila.film;


