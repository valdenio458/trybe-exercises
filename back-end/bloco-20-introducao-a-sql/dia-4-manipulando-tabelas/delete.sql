USE sakila;
SET SQL_SAFE_UPDATES = 0;
/*
Para excluir dados de forma básica, temos a seguinte sintaxe:
DELETE FROM banco_de_dados.tabela
WHERE coluna = 'valor';
-- O WHERE é opcional. Porém, sem ele, todas as linhas da tabela seriam excluídas.

Exemplo no banco sakila :
DELETE FROM sakila.film_text
WHERE title = 'ACADEMY DINOSAUR';

Meu DELETE não foi permitido...
Caso haja relações entre as tabelas ( primary key e foreign keys ) e existam restrições 
aplicadas a elas, ao executar o DELETE ocorrerá uma ação de acordo com a restrição que 
tiver sido imposta na criação da foreign key . Essas restrições podem ser as seguintes:
-- Rejeita o comando DELETE.
ON DELETE NO ACTION;

-- Rejeita o comando DELETE.
ON DELETE RESTRICT;

-- Permite a exclusão dos registros da tabela pai, e seta para NULL os registros da tabela filho.
ON DELETE SET NULL;

-- Exclui a informação da tabela pai e registros relacionados.
ON DELETE CASCADE;

DELETE VS TRUNCATE
Se tem certeza absoluta de que quer excluir os registros de uma tabela de uma maneira mais rápida,
 para efeitos de testes ou necessidade, o TRUNCATE é mais rápido que o DELETE.
 A função principal e única do TRUNCATE é de limpar (excluir todos os registros) de uma tabela,
 não sendo possível especificar o WHERE . Por isso, o TRUNCATE só pode ser usado nesse cenário.
 TRUNCATE banco_de_dados.tabela;
*/
