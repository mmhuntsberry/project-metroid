-- DROP TABLE IF EXISTS reviews,
-- game_review,
-- users,
-- user_review,
-- themes,
-- game_theme,
-- platforms,
-- game_platform,
-- genres,
-- game_genre,
-- ratings,
-- game_rating,
-- games;
CREATE TABLE games (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  release_year INT NOT NULL,
  box_art VARCHAR(255) NOT NULL,
  synopsis TEXT NOT NULL,
  description TEXT,
  trailer VARCHAR(255),
  hero VARCHAR(255),
  developer VARCHAR(255)
);
CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  review VARCHAR(255) NOT NULL
);
CREATE TABLE game_review (
  id INT AUTO_INCREMENT PRIMARY KEY,
  game_id INT,
  review_id INT,
  FOREIGN KEY (game_id) REFERENCES games(id),
  FOREIGN KEY (review_id) REFERENCES reviews(id)
);
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100),
  created_at TIMESTAMP
);
CREATE TABLE user_review (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  review_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (review_id) REFERENCES reviews(id)
);
CREATE TABLE themes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  theme VARCHAR(100) UNIQUE
);
CREATE TABLE game_theme (
  id INT AUTO_INCREMENT PRIMARY KEY,
  game_id INT,
  theme_id INT,
  FOREIGN KEY (game_id) REFERENCES games(id),
  FOREIGN KEY (theme_id) REFERENCES themes(id)
);
CREATE TABLE platforms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  platform VARCHAR(100)
);
CREATE TABLE game_platform (
  id INT AUTO_INCREMENT PRIMARY KEY,
  game_id INT,
  platform_id INT,
  FOREIGN KEY (game_id) REFERENCES games(id),
  FOREIGN KEY (platform_id) REFERENCES platforms(id)
);
CREATE TABLE genres (
  id INT AUTO_INCREMENT PRIMARY KEY,
  genre VARCHAR(100)
);
CREATE TABLE game_genre (
  id INT AUTO_INCREMENT PRIMARY KEY,
  game_id INT,
  genre_id INT,
  FOREIGN KEY (game_id) REFERENCES games(id),
  FOREIGN KEY (genre_id) REFERENCES genres(id)
);
CREATE TABLE ratings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  rating VARCHAR(100) NOT NULL
);
-- Example of how to create the relationship
CREATE TABLE game_rating (
  id INT AUTO_INCREMENT PRIMARY KEY,
  game_id INT,
  rating_id INT,
  FOREIGN KEY (game_id) REFERENCES games(id),
  FOREIGN KEY (rating_id) REFERENCES ratings(id)
);