### WHERE

Exercicio 01:
SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';


Exercicio 02:
SELECT * FROM sakila.customer
WHERE active IS FALSE
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name;


Exercicio 03:
SELECT title, description, release_year, replacement_cost, rating  FROM sakila.film
WHERE rating = 'PG' AND replacement_cost >= 18
ORDER BY replacement_cost DESC, title ASC
LIMIT 100;


Exercicio 04:
SELECT COUNT(*) FROM sakila.customer
WHERE store_id = 1
AND active IS TRUE;


Exercicio 05:
SELECT * FROM sakila.customer
WHERE active IS FALSE
AND store_id = 1;


Exercicio 06:
SELECT * FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY replacement_cost, title
LIMIT 50;



### LIKE

Exercicio 01:
SELECT * FROM sakila.film
WHERE title LIKE '%ace%';


Exercicio 02:
SELECT * FROM sakila.film
WHERE description LIKE '%china';


Exercicio 03:
SELECT * FROM sakila.film
WHERE description LIKE '%girl%'
AND title LIKE '%lord';


Exercicio 04:
SELECT * FROM sakila.film
WHERE title LIKE '___gon%';


Exercicio 05:
SELECT * FROM sakila.film
WHERE title LIKE '___gon%'
AND description LIKE '%Documentary%';


Exercicio 06:
SELECT * FROM sakila.film
WHERE title LIKE '%academy'
OR title LIKE 'mosquito%';


Exercicio 07:
SELECT * FROM sakila.film
WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%';



### IN e BETWEEN

Exercicio 01:
SELECT * FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy');


Exercicio 02:
SELECT * FROM sakila.customer
WHERE address_id IN (172, 173, 174, 175, 176)
ORDER BY first_name;


Exercicio 03:
SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';


Exercicio 04:
SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;


Exercicio 05:
SELECT title, rating FROM sakila.film
WHERE rating IN ('PG', 'PG-13', 'G')
ORDER BY title
LIMIT 500;