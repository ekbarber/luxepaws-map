import axios from 'axios'
import { LatLng } from '../models/lat-lng.interface'

const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json'
export class Geocoder {
  private apiKey: string = process.env.GOOGLE_API_KEY
  public async geocodeAddress(address: string): Promise<LatLng | undefined> {
    if (!this.apiKey) {
      throw new Error('GOOGLE_API_KEY is not set')
    }
    const response = await axios.get(BASE_URL, {
      params: {
        address,
        key: this.apiKey,
      },
    })

    const geocodingResult = response.data?.results
    if (!geocodingResult) {
      console.warn(`no geocoding result for ${address}`)
      return undefined
    }
    const location = geocodingResult[0]?.geometry?.location
    if (!location) {
      console.warn(`could not determine location for ${address}`)
      return undefined
    }
    return {
      latitude: location.lat,
      longitude: location.lng,
    }
  }
}
