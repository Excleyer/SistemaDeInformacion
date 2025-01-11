CREATE DATABASE pediatria;

/*CREATE TABLE pacientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    edad INT NOT NULL,
    sexo  VARCHAR(100) NOT NULL,
    fecha_nac DATE NOT NULL,
    lugar_nac VARCHAR(100) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    evaluacion VARCHAR(255) NOT NULL,
    piel VARCHAR(255) NOT NULL,
    peso DECIMAL(5,2) NOT NULL,
    talla DECIMAL(5,2) NOT NULL,
    temperatura DECIMAL(4,2) NOT NULL,
    cardio VARCHAR(255) NOT NULL,
    abdomen VARCHAR(255) NOT NULL,
    laboratorio VARCHAR(255) NOT NULL,
    snc VARCHAR(255) NOT NULL,
    inmunizaciones VARCHAR(255) NOT NULL,
    idx VARCHAR(255) NOT NULL,
);

CREATE TABLE representante(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT,
    paciente_id INT, FOREIGN KEY (paciente_id) REFERENCES paciente(id),
    nombres VARCHAR(255)NOT NULL ,
    apellidos  VARCHAR(255)NOT NULL,
     edad  INTEGER not NULL, 
     cedula INTEGER NOT NULL,
    sexo VARCHAR(1)not null ,
    telefono INTEGER
    );
*/
   