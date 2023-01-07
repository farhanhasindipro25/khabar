CREATE DATABASE khabardabar;

CREATE TABLE users(
    -- extension for unique id's for each user
    userId uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    userName VARCHAR(255) NOT NULL,
    userEmail VARCHAR(255) NOT NULL,
    userPassword VARCHAR(255) NOT NULL
);

CREATE TABLE menuitems(
    itemId uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    itemImage VARCHAR(255),
    itemPrice INTEGER,
    menuItem VARCHAR(255),
    itemDescription VARCHAR(255),
    restuarant VARCHAR(255),
    restuarantLocation VARCHAR(255)
);

-- Insertion of fake users

INSERT INTO users (userName, userEmail, userPassword) VALUES ('Farhan Hasin', 'farhan.hasin.25@gmail.com','password1234');

INSERT INTO menuitems (itemImage, itemPrice, menuItem, itemDescription, restuarant, restuarantLocation) VALUES ('Sample Image', 8,'sample item','sample description', 'sample res','sample location');