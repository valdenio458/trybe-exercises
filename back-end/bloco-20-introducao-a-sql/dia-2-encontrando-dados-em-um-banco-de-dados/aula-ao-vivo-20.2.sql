USE sakila;
-- DISTINCT (Traz as linhas que não se repetem)
SELECT DISTINCT release_year FROM film;

SELECT first_name, last_name FROM actor;
SELECT DISTINCT actor_id, first_name, last_name FROM actor; -- Não tem lógica usar o distinct com uma chave primária como o actor_id

-- LIMIT (muito usado em paginação para exibir certo número de produtos em uma página)
SELECT DISTINCT actor_id, first_name, last_name FROM actor LIMIT 12;

-- OFFSET (trabalha sempre junto com o Limit, determina um intervalo de salto)
SELECT DISTINCT actor_id, first_name, last_name FROM actor LIMIT 20 OFFSET 5;

-- COUNT (Quantidade de registros em uma tabela - NÃO CONTA COLUNAS COM NULL - SÒ È USADO ENTRE O SELECT E O FROM)
SELECT COUNT(address2) FROM address;

-- ORDER BY (Define por qual critério vamos ordenar o resultado da querie)
-- Por default, ordena em ordem crescente. Para alterar usamos o DESC
SELECT * FROM actor ORDER BY first_name DESC, last_name;





