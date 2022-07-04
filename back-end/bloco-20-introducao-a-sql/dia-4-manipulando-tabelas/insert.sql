USE sakila;
-- Inserir dados em uma tabela:
-- INSERT INTO nome_da_tabela (coluna1, coluna2)
-- VALUES ('valor_coluna1', 'valor_coluna2');

-- É possível inserir múltiplas linhas em uma tabela com uma única query :
-- INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES
-- ('valor_1','valor_2'),
-- ('valor_3','valor_4'),
-- ('valor_5','valor_6');

-- É possível inserir dados a partir de outra tabela usando INSERT INTO SELECT :
-- INSERT INTO tabelaA (coluna1, coluna2)
--     SELECT tabelaB.coluna1, tabelaB.coluna2
--     FROM tabelaB
--     WHERE tabelaB.nome_da_coluna <> 'algumValor'
--     ORDER BY tabelaB.coluna_de_ordenacao;

INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.staff;
SELECT * FROM actor;

