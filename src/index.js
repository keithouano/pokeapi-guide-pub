const { fetchData } = require("./getter.js");

class PokeApi {
  constructor() {

  }
  async getPokemonByNameOrId (input) {
    try {
      if (!input) throw new Error('Invalid Input for Pokemon (Name or Id)')
      return fetchData(input, 'pokemon');
    } catch (error) {
      throw error
    }
  };
}

module.exports = PokeApi;
