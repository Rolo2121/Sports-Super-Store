-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- USE ecommerce_db;

-- CREATE TABLE categories (
--    id INTEGER AUTO_INCREMENT PRIMARY KEY,
--    name VARCHAR(50) NOT NULL,
--    description TEXT
-- );

-- CREATE TABLE products (
--     id INTEGER AUTO_INCREMENT PRIMARY KEY,
--     product_name VARCHAR(50) NOT NULL,
--     price DECIMAL NOT NULL,
--     stock INTEGER NOT NULL,
-- );

-- CREATE TABLE product_tags (
--     id INTEGER AUTO_INCREMENT PRIMARY KEY,
--     product_id VARCHAR(50) NOT NULL,
--     tag_id INTEGER NOT NULL,
--     REFERENCES products (id),
-- );

-- CREATE TABLE tags (
--     id INTEGER AUTO_INCREMENT PRIMARY KEY,
--     tag_name VARCHAR (50) NOT NULL,
-- );

