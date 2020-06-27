INSERT INTO games (
    title,
    platform,
    release_year,
    box_art,
    synopsis,
    description,
    trailer,
    hero,
    developer
  )
VALUES (
    "Final Fantasy VII Remake",
    "Playstation 4",
    2020,
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co1qxr.jpg",
    "A spectacular re-imagining of one of the most visionary games ever,  Final Fantasy VII Remake rebuilds and expands the legendary RPG for today.  The first game in this project will be set in the eclectic city of Midgar and presents a fully standalone gaming experience.",
    "Description: The world has fallen under the control of the Shinra Electric Power Company, a shadowy corporation controlling the planet’s very life force as mako energy. In the sprawling city of Midgar, an anti-Shinra organization calling themselves  Avalanche have stepped up their resistance. Cloud Strife, a former member of Shinra’s elite SOLDIER unit now turned mercenary, lends his aid to the group, unaware of the epic consequences that await him.",
    "https://www.youtube.com/embed/QLYyWAqTTAo",
    "https://res.cloudinary.com/mattthebunny/image/upload/v1592439122/3652347-3532489-final_fantasy_7_remake_fkskvz.jpg",
    "Square Enix"
  ),
  (
    "Super Mario Bros.",
    "Nintendo(nes)",
    1985,
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co2362.jpg",
    "Super Mario Bros. is the first ever platform adventure for the Mario Brothers. It shifted the gameplay away from its single-screen arcade predecessor, Mario Bros., and instead featured side-scrolling platformer levels. While not the first game of the Mario franchise, Super Mario Bros. is the most iconic, and introduced various series staples, from power-ups, to classic enemies like Little Goombas, to the basic premise of rescuing Princess Toadstool from King Koopa.",
    "",
    "https://www.youtube.com/embed/hXar_5soj94",
    "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/virtual_console_nintendo_3ds_7/SI_3DSVC_SuperMarioBros.jpg",
    "Nintendo"
  ),
  (
    "Resident Evil 3",
    "Playstation 4",
    2020,
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co22l7.jpg",
    "Jill Valentine is one of the last remaining people in Raccoon City to witness the atrocities Umbrella performed. To stop her, Umbrella unleashes their ultimate secret weapon: Nemesis! Also includes Resident Evil Resistance, a new 1 vs 4 online multiplayer game set in the Resident Evil universe.",
    "",
    "https://www.youtube.com/embed/Wghn3tYYVNw",
    "https://steamcdn-a.akamaihd.net/steam/apps/952060/header.jpg?t=1591585542",
    "Capcom"
  ),
  (
    "Streets of Rage 4",
    "Playstation 4",
    2020,
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co20pk.jpg",
    "Publisher Dotemu (Wonder Boy, Windjammers 1/2) and developers Lizardcube (Wonder Boy) and Guard Crush Games today revealed Streets of Rage 4, an all-new continuation of SEGA’s iconic arcade brawler series known for its radical fights, jammin’ ‘90s beats and dashing sparring gloves and bandanas.",
    "",
    "https://www.youtube.com/embed/hdsCVmrfrjI",
    "https://www.nintendo.com/content/dam/noa/en_US/games/switch/s/streets-of-rage-4-switch/streets-of-rage-4-switch-hero.jpg",
    "Dotemu"
  ),
  (
    "Cyberpunk 2077",
    "Playstation 4",
    2020,
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co1rft.jpg",
    "Cyberpunk 2077 is a role-playing video game developed and published by CD Projekt. Adapted from the Cyberpunk franchise, the game is an open world, non-linear RPG with an FPS style in which players are able to heavily customize their character to suit their play style. Gun play, exploration, player choice and activities such as hacking are to feature heavily throughout the game with missions, quests and objectives being completed in a variety of different ways. The world will have dynamic weather and a day/night cycle to make it truly immersive.",
    "",
    "https://www.youtube.com/embed/vjF9GgrY9c0",
    "https://image-cdn.essentiallysports.com/wp-content/uploads/20200620215515/cyberpunk-2077-2.jpg",
    "CD Projekt RED"
  );
INSERT INTO reviews (review, game_id)
VALUES (
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, debitis atque tenetur quos necessitatibus quod libero eveniet ipsum quaerat voluptates magni illo",
    1
  ),
  (
    "HODOR ipsum dolor sit amet consectetur, adipisicing elit. Repellat, debitis atque tenetur quos necessitatibus quod libero eveniet ipsum quaerat voluptates magni illo",
    3
  );
/* INSERT INTO users (name, email) VALUES ('Matt', 'matt@gmail.com'), ('Stephanie', 'stephanie@gmail.com'), ('Link', 'link@gmail.com'); */
INSERT INTO themes (type)
VALUES ('Platform'),
  ('Horror'),
  ('kids'),
  ('Fantasy'),
  ('Action'),
  ('Survival');
INSERT INTO game_theme (game_id, theme_id)
VALUES (1, 4),
  (1, 5),
  (2, 1),
  (2, 3),
  (3, 1),
  (3, 3),
  (3, 4),
  (4, 2),
  (4, 6),
  (5, 5);
INSERT INTO platforms (type)
VALUES ('Atari'),
  ('Nintendo (NES)'),
  ('Super Nintendo (SNES)'),
  ('Sega Genesis'),
  ('Nintendo 64'),
  ('Playstation'),
  ('Gamecube'),
  ('Xbox'),
  ('Playstation 2'),
  ('Nintendo Wii'),
  ('Playstation 3'),
  ('Xbox 360'),
  ('Nintendo WiiU'),
  ('Playstation 4'),
  ('Xbox One'),
  ('Nintendo Switch'),
  ('PC'),
  ('Google Stadia');
INSERT INTO game_platform (game_id, platform_id)
VALUES (1, 14),
  (2, 2),
  (3, 17),
  (3, 15),
  (3, 14),
  (4, 14),
  (4, 15),
  (4, 17),
  (4, 16),
  (5, 18),
  (5, 15),
  (5, 17),
  (5, 14);
INSERT INTO genres (type)
VALUES ('Adventure'),
  ('Platform'),
  ('Action'),
  ('Horror'),
  ('Role Playing (RPG)'),
  ('Shooter'),
  ("Beat'em up");
INSERT INTO game_genre (game_id, genre_id)
VALUES (1, 1),
  (1, 5),
  (2, 1),
  (2, 2),
  (3, 4),
  (4, 4),
  (5, 5)
INSERT INTO ratings (rating)
VALUES (0),
  (1),
  (2),
  (3),
  (4),
  (5);
INSERT INTO game_rating (game_id, rating_id)
VALUES (1, 6),
  (2, 6),
  (3, 5),
  (4, 4),
  (5, 4);