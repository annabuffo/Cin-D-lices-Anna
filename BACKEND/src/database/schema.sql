DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS recipes CASCADE;
DROP TABLE IF EXISTS media CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS users CASCADE;


-------------------------------------------------
-- Table : users
-------------------------------------------------

CREATE TABLE users (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'user'
        CHECK (role IN ('user', 'admin')),
    birth_date DATE NOT NULL,
    date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-------------------------------------------------
-- Table : categories
-------------------------------------------------

CREATE TABLE categories (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    description TEXT
);

-------------------------------------------------
-- Table : media
-------------------------------------------------

CREATE TABLE media (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image_url VARCHAR(255),
    type VARCHAR(50) NOT NULL
        CHECK (type IN ('film', 'serie')),
    description TEXT,
    release_date DATE
);

-------------------------------------------------
-- Table : recipes
-------------------------------------------------

CREATE TABLE recipes (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    ingredients TEXT NOT NULL,
    instructions TEXT NOT NULL,
    difficulte VARCHAR(50),
    image_url VARCHAR(255),
    prep_time INTEGER,
    cook_time INTEGER,
    date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    user_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,
    media_id INTEGER NOT NULL,

    FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    FOREIGN KEY (category_id)
        REFERENCES categories(id)
        ON DELETE CASCADE,

    FOREIGN KEY (media_id)
        REFERENCES media(id)
        ON DELETE CASCADE
);

-------------------------------------------------
-- Table : comments
-------------------------------------------------

CREATE TABLE comments (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    content TEXT NOT NULL,
    date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    user_id INTEGER NOT NULL,
    recipe_id INTEGER NOT NULL,

    FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    FOREIGN KEY (recipe_id)
        REFERENCES recipes(id)
        ON DELETE CASCADE
);

-------------------------------------------------
-- Données initiales : catégories
-------------------------------------------------

INSERT INTO categories (name, description) VALUES
('Entrée', 'Recettes à servir en entrée'),
('Plat', 'Plats principaux'),
('Dessert', 'Desserts et recettes sucrées'),
('Boisson', 'Boissons');

-------------------------------------------------
-- Données initiales : films et séries
-------------------------------------------------

INSERT INTO media (title, image_url, type, description, release_date) VALUES
('Ratatouille', NULL, 'film', 'Film autour de la cuisine française', '2007-08-01'),
('Harry Potter', NULL, 'film', 'Univers de Harry Potter', '2001-12-05'),
('Friends', NULL, 'serie', 'Série américaine', '1994-09-22'),
('Stranger Things', NULL, 'serie', 'Série fantastique', '2016-07-15');