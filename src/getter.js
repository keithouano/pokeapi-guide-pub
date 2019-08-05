const axios = require("axios")
const cache = require("./cache")

const { values } = require("./config.js")
const { kanto } = require('./locations.js')

let options = {
  baseURL: `${values.protocol}${values.hostName}/`,
  timeout: values.timeout
}

exports.fetchData = async (key, endpoint) => {
  const url = `${values.protocol}${values.hostName}${values.versionPath}${endpoint}/${key}/`
  try {
    // retrive information from cached text
    const localCache = cache.get(key)
    if (localCache !== null && !localCache.isExpired) {
      console.log('--CACHED DATA--')
      return localCache
    }

    console.log('--FECTHED DATA--')
    response = await axios.get(url, options)
    
    // if there is an error
    if (response.statusCode !== undefined &&
        response.statusCode !== 200) {
      const { status, statusText } = response
      throw { status, statusText }
    } else {
      // • Display only the following information
      // - Pokemon ID
      // - Pokemon Name
      // - Pokemon Type(s)
      // - Pokemon stats (speed, def, etc etc)
      const { 
        data: {
          id,
          name,
          types,
          location_area_encounters,
          stats 
        } 
      } = response

      // - Pokemon Encounter Location(s) and method(s) in kanto only
      //     - If there are no locations in kanto, display ‘-’
      encounters_res = await axios.get(location_area_encounters, options)
      let encounter_loc = null
      if (encounters_res) {
        encounter_loc = encounters_res.data
        .map(enctr => ({
          location_area: enctr.location_area.name,
          methods: enctr.version_details
            .map(d => d.encounter_details
              .map(ed =>
                ed.method.name
              )
            )
        }))
      //  **  show all encounters located in kanto only
      // [kanto] array assumes to contain all locations under 'kanto' region
        .filter(f => kanto.includes(f.location_area))
      }

      // compose minimum data to be saved and fetch later
      const pokemon = {
        id,
        name,
        types: types.map(t => ({ type: t.type.name})),
        stats: stats.map(s => ({ name: s.stat.name, value: s.base_stat})),
        encounters: encounter_loc
      }

      // cache the result object in text file
      // for upsert handling set indexing as {id}-{name}: ex { "1-bulbasaur" : ... }
      cache.set( `${id}-${name}`, pokemon, values.expire)

      return pokemon
    }
  } catch (error) {
    throw error.message
  }
}
