#### Para Fixar - INNER JOIN
Vamos ver agora alguns desafios para consolidar esse conhecimento sobre o  `INNER JOIN`  , utilizando o banco de dados  `sakila`  . Antes de começar a escrever suas  _queries_ , identifique quais tabelas contêm as informações de que você precisa e como elas estão relacionadas.

1.  Monte uma  _query_ que exiba o  **id do ator** ,  **nome do ator** e  **id do filme** em que ele já atuou usando as tabelas  `actor`  e  `film_actor`  .
    
2.  Use o  `JOIN`  para exibir o  **nome** ,  **sobrenome** e  **endereço** de cada um dos funcionários do banco. Use as tabelas  `staff`  e  `address`  .
    
3.  Exiba o  **id do cliente** ,  **nome** e  **email** dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o  **id do endereço** e o  **nome da rua** onde o cliente mora. Essas informações podem ser encontradas nas tabelas  `customer`  e  `address`  .
    
4.  Exiba o  **nome** ,  **email** ,  **id do endereço** ,  **endereço** e  **distrito** dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas  `address`  e  `customer`  .
    
5.  Exiba o  **nome** e a  **quantidade de endereços** dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela  `address`  e  `customer`  .
    
6.  Monte uma  _query_ que exiba o  **nome** ,  **sobrenome** e a  **média de valor** (  `amount`  ) paga aos funcionários no ano de 2006. Use as tabelas  `payment`  e  `staff`  . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
    
7.  Monte uma  _query_ que exiba o  **id do ator** ,  **nome** ,  **id do filme** e  **título do filme** , usando as tabelas  `actor`  ,  `film_actor`  e  `film`  . Dica: você precisará fazer mais de um  `JOIN`  na mesma  _query_ .
    

Até o momento, temos produzido resultados apenas quando temos valores correspondentes em ambas as colunas de referência. Porém, o que devemos fazer quando possivelmente apenas uma das tabelas possui um valor correspondente existente? É possível que você tenha que usar o  `LEFT JOIN`  ou  `RIGHT JOIN`  nessas situações.

#### Para Fixar - SELF JOIN
Para fixar esses conceitos, tente encontrar as seguintes informações:

1.  Queremos saber o  **Nome** das  **pessoas colaboradoras** e suas respectivas  **gerências** (  `manager`  ) cujos departamentos (  `department`  ) são diferentes.
    
2.  Exiba o  **Nome** e a  **quantidade de pessoas lideradas** de cada gerente.
    

Lembre-se de usar o  `SELF JOIN`  em situações em que as informações que estiver buscando estejam armazenadas em apenas uma tabela.