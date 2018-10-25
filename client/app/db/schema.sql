DROP DATABASE IF EXISTS homemadefood_db;

CREATE DATABASE homemadefood_db;

USE homemadefood_db;

CREATE TABLE users(
	id INT NOT NULL AUTO_INCREMENT,
	username VARCHAR(255) NOT NULL UNIQUE,
	email VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
	firstname VARCHAR(255) NOT NULL,
	lastname VARCHAR(255) NOT NULL,
	create_date DATETIME NOT NULL DEFAULT NOW(),
	PRIMARY KEY (id)
);

CREATE TABLE locations(
	id INT NOT NULL AUTO_INCREMENT,
	user_id INT NOT NULL,
	address VARCHAR(255) NOT NULL,
	city VARCHAR(255) NOT NULL,
	state VARCHAR(255) NOT NULL,
	postal_code INT NOT NULL,
	FOREIGN KEY(user_id) REFERENCES users(id),
	PRIMARY KEY (id)
);

CREATE TABLE posts(
	id INT NOT NULL AUTO_INCREMENT,
	user_id INT NOT NULL,
	location_id INT NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	title VARCHAR(255) NOT NULL,
	information TEXT NULL,
	ingredients JSON NULL,
	create_date DATETIME NOT NULL DEFAULT NOW(),
	FOREIGN KEY(user_id) REFERENCES users(id),
	FOREIGN KEY(location_id) REFERENCES locations(id),
	PRIMARY KEY(id)
);

CREATE TABLE order_histories(
	id INT NOT NULL AUTO_INCREMENT,
	user_id INT NOT NULL,
	post_id INT NOT NULL,
	location_id INT NOT NULL,
	ordered_at DATETIME NOT NULL DEFAULT NOW(),
	FOREIGN KEY(user_id) REFERENCES users(id),
	FOREIGN KEY(post_id) REFERENCES posts(id),
	FOREIGN KEY(location_id) REFERENCES locations(id),
	PRIMARY KEY(id)
);

CREATE TABLE customer_reviews(
	id INT NOT NULL AUTO_INCREMENT,
	user_id INT NOT NULL,
	post_id INT NOT NULL,
	rating INT(1) NOT NULL,
	review TEXT NOT NULL,
	FOREIGN KEY(user_id) REFERENCES users(id),
	FOREIGN KEY(post_id) REFERENCES posts(id),
	PRIMARY KEY(id)
);

CREATE TABLE user_favorites(
	id INT NOT NULL AUTO_INCREMENT,
	user_id INT NOT NULL,
	favorite_user_id INT NOT NULL,
	FOREIGN KEY(user_id) REFERENCES users(id),
	FOREIGN KEY(favorite_user_id) REFERENCES users(id),
	PRIMARY KEY(id)
);

CREATE TABLE messages(
	id INT NOT NULL AUTO_INCREMENT,
	post_id INT NOT NULL,
	sender_id INT NOT NULL,
	receiver_id INT NOT NULL,
	message TEXT NOT NULL,
	create_date DATETIME NOT NULL DEFAULT NOW(),
	FOREIGN KEY(post_id) REFERENCES posts(id),
	FOREIGN KEY(sender_id) REFERENCES users(id),
	FOREIGN KEY(receiver_id) REFERENCES users(id),
	PRIMARY KEY(id)
);