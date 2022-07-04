-- Para pular uma certa quantidade de linhas do seu resultado
-- Pula as três primeiras lnhas de uma lista com 10 itens. Então vai de 4 a 13
SELECT * FROM sakila.actor LIMIT 10 OFFSET 3;

-- Agora, olhando o resultado a seguir, qual query eu teria que montar para trazer os 10 primeiros resultados, a partir de JOHNNY
SELECT * FROM sakila.rental LIMIT 10 OFFSET 4;