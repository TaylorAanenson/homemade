INSERT INTO users (username, email, password, firstname, lastname)
VALUES 
('aaaa', 'aaaa@gmail.com', 'aaaa', 'User', 'One'),
('ssss', 'ssss@gmail.com', 'ssss', 'User', 'Two'),
('dddd', 'dddd@gmail.com', 'dddd', 'User', 'Three'),
('ffff', 'ffff@gmail.com', 'ffff', 'User', 'Four');

INSERT INTO locations (user_id, address, city, state, postal_code)
VALUES
(1, '1234 Main Street', 'San Francisco', 'California', '94105'),
(2, '1234 Geary Street', 'San Francisco', 'California', '94109'),
(3, '1234 California Street', 'San Francisco', 'California', '94109'),
(4, '1234 Market Street', 'San Francisco', 'California', '94102');

INSERT INTO posts (user_id, location_id, price, title, information, ingredients)
VALUES
(1, 2, 9.99, 'Vegan Surprise', 'Is this meat? I dont know but it sure doesnt taste like vegetables', '["vegan-beef", "vegan-eggs", "vegan-cheese", "vegan-fish", "vegan-chicken", "nonvegan-nuts", "nonvegan-lettuce", "nonvegan-tomato"]'),
(2, 2, 10.99, 'GMO Plus', 'Genetically Motified Organism Plus a dose of growth hormones.', '["hormones", "beef", "peanuts", "milk", "eggs", "gluten"]');


INSERT INTO order_histories (user_id, post_id, location_id)
VALUES
(4, 1, 3),
(3, 2, 4);

INSERT INTO customer_reviews (user_id, post_id, rating, review)
VALUES
(4, 1, 5, 'Taste awesome. Ill never miss being a meat-eater.'),
(3, 2, 3, 'I didnt grow at all, what a lie, but still tasty...');

INSERT INTO user_favorites (user_id, favorite_user_id)
VALUES
(4, 1),
(3, 2),
(1, 2),
(2, 1),
(4, 2),
(3, 1);