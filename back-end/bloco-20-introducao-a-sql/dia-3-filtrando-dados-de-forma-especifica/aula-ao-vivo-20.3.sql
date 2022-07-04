USE sakila;
SELECT * FROM actor
WHERE first_name = 'JOHNNY' AND last_name = 'CAGE';

SELECT * FROM film
WHERE rental_duration = 6
	AND (rating = 'R' OR rating = 'PG');
    
-- Usando o IN
SELECT * FROM film
WHERE rental_duration = 6
	AND rating IN( 'R','PG');
    
-- Usando o NOT IN
SELECT * FROM film
WHERE rental_duration = 6
	AND rating NOT IN( 'R','PG');

-- Usando o BETWEEN
SELECT * FROM film
WHERE length BETWEEN 50 AND 130;

-- Usando Datas
SELECT * FROM rental
WHERE return_date BETWEEN '2005-05-27' AND '2005-06-03';

SELECT * FROM rental
WHERE return_date BETWEEN '2005-05-27 00:00:00' AND '2005-05-27 23:59:59';

SELECT * FROM rental
WHERE DATE(return_date)='2005-05-27';

SELECT COUNT(*) FROM rental
WHERE MONTH(return_date)='05';

SELECT COUNT(*) FROM rental
WHERE YEAR(return_date)='2005';

-- Usando o LIKE
-- % e _  = wildcard
SELECT * FROM customer
WHERE first_name LIKE '%FER%';

SELECT * FROM customer
WHERE first_name LIKE '_RA%';