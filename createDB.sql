-- Tạo cơ sở dữ liệu
CREATE DATABASE IF NOT EXISTS midterm;

-- Sử dụng cơ sở dữ liệu vừa tạo
USE midterm;

-- Tạo bảng student
CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    address VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL
);

-- Chèn 10 sinh viên vào bảng student
INSERT INTO student (name, phone, address, email) VALUES
('Nguyen Van A', '0123456789', '123 Street A', 'a@example.com'),
('Tran Thi B', '0123456790', '234 Street B', 'b@example.com'),
('Le Van C', '0123456791', '345 Street C', 'c@example.com'),
('Pham Thi D', '0123456792', '456 Street D', 'd@example.com'),
('Nguyen Van E', '0123456793', '567 Street E', 'e@example.com'),
('Tran Van F', '0123456794', '678 Street F', 'f@example.com'),
('Le Thi G', '0123456795', '789 Street G', 'g@example.com'),
('Pham Van H', '0123456796', '890 Street H', 'h@example.com'),
('Nguyen Thi I', '0123456797', '901 Street I', 'i@example.com'),
('Tran Van J', '0123456798', '123 Street J', 'j@example.com');
