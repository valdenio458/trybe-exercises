USE sakila;
 -- WHERE (vídeo)
SELECT * FROM actor
	WHERE last_name = 'Davis';

SELECT * FROM film
	WHERE length > 50
    ORDER BY length;
    
SELECT * FROM film
	WHERE title <> 'ALIEN CENTER'
    AND replacement_cost > 20;    
    
SELECT * FROM film
	WHERE rating = 'G'
    OR rating = 'PG'
    OR rating = 'PG-13';
    
SELECT * FROM rental
WHERE return_date IS FALSE;
 
SELECT * FROM staff
WHERE active IS FALSE;  

SELECT * FROM film
WHERE title NOT LIKE 'academy%';


-- OPERADOR - DESCRIÇÃO
-- =   IGUAL
-- >   MAIOR QUE
-- <   MENOR QUE
-- >=  MAIOR QUE OU IGUAL
-- <=  MENOR QUE OU IGUAL
-- <>  DIFERENTE DE
-- AND OPERADOR LÓGICO E
-- OR  OPERADOR LÓGICO OU
-- NOT NEGAÇÃO
-- IS  COMPARA COM VALORES BOOLEANOS (TRUE, FALSE, NULL)