CREATE TABLE usuarios(
	nome VARCHAR(50),
	email VARCHAR(100),
	idade INT
);

/* Retorna todos usuários com idade igual a 8 */
SELECT * usuarios WHERE idade = 8; 

/* Retorna todos usuários com nome igual a Maria */
SELECT * usuarios WHERE nome = "Maria"; 

/* Retorna todos usuários com idade maior ou igual a 18 */
SELECT * usuarios WHERE idade >= 18; 