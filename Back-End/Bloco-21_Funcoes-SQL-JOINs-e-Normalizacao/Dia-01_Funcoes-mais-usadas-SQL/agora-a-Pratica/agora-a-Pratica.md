Exercicio 01:
SELECT MAX(SALARY) AS Max_Salary
FROM hr.employees;


Exercicio 02:
SELECT MAX(SALARY) - MIN(SALARY) AS Diff_Salary
FROM hr.employees;


Exercicio 03:
SELECT JOB_ID, AVG(SALARY) AS AVG_Salary FROM hr.employees
GROUP BY JOB_ID
ORDER BY AVG_Salary DESC;


Exercicio 04:
SELECT SUM(SALARY) AS total_Salary FROM hr.employees;


Exercicio 05:
SELECT ROUND(MAX(SALARY),2) AS max_Salary,
ROUND(MIN(SALARY),2) AS min_Salary,
ROUND(SUM(SALARY),2) AS sum_Salary,
ROUND(AVG(SALARY),2) AS avg_Salary 
FROM hr.employees;


Exercicio 06:
SELECT JOB_ID, COUNT(*) AS total
FROM hr.employees
WHERE JOB_ID = 'IT_PROG';


Exercicio 07:
SELECT JOB_ID, SUM(SALARY) AS sum_Jobs
FROM hr.employees
GROUP BY JOB_ID;


Exercicio 08:
SELECT JOB_ID, SUM(SALARY) AS sum_Jobs
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';


Exercicio 09:
SELECT JOB_ID, SUM(SALARY) AS sum_Jobs
FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY sum_Jobs DESC;


Exercicio 10:
SELECT JOB_ID, AVG(SALARY) AS avg_Salary, COUNT(DEPARTMENT_ID) AS employees
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING employees > 10;


Exercicio 11:
UPDATE hr.employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777')
WHERE PHONE_NUMBER LIKE '515%';


Exercicio 12:
SELECT * FROM hr.employees
WHERE LENGTH(FIRST_NAME) >= 8;


Exercicio 13:
SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) FROM hr.employees;


Exercicio 14:
SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) FROM hr.employees;


Exercicio 15:
SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) FROM hr.employees;


Exercicio 16:
SELECT UCASE(FIRST_NAME) FROM hr.employees;


Exercicio 17:
SELECT LAST_NAME, HIRE_DATE FROM hr.employees
WHERE MONTH(HIRE_DATE) = 6
AND YEAR(HIRE_DATE) = 1987;


Exercicio 18:
SELECT FIRST_NAME AS nome,
LAST_NAME AS sobrenome,
DATEDIFF(CURRENT_DATE(), HIRE_DATE) AS tempo_de_empresa
FROM hr.employees;
