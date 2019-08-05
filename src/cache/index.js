'use strict'

function Cache () {
  const low = require('lowdb')
  const FileSync = require('lowdb/adapters/FileSync')
  const adapter = new FileSync('./src/cache/pokemon_db.text')
  const db = low(adapter)
  db.defaults({ local: {} }).write()

  // get by id or name
  this.get = function(key) {
    const local = db.get('local').value()
    let found = null
    Object.keys(local).forEach(_id => {
      if (local[_id].id === parseInt(key) || local[_id].name === key) {
        found = {
          _id,
          ...local[_id],
          isExpired: local[_id].expire < Date.now()
        }
      }
    })
    return found
  }

  // upsert record and set expiration timestamp
  this.set = function(key, value, time) {
    db
      .set(`local[${key}]`, { 
        ...value,
        expire: time + Date.now(), // Date.now() - 1 // force expired
      })
      .write()
    return value
  }
}

module.exports = new Cache()
module.exports.Cache = Cache
