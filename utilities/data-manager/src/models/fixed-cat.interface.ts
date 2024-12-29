import { LatLng } from './lat-lng.interface'
import { DateTime } from 'luxon'

export interface FixedCat {
  ccpVoucherNumber: string
  latLng: LatLng | undefined
  dateIssued: DateTime
  colonyLocation: string
}
