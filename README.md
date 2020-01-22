# API

- Music database API

## installation

- clone this repo
- install all dependencies `npm install`

## set up database

- setup postgress
- create a database and add the databse name, host and credentials file in `config.json` located in config folder
- install sequelize-cli by running  
  `npm install -g sequelize-cli`
- run migrations
  `sequelize db:migrate`
- seed data
  `sequelize db:seed:all`

## Endpoints

- start the application by running
- `npm start`

### Artists

- Get all Artists
  `localhost:3000/artists`
- Get a single Artists
  `localhost:3000/artists/:artist_id`

### Albums

- get all Albums
  `localhost:3000/albums`
- Get a singleAlbum
  `localhost:3000/albums/:album_id`
- Get Album details(returns all details required to fill the test webpage)
  `localhost:3000/albums/details/:album_id`

### Songs

- Get All songs
  `localhost:3000/songs`

- Get single song
  `localhost:3000/songs/:song_id`

- Get album's songs
  `localhost:3000/songs/album/:album_id`

- Get Artists's songs
  `localhost:3000/songs/artist/:artist_id`

## Tests

- To run tests create a test datbase and add the test database credentials in the `cofing.json` file located in config folder
- Then run this command
  `npm test`
