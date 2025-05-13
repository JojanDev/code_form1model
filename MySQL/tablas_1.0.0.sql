USE codeform_db;

-- Tabla generos
CREATE TABLE generos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20)
);

-- Tabla ciudades
CREATE TABLE ciudades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30)
);

-- Tabla lenguajes
CREATE TABLE lenguajes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30)
);

-- Tabla usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    telefono BIGINT,
    documento BIGINT,
    usuario VARCHAR(50),
    contrasena VARCHAR(50),
    id_genero INT,
    id_ciudad INT,
    FOREIGN KEY (id_genero) REFERENCES generos(id),
    FOREIGN KEY (id_ciudad) REFERENCES ciudades(id)
);

-- Tabla lenguajes_usuarios con clave primaria compuesta
CREATE TABLE lenguajes_usuarios (
	  id INT auto_increment primary key,
    id_usuario INT,
    id_lenguaje INT,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_lenguaje) REFERENCES lenguajes(id)
);

insert into ciudades(nombre) values ("Bucaramanga"), ("Girón"), ("Floridablanca");
insert into generos(nombre) values ("Femenino"), ("Masculino");
insert into lenguajes(nombre) values("HTML"), ("JavaScript"), ("CSS"), ("Java"), ("PHP"), ("SQL"), ("C#");

select * from ciudades;
select * from generos;
select * from lenguajes;




