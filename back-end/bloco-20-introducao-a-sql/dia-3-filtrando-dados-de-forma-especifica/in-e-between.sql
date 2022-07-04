SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');

-- Note que o MySQL inclui o valor inicial e o final nos resultados
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;

-- Qual tem a melhor performance?
-- Isso vai depender do tipo e quantidade de dados com os quais você está trabalhando.
--  A melhor forma de você não chutar é clicar no botão Execution Plan no MySQL Workbench e verificar o tempo
-- de execução para tomar a decisão de qual tem o menor custo de execução.
