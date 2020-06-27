DROP TABLE IF EXISTS games, reviews, users;

CREATE TABLE games (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  platform VARCHAR(255) NOT NULL,
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
  review VARCHAR(255) NOT NULL,
  game_id INT,
  FOREIGN KEY (game_id) REFERENCES games (id)
);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  created_at TIMESTAMP
);

CREATE TABLE themes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(100) UNIQUE
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
  type VARCHAR(100) UNIQUE
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
  type VARCHAR(100)
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
