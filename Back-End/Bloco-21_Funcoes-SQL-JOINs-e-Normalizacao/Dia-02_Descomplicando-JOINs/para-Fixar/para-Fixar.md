#### Para Fixar - INNER JOIN
##### Exercicio 01:
SELECT A.actor_id, A.first_name, F.film_id
FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS F
ON A.actor_id = F.actor_id;


##### Exercicio 02:
SELECT S.first_name, S.last_name, A.address
FROM sakila.staff AS S
INNER JOIN sakila.address AS A
ON S.address_id = A.address_id;


##### Exercicio 03:
SELECT C.customer_id, C.first_name, C.email, C.address_id, A.address
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
ORDER BY first_name DESC
LIMIT 100;


##### Exercicio 04:
SELECT C.first_name, C.email, C.address_id, A.address, A.district
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
WHERE A.district = 'California'
AND first_name LIKE '%rene%';


##### Exercicio 05:
SELECT C.first_name, COUNT(A.address) AS quantidade
FROM sakila.customer AS C
INNER JOIN sakila.address AS A
ON C.address_id = A.address_id
WHERE active = 1
GROUP BY C.customer_id;


##### Exercicio 06:
SELECT STAFF.first_name, STAFF.last_name, STAFF.staff_id, AVG(PAYMENT.amount) AS avg_payment
FROM sakila.staff AS STAFF
INNER JOIN sakila.payment AS PAYMENT
ON STAFF.staff_id = PAYMENT.staff_id
WHERE YEAR(PAYMENT.payment_date) = 2006
GROUP BY STAFF.staff_id;


##### Exercicio 07:
SELECT ACTOR.actor_id, ACTOR.first_name, FILM.film_id, FILM.title
FROM sakila.actor AS ACTOR
INNER JOIN sakila.film_actor AS FILM_ACTOR
	ON ACTOR.actor_id = FILM_ACTOR.actor_id
INNER JOIN sakila.film AS FILM
	ON FILM_ACTOR.film_id = FILM.film_id;



#### Para Fixar - SELF JOIN
##### Exercicio 01:
SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente",
    Employee.DEPARTMENT_ID
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
WHERE
	Employee.DEPARTMENT_ID <> Manager.DEPARTMENT_ID;


##### Exercicio 02:
SELECT
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente",
    COUNT(*)
FROM
    employees AS Manager
INNER JOIN
    employees AS Employee ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
GROUP BY
    Manager.EMPLOYEE_ID;