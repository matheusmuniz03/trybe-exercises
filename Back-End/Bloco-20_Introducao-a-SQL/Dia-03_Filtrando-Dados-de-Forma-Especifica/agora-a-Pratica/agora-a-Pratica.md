Exercicio 01:
SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE 'Gr%';


Exercicio 02:
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;


Exercicio 03:
SELECT peca, Preco, Fornecedor FROM PecasFornecedores.Fornecimentos
WHERE Fornecedor LIKE '%N%';


Exercicio 04:
SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name DESC;


Exercicio 05:
SELECT COUNT(*) FROM PecasFornecedores.Fornecedores
WHERE code LIKE '%F%';


Exercicio 06:
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE Preco BETWEEN 15 AND 40
ORDER BY Preco;


Exercicio 07:
SELECT COUNT(*) FROM PecasFornecedores.Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';