# Creación del usuario
create user 'johan_delgado_adso2894667'@'localhost' identified by 'wasm123456';

# Creación de la base de datos
create database codeform_db;

grant all on codeform_db.* to johan_delgado_adso2894667@localhost;

flush privileges;