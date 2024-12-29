import { DateTime } from 'luxon'
import { FixedCat } from './fixed-cat.interface'

export interface Datastore {
  lastModified: DateTime
  fixedCats: Record<string, FixedCat>
}
