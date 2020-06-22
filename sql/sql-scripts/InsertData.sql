INSERT INTO games (
title, platform, release_year, box_art, synopsis, description, trailer, hero, developer
) VALUES (
"Final Fantasy VII Remake", 
"Playstation 4", 
2020, 
"https://images.igdb.com/igdb/image/upload/t_cover_big/co1qxr.jpg", 
"A spectacular re-imagining of one of the most visionary games ever,  Final Fantasy VII Remake rebuilds and expands the legendary RPG for today.  The first game in this project will be set in the eclectic city of Midgar and presents a fully standalone gaming experience.", 
"Description: The world has fallen under the control of the Shinra Electric Power Company, a shadowy corporation controlling the planet’s very life force as mako energy. In the sprawling city of Midgar, an anti-Shinra organization calling themselves  Avalanche have stepped up their resistance. Cloud Strife, a former member of Shinra’s elite SOLDIER unit now turned mercenary, lends his aid to the group, unaware of the epic consequences that await him.", 
"https://www.youtube.com/embed/QLYyWAqTTAo", 
"https://res.cloudinary.com/mattthebunny/image/upload/v1592439122/3652347-3532489-final_fantasy_7_remake_fkskvz.jpg", 
"Square Enix"
);

INSERT INTO reviews (review, game_id) VALUES ("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, debitis atque tenetur quos necessitatibus quod libero eveniet ipsum quaerat voluptates magni illo", 1)


/* INSERT INTO characters (first_name, last_name, nickname, race, homeland)
VALUES
    ('Kaladin', '', 'Stormblessed', 'Alethi', 'Alethkar'),
    ('Dalinar', 'Kholin', 'Blackthorn', 'Alethi', 'Alethkar'),
    ('Shallan', 'Davar', '', 'Veden', 'Jah Keved'),
    ('Adolin', 'Kholin', '', 'Alethi', 'Alethkar'),
    ('Jasnah', 'Kholin', '', 'Alethi', 'Alethkar'),
    ('Odium', '', '', 'Unknown', 'Unknown'),
    ('Hoid', '', 'Wit', 'Unknown', 'Unknown'),
    ('Rock', '', 'Horneater', 'Unkalaki', 'Unkalaki'),
    ('Taravangian', '', '', 'Frostlandian', 'Frostlands'),
    ('Lift', '', '', 'Reshi', 'Reshi Isles'),
    ('Szeth', 'Son son Vollano', 'Truthless of Shinovar', 'Shin', 'Shinovar'),
    ('Eshonai', '', '', 'Parshendi', 'Narak'),
    ('Venli', '', '', 'Parshendi', 'Narak'),
    ('Mraize', '', '', 'Thaylen', 'Theylenah'),
    ('Iyatil', '', '', 'Southern Scadrian', 'Silverlight'),
    ('Meridas', 'Amaram', '', 'Alethi', 'Alethkar'),
    ('Adritagia', '', '', 'Kharbranthian', 'Kharbranth'),
    ('Graves', '', '', 'Alethi', 'Alethkar');


INSERT INTO spren (type, name)
VALUES
    ('Honorspren', 'Sylphrena'),
    ('Angerspren', ''),
    ('Awespren', ''),
    ('Fearspren', ''),
    ('Windspren', ''),
    ('Gloryspren', ''),
    ('Voidspren', 'Glys'),
    ('Lightweaverspren', 'Pattern'),
    ('Bondsmithspren', 'Stormfather'),
    ('Edgedancerspren', 'Wyndle'),
    ('Inkspren', 'Ivory'),
    ('Lightspren', 'Timber');


INSERT INTO knight_radiant (kr_order, spren_id, char_id)
VALUES
    ('Windrunners', '1', '1'),
    ('Edgedancers', '10', '10'),
    ('Lightweavers', '3', '8'),
    ('Elsecallers', '11', '5'),
    ('Bondsmiths', '9', '2'),
    ('Willshapers', '12', '13');


INSERT INTO allegiance (name)
VALUES
    ('Knights Radiant'),
    ('Ghostbloods'),
    ('Voidbringers'),
    ('The Diagram');


INSERT INTO ability (type)
VALUES
    ('Adhesion'),
    ('Gravitation'),
    ('Division'),
    ('Abrasion'),
    ('Progression'),
    ('Illumination'),
    ('Transformation'),
    ('Transportation'),
    ('Illumination'),
    ('Tension'),
    ('Cohesion'),
    ('Dueling'),
    ('Artist'),
    ('Espionage'),
    ('Battlefield Tactics');


INSERT INTO char_abilities (char_id, ability_id)
VALUES
    (1, 1),
    (1, 2),
    (2, 1),
    (2, 10),
    (3, 6),
    (3, 9),
    (4, 7),
    (4, 8),
    (10, 4),
    (10, 5),
    (11, 2),
    (11, 3);


INSERT INTO char_allegiances (char_id, allegiance_id)
VALUES
    (1, 1),
    (2, 1),
    (3, 1),
    (3, 2),
    (4, 1),
    (5, 1),
    (6, 3),
    (7, 1),
    (8, 1),
    (9, 4),
    (10, 1),
    (11, 1),
    (12, 3),
    (13, 3),
    (14, 2),
    (15, 2),
    (16, 3),
    (17, 4),
    (18, 4); */
