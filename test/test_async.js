const assert = require('assert');

var Pokeapi = require("../src/index.js");

P = new Pokeapi();

(async () => {
    try {
        berry = await P.getPokemonByNameOrId(1)
        assert.equal(berry.name, 'bulbasaur');
        //process.exit(0);
    } catch (error) {
        console.log(error)
        //process.exit(1);
    }
})()