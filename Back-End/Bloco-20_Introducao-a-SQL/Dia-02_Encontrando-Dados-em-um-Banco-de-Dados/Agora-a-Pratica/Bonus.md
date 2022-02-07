Exercicio 01:
SELECT * FROM Provides
WHERE Provider = 'RBT';


Exercicio 02:
SELECT * FROM Provides
ORDER BY Price DESC
LIMIT 5;


Exercicio 03:
SELECT Provider, Price FROM Provides
ORDER BY PRICE DESC
LIMIT 4
OFFSET 2;


Exercicio 04:
SELECT * FROM Provides
WHERE Provider = 'HAL'
ORDER BY Price DESC;


Exercicio 05:
SELECT COUNT(Provider) FROM Provides
WHERE Piece = 1;