//Load the file raw-data.json and loop through each entry to get the ColonyLocation// Require the file system module
const fs = require('fs');
const axios = require('axios')
const _ = require('lodash');

const API_KEY = process.env.GOOGLE_API_KEY

const cache = new Map()
const output = []
// Read the JSON file
fs.readFile('../raw-data.json', async (err, data) => {
    if (err) throw err;

    // Parse the data
    let jsonData = JSON.parse(data);

    for(let voucher of jsonData){
      let colonyLocation = voucher.ColonyLocation
      console.log(`Looking up ${colonyLocation}`)

      let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${colonyLocation}&key=${API_KEY}`
      let geocodingResult = await axios.get(url)
      if(geocodingResult.data.results){
        const location = geocodingResult.data.results[0]?.geometry.location
        if(location){
          output.push(_.merge({},{
            Latitude: location.lat,
            Longitude: location.lng
          }, _.pick(voucher, ['CcpVoucherNumber', 'DateIssued', 'DateExpire', 'IsESA', 'ColonyName', 'ColonyLocation', 'VoucherNumber'])))
        }

      }
    }

    fs.writeFileSync('data.json', JSON.stringify(output))
});

async function getLocationForAddress(address){
  if(cache.has(address)){
    return cache.get(address)
  }
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${colonyLocation}&key=${API_KEY}`
  let geocodingResult = await axios.get(url)
  if(geocodingResult.data.results){
    const location = geocodingResult.data.results[0]?.geometry.location
    if(!location){
      return
    }
    const parsedLocation = {
      Latitude: location.lat,
      Longitude: location.lng
    }
    cache.set(address, parsedLocation)
    return parsedLocation
  }
}
