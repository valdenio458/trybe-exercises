-- 1) Insira um novo funcionário na tabela sakila.staff .
-- -- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione
--  "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar.
--  Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente.
INSERT INTO staff
(first_name, last_name, address_id, email, store_id, `active`, username, `password`)
VALUES
('Valdênio', 'Martinho', 2, 'valdenio@uai.com.br', 1, 1, 'Valdênio', 'flamengo');

-- 2) Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO staff
(first_name, last_name, address_id, email, store_id, `active`, username, `password`)
VALUES
('Jeff', 'Bezos', 2, 'jeffbezos@gmail.com', 1, 1, 'jeffb', 'ImTheChamp'),
('Sekiro', 'Okami', 2, 'sekirowolf@gmail.com', 1, 1, 'okami', 'SekiroTheSamurai');

-- 3) Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer 
-- e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO actor(first_name, last_name)
SELECT first_name, last_name
FROM customer 
ORDER BY customer_id
LIMIT 5;

-- 4) Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO category (`name`)
VALUES
('Ficcao'),
('Comedy'),
('Biography');

-- 5) Cadastre uma nova loja na tabela sakila.store .
INSERT INTO store (manager_staff_id, address_id)
VALUES (3,3);




