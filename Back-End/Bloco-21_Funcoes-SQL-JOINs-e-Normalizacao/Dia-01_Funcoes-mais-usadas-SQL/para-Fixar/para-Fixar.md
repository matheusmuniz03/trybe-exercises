#### Para Fixar - Manipulação de Strings
Exercicio 01:
SELECT UCASE ('trybe') AS RESULTADO;


Exercicio 02:
SELECT REPLACE ('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google') AS RESULTADO;


Exercicio 03:
SELECT CHAR_LENGTH('Uma frase qualquer') AS RESULTADO;


Exercicio 04:
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas',13,10) AS RESULTADO;


Exercicio 05:
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL') AS RESULTADO;


#### Para Fixar - Condicionais
Exercicio 01:
SELECT film_id, title, IF( title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS 'conheço o filme'
FROM sakila.film;


Exercicio 02:
SELECT title, rating, 
	CASE
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE "Proibido para menores de idade"
	END AS 'público-alvo'
FROM sakila.film;


#### Para Fixar - Funções Matemáticas 
Exercicio 01:
SELECT ROUND(15 + RAND() * 5);


Exercicio 02:
SELECT ROUND(15.7515971, 5);


Exercicio 03:
SELECT FLOOR(39.494);


Exercicio 04:
SELECT CEIL(85.234);


#### Para Fixar - Trabalhando com Datas
Exercicio 01:
SELECT DATEDIFF('2030-01-20', CURRENT_DATE());


Exercicio 02:
SELECT TIMEDIFF('10:25:45', '11:00:00');



#### Para Fixar - `AVG`  ,  `MIN`  ,  `MAX`  ,  `SUM`  e  `COUNT`
Exercicio 01:
SELECT AVG(length) AS 'Média de Duração'
FROM sakila.film;


Exercicio 02:
SELECT MIN(length) AS 'Duração Mínima'
FROM sakila.film;


Exercicio 03:
SELECT MAX(length) AS 'Duração Máxima'
FROM sakila.film;


Exercicio 04:
SELECT SUM(length) AS 'Tempo de Exibição Total'
FROM sakila.film;


Exercicio 05:
SELECT COUNT(*) AS 'Filmes Registrados'
FROM sakila.film;



#### Para Fixar - GROUP BY e HAVING
Exercicio 01:
SELECT rating, AVG(length) AS Tamanho
FROM sakila.film
GROUP BY rating
HAVING Tamanho > 115 AND Tamanho < 121.50
ORDER BY Tamanho;


Exercicio 02:
SELECT rating, SUM(replacement_cost) AS Custo
FROM sakila.film
GROUP by rating
HAVING Custo > 3950.50
ORDER BY Custo;