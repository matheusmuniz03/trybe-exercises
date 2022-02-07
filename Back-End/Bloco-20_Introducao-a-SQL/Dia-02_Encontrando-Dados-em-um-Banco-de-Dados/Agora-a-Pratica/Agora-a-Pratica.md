Exercicio 01:
USE Scientist;
SELECT 'This is SQL Exercise, Practice and Solution';


Exercicio 02:
SELECT 3, 2, 1;


Exercicio 03:
SELECT 10 + 15;


Exercicio 04:
SELECT (20 * 300) / 10;


Exercicio 05:
SELECT * FROM Scientists;


Exercicio 06:
SELECT * FROM Projects;
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;


Exercicio 07:
SELECT Name FROM Scientists
ORDER BY Name;


Exercicio 08:
SELECT Name FROM Projects
ORDER BY Name DESC;


Exercicio 09:
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') as Resultado FROM Projects;


Exercicio 10:
SELECT * FROM Projects
ORDER BY Hours DESC
LIMIT 3;


Exercicio 11:
SELECT DISTINCT(Project) FROM AssignedTo;


Exercicio 12:
SELECT Name FROM Projects
ORDER BY Hours DESC
LIMIT 1;


Exercicio 13:
SELECT Name, hOURS FROM Projects
ORDER BY Hours
LIMIT 1
OFFSET 1;


Exercicio 14:
SELECT * FROM Projects
ORDER BY Hours
LIMIT 5;


Exercicio 15:
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') as CONCAT FROM Scientists;