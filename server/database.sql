CREATE DATABASE khabardabar;

CREATE TABLE users(
    -- extension for unique id's for each user
    userId uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    userName VARCHAR(255) NOT NULL,
    userEmail VARCHAR(255) NOT NULL,
    userPassword VARCHAR(255) NOT NULL
);

-- Insertion of fake users

INSERT INTO users (userName, userEmail, userPassword) VALUES ('Farhan Hasin', 'farhan.hasin.25@gmail.com','password1234');