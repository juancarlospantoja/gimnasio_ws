CREATE DATABASE gimnasio;

USE gimnasio;

CREATE TABLE `gimnasio`.`usuario` (
  `id_usuario` INT NOT NULL,
  `cedula` VARCHAR(255) NOT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `tipo` INT NOT NULL,
  `estado` INT NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE INDEX `cedula_UNIQUE` (`cedula` ASC) VISIBLE);


CREATE TABLE `gimnasio`.`ciudad` (
  `id_ciudad` INT NOT NULL,
  `ciudad` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_ciudad`));


CREATE TABLE `gimnasio`.`sede` (
  `id_sede` INT NOT NULL,
  `id_ciudad` INT NOT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_sede`),
  INDEX `fk_ciudad_id_ciudad_idx` (`id_ciudad` ASC) VISIBLE,
  CONSTRAINT `fk_ciudad_id_ciudad`
    FOREIGN KEY (`id_ciudad`)
    REFERENCES `gimnasio`.`ciudad` (`id_ciudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `gimnasio`.`usuario_sede` (
  `id_usuario_sede` INT NOT NULL,  
  `id_usuario` INT NOT NULL,
  `id_sede` INT NOT NULL,
  PRIMARY KEY (`id_usuario_sede`),
  INDEX `fk_usuario_sede_id_usuario_idx` (`id_usuario` ASC) VISIBLE,
  INDEX `fk_usuario_sede_id_sede_idx` (`id_sede` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_sede_id_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `gimnasio`.`usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_sede_id_sede`
    FOREIGN KEY (`id_sede`)
    REFERENCES `gimnasio`.`sede` (`id_sede`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

  CREATE TABLE `gimnasio`.`tipo_usuario` (
  `id_tipo` INT NOT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_tipo`));

