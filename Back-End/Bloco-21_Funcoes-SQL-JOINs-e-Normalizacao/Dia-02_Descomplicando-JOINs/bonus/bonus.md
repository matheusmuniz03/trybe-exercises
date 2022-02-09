#### Exercicio 06:
SELECT
	M.id,
    M.title,
    M.director,
    M.year,
    M.length_minutes,
    M.theater_id
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS BOX
ON M.id = BOX.movie_id
WHERE BOX.rating > 8;