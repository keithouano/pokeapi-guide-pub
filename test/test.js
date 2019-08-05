var Pokeapi = require("../src/index.js");
var chai = require('chai'),
  expect = chai.expect;

// order matters: github.com/chaijs/chai-things/issues/4#issuecomment-87801365
chai.use(require("chai-things"));
chai.use(require("chai-as-promised"));

describe("Pokeapi", function() {
  var promise,
    P = new Pokeapi();
  this.timeout(5000);

  // test resource endpoint

  describe("P", function() {
    it("should be an object", function() {
      return expect(P).to.be.an('object')
    });
    it("should have getPokemonByNameOrId function", function() {
      return expect(P).to.have.property('getPokemonByNameOrId')
    });
  });

  describe(".getPokemonByNameOrId(key: int)", function() {
    before(function() {
      promise = P.getPokemonByNameOrId(1);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getPokemonByNameOrId(key: string)", function() {
    before(function() {
      promise = P.getPokemonByNameOrId('wartortle');
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getPokemonByNameOrId(key: string)", function() {
    before(function() {
      promise = P.getPokemonByNameOrId('unknown');
    });
    it("should fail", function() {
      return expect(promise).rejected;
    });
  });

});
