SELECT * FROM sakila.address;

-- Usando o HAVING
SELECT district, COUNT(*) FROM sakila.address
GROUP BY district
HAVING COUNT(*) > 5;

