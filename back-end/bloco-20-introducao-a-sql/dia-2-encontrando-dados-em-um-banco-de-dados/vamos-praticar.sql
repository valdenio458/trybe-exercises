-- 1) Monte uma query que exiba seu nome na tela;
SELECT'Valdênio';
 -- 2)  Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
SELECT 'Valdênio Martinho', 'Conselheiro Lafaiete', '63 anos';

-- 3) Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS
SELECT 'Valdênio' AS nome, 'Martinho' AS sobrenome, 'Conselheiro Lafaiete' AS cidadenatal, 63 AS idade;

--  4) Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT 
SELECT 13 * 8;

-- 5) Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".
SELECT now() AS 'Data Atual';
