SELECT * FROM sakila.city;

SELECT city.city, city.country_id, country.country
FROM sakila.city AS city
INNER JOIN sakila.country AS country
ON city.country_id = country.country_id;

SELECT f.title, f.language_id, l.name
FROM sakila.film AS f
INNER JOIN sakila.language AS l
ON f.language_id = l.language_id;