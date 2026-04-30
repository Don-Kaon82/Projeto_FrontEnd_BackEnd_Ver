CREATE DATABASE login_db;
USE login_db;
CREATE TABLE usuarios (
    id int(11) AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) DEFAULT NULL,
    email VARCHAR(160) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    role enum('admin', 'cliente') NOT NULL DEFAULT 'cliente',
    created_at timestamp NULL DEFAULT current_timestamp()
)   ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE =utf8mb4_general_ci;
