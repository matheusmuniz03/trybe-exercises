##### Exercicio 01:
SELECT 
	M.title,
    BOX.domestic_sales,
    BOX.international_sales
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BOX
ON M.id = BOX.movie_id;


##### Exercicio 02:
SELECT 
	M.title,
    BOX.domestic_sales,
    BOX.international_sales
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BOX
ON M.id = BOX.movie_id
WHERE BOX.domestic_sales < BOX.international_sales;


##### Exercicio 03:
SELECT 
	M.title,
    BOX.rating
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BOX
ON M.id = BOX.movie_id
ORDER BY rating DESC;


##### Exercicio 04:
SELECT
	T.name,
	T.location,
    M.title,
    M.director,
    M.year,
    M.length_minutes
FROM Pixar.Theater AS T
LEFT JOIN Pixar.Movies AS M
ON T.id = M.theater_id;


##### Exercicio 05:
SELECT
	T.name,
	T.location,
    M.title,
    M.director,
    M.year,
    M.length_minutes
FROM Pixar.Theater AS T
RIGHT JOIN Pixar.Movies AS M
ON T.id = M.theater_id;
