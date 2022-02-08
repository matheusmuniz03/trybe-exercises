Exercicio 01:
SELECT * FROM Scientists.Scientists
WHERE Name LIKE '%e%';


Exercicio 02:
SELECT * FROM Scientists.Projects
WHERE Name LIKE 'A%'
ORDER BY Name;


Exercicio 03:
SELECT Code, Name FROM Scientists.Projects
WHERE Code LIKE '%3%'
ORDER BY Name;


Exercicio 04:
SELECT * FROM Scientists.AssignedTo
WHERE Project IN ('AeH3', 'Ast3', 'Che1');


Exercicio 05:
SELECT * FROM Scientists.Projects
WHERE Hours > 500;


Exercicio 06:
SELECT * FROM Scientists.Projects
WHERE Hours > 250 AND Hours < 800;


Exercicio 07:
SELECT Name, Code FROM Scientists.Projects
WHERE Name NOT LIKE 'A%';


Exercicio 08:
SELECT * FROM Scientists.Projects
WHERE Code LIKE '%H%';