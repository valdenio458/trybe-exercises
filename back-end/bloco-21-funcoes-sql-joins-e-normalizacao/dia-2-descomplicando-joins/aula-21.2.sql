SELECT * FROM sakila.address
INNER JOIN sakila.city
ON address.city_id = city.city_id;
-- ou
SELECT * FROM sakila.address AS a
INNER JOIN sakila.city As c
ON a.city_id = c.city_id;

SELECT
customer.customer_id, customer.first_name, address.address, address.district,
address.city_id, city.city, city.country_id, country.country
FROM customer
INNER JOIN address ON customer.address_id = address.address_id
INNER JOIN city ON address.city_id = city.city_id
INNER JOIN country ON city.country_id=country.country_id;

-- SELF JOIN
SELECT * FROM sakila.address
INNER JOIN sakila.city ON address.city_id=city.city_id;

SELECT * FROM sakila.address, sakila.city
WHERE address.city_id = city.city_id;



