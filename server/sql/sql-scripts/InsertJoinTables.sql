INSERT INTO game_review (game_id, review_id)
VALUES (1, 2),
  (2, 1),
  (1, 3);
INSERT INTO game_theme (game_id, theme_id)
VALUES (1, 2),
  (1, 8),
  (2, 11),
  (2, 2),
  (3, 2),
  (3, 10),
  (3, 20),
  (3, 21),
  (4, 2),
  (5, 18),
  (5, 13);
INSERT INTO game_platform (game_id, platform_id)
VALUES (1, 42),
  (2, 8),
  (3, 42),
  (3, 43),
  (3, 46),
  (4, 42),
  (4, 43),
  (4, 46),
  (4, 47),
  (5, 42),
  (5, 43),
  (5, 46),
  (5, 47);
INSERT INTO game_genre (game_id, genre_id)
VALUES (1, 1),
  (1, 16),
  (2, 1),
  (2, 10),
  (3, 1),
  (3, 17),
  (4, 6),
  (4, 3),
  (4, 7),
  (5, 16),
  (12, 1),
  (12, 12),
  (12, 10);
INSERT INTO game_rating (game_id, rating_id)
VALUES (1, 6),
  (2, 6),
  (3, 5),
  (4, 4),
  (5, 4),
  (12, 4);
INSERT INTO user_collection (user_id)
VALUES (1);
INSERT INTO user_collection_detail (
    game_id,
    collection_id,
    rank,
    thumbnail,
    status,
    owned
  )
VALUES (
    1,
    1,
    1,
    "https://www.placecage.com/250",
    false,
    true
  );