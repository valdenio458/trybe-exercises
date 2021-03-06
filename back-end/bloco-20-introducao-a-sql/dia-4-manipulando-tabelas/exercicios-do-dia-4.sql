USE Pixar;

/* Exercício 1 : Insira as produções da Pixar abaixo na tabela Movies :
Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.
*/

INSERT INTO Movies(title, director, year, length_minutes)
 VALUES ('Monstros SA', 'Pete Docter', 2001, 92),
         ('Procurando Nemo', 'Jon Lasseter', 2003, 107),
         ('Os Incríveis', 'Brad Bird', 2004, 116),
         ('WALL-E', 'Pete Docter', 2008, 104);
         
/* Exercício 2 : Procurando Nemo foi aclamado pela crítica!
 Foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. 
 Adicione as informações à tabela BoxOffice.
 */
 INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
  VALUE (9, 6.8, 450000000, 370000000);
 
 /*
 Exercício 3 : O diretor do filme "Procurando Nemo" está incorreto, na verdade ele foi dirigido por Andrew Staton.
 Corrija esse dado utilizando o UPDATE.
 */
 UPDATE Movies
 SET director = 'Andrew Staton'
 WHERE title = 'Procurando Nemo';
 
 /*
 Exercício 4 : O título do filme "Ratatouille" esta escrito de forma incorreta na tabela Movies,
 além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o UPDATE .
*/
SELECT title FROM Movies
WHERE title LIKE 'R%';

UPDATE Movies 
SET title = 'Ratatouille', year = 2007
WHERE title = 'ratatui';




