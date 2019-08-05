## Take-Home Test ##
#### ACE POINTER INFORMATION TECHNOLOGY PTE LTD ####
* Version 1.0.0

### Scenario ###
```
In Kanto, kids are turned loose from their home at the age of 10 to travel across an incredibly safe country alone with their Pokemon. Their mission? To catch them all.

As a retired software engineer living in the region, you have been approached by Professor Oak to assist him in building a digital guide to assist these kids in their travels across the land.

Using the API available at https://pokeapi.co/, design a terminal application to retrieve data about the Pokemon when queried.

The program must have the following functionality:

• Ability to cache the stored information locally (using a text file)
• Ability to search by Pokemon Name or ID.
• Display only the following information
    - Pokemon ID
    - Pokemon Name
    - Pokemon Type(s)
    - Pokemon Encounter Location(s) and method(s) in kanto only
        - If there are no locations in kanto, display ‘-’
    - Pokemon stats (speed, def, etc etc)
• If the stored information is over a week old, the data should be retrieved again from the API. If not, the data should be retrieved from the text file.

The program must also be designed in a object-oriented manner.

No wrapper libraries for PokeAPI are allowed to be used.
```

### Dependencies ###
this api uses a number of open source projects to work properly:

* [Nodejs] - Nodejs.
* [axios] - axios.
* [chalk] - chalk.
* [lowdb] - lowdb.

### Setup and Installation ###
*This project requires **NodeJS** Runtime engine to execute, assuming that you have NodeJS already do the following*
#### 1. unzip file and open the folder in terminal/cmd ####
#### 2. install all project dependencies (optional if node_modules/ folder is not present yet) ####
```
$ npm install
```
#### 3. follow one or more instructions below on how to run the project

## Methods ##
### Find Pokemon By Name Or Id ###

Use **getPokemonByNameOrId** to return data about a specific pokemon.
```js
  var Pokeapi = require("../src/index.js");
    P = new Pokeapi();
    (async () => {
      try {
        pokemon = await P.getPokemonByNameOrId(1)
        assert.equal(pokemon.name, 'bulbasaur');
      } catch (error) {
        console.log(error)
      }
    })()
```

## Run in Terminal Program

Give the **/pokeapi** file executable permissions, and then run it with a new command.
```bash
$ chmod +x ./pokeapi
$ ./pokeapi
```

## Run test

execute test.
```bash
npm run test
```
