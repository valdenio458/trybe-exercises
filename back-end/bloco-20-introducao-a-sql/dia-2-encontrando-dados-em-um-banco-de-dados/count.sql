USE sakila;
-- 1)Quantas senhas temos cadastradas nessa tabela
SELECT COUNT(password) FROM staff;

-- 2)Quantas pessoas temos no total trabalhando para nossa empresa?
SELECT COUNT(username) FROM staff;

-- 3) Quantos emails temos cadastrados nessa tabela?
SELECT COUNT(email) FROM staff;