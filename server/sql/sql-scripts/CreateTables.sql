-- DROP TABLE IF EXISTS reviews,
-- game_review,
-- users,
-- user_review,
-- user_collection,
-- user_collection_detail,
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
  id INT PRIMARY KEY NOT NULL,
  /* id INT AUTO_INCREMENT PRIMARY KEY, */
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
  created_at TIMESTAMP,
  review VARCHAR(255) NOT NULL
);
CREATE TABLE game_review (
  id INT AUTO_INCREMENT PRIMARY KEY,
  game_id INT,
  review_id INT,
  FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE,
  FOREIGN KEY (review_id) REFERENCES reviews(id) ON DELETE CASCADE
);
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  thumbnail VARCHAR(100) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  user_role VARCHAR(25) NOT NULL,
  password VARCHAR(100),
  created_at TIMESTAMP
);
CREATE TABLE user_review (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  review_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (review_id) REFERENCES reviews(id) ON DELETE CASCADE
);
CREATE TABLE user_collection (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE TABLE user_collection_detail (
  id INT AUTO_INCREMENT PRIMARY KEY,
  game_id INT,
  collection_id INT,
  rank INT,
  thumbnail VARCHAR(100),
  created_at TIMESTAMP,
  status BOOLEAN,
  owned BOOLEAN,
  FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE,
  FOREIGN KEY (collection_id) REFERENCES user_collection(id)
);
CREATE TABLE themes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  theme VARCHAR(100) UNIQUE
);
CREATE TABLE game_theme (
  id INT AUTO_INCREMENT PRIMARY KEY,
  game_id INT,
  theme_id INT,
  FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE,
  FOREIGN KEY (theme_id) REFERENCES themes(id) ON DELETE CASCADE
);
CREATE TABLE platforms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  platform VARCHAR(100) UNIQUE
);
CREATE TABLE game_platform (
  id INT AUTO_INCREMENT PRIMARY KEY,
  game_id INT,
  platform_id INT,
  FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE,
  FOREIGN KEY (platform_id) REFERENCES platforms(id) ON DELETE CASCADE
);
CREATE TABLE genres (
  id INT AUTO_INCREMENT PRIMARY KEY,
  genre VARCHAR(100) UNIQUE
);
CREATE TABLE game_genre (
  id INT AUTO_INCREMENT PRIMARY KEY,
  game_id INT,
  genre_id INT,
  FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE,
  FOREIGN KEY (genre_id) REFERENCES genres(id) ON DELETE CASCADE
);
CREATE TABLE ratings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  rating VARCHAR(100) UNIQUE NOT NULL
);
-- Example of how to create the relationship
CREATE TABLE game_rating (
  id INT AUTO_INCREMENT PRIMARY KEY,
  game_id INT,
  rating_id INT,
  FOREIGN KEY (game_id) REFERENCES games(id) ON DELETE CASCADE,
  FOREIGN KEY (rating_id) REFERENCES ratings(id) ON DELETE CASCADE
);