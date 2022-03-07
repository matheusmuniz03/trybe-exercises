###### Exercicio 01:
Na 1ª Forma Normal:
    - troquei o nome da COLUNA 'CONTATO' (na segunda vez que ela aparece), para TELEFONE;
    - alterei a data do Funcionario_ID 13, para ficar padronizado;
    - criei uma nova tabela, com as informações dos Setores (SETOR_ID - FUNCIONARIO_ID - SETOR);

###### Exercicio 02:
Na 2ª Forma Normal:
    - criei 3 tabelas, a primeira com as informações dos funcionarios;
    - a segunda com as informações apenas dos setores
    - e uma terceira tabela como uma intermediação das duas primeiras;

###### Exercicio 03:
CREATE DATABASE normalization;
USE normalization;

CREATE TABLE Funcionarios(
	FUNCIONARIO_ID INT PRIMARY KEY AUTO_INCREMENT,
	NOME VARCHAR(50) NOT NULL,
    SOBRENOME VARCHAR(50) NOT NULL,
    CONTATO VARCHAR(100) NOT NULL,
    TELEFONE VARCHAR(15) NOT NULL,
    DATA_CADASTRO VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

INSERT INTO Funcionarios (FUNCIONARIO_ID, NOME, SOBRENOME, CONTATO, TELEFONE, DATA_CADASTRO)
VALUES
	(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
    (13, 'André', 'Freeman', 'andre@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
    (14, 'Cíntia', 'Duval', 'cintia@gmail.com', '(33)99855-4669', '2020-05-05 10:55:35'),
    (15, 'Fernanda', 'Mendes', 'femendes@gmail.com', '(33)99200-1556', '2020-05-05 11:45:40');


CREATE TABLE Setores(
	SETOR_ID INT PRIMARY KEY AUTO_INCREMENT,
    SETOR VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

INSERT INTO Setores (SETOR)
VALUES
	('Administração'),
    ('Vendas'),
    ('Operacional'),
    ('Estratégico'),
    ('Marketing');


CREATE TABLE Setores_Func(
	FUNCIONARIO_ID INT NOT NULL,
    SETOR_ID INT NOT NULL,
    FOREIGN KEY (FUNCIONARIO_ID) REFERENCES Funcionarios(FUNCIONARIO_ID),
    FOREIGN KEY (SETOR_ID) REFERENCES Setores(SETOR_ID)
) ENGINE=InnoDB;

INSERT INTO Setores_Func (FUNCIONARIO_ID, SETOR_ID)
VALUES
	(12, 1),
    (12, 2),
    (13, 3),
	(14, 4),
    (14, 2),
    (15, 5);