import { readFileSync, writeFileSync } from 'fs'
import { Datastore } from '../models/datastore.interface'
import { FixedCat } from '../models/fixed-cat.interface'
import { Geocoder } from './geocoder'
import { DateTime } from 'luxon'

export class FixedCatDataStore {
  private datastore: Datastore
  private geocoder: Geocoder = new Geocoder()
  constructor(private readonly sourceFile: string) {
    this.sourceFile = sourceFile
    const data = readFileSync(this.sourceFile, 'utf-8')
    this.datastore = JSON.parse(data)
  }

  async update(fixedCats: FixedCat[]): Promise<void> {
    let hasChanged = false
    for (const fixedCat of fixedCats) {
      if (this.datastore.fixedCats[fixedCat.ccpVoucherNumber]) {
        // If we already have this record saved, ignore it
        continue
      }
      if (fixedCat.latLng === undefined) {
        fixedCat.latLng = await this.geocoder.geocodeAddress(
          fixedCat.colonyLocation
        )
      }
      this.datastore.fixedCats[fixedCat.ccpVoucherNumber] = fixedCat
      hasChanged = true
    }
    if (hasChanged) {
      this.datastore.lastModified = DateTime.utc()
      this.save()
    }
  }

  private save(): void {
    writeFileSync(this.sourceFile, JSON.stringify(this.datastore))
  }
}
