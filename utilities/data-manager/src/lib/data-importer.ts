import { readFileSync } from 'fs'
import { FixedCat } from '../models/fixed-cat.interface'
import { Voucher } from '../models/voucher.interface'
import { DateTime } from 'luxon'

const DATE_FORMAT = 'MM/dd/yy'

export class DataImporter {
  constructor(private readonly importFile: string) {}
  import(): FixedCat[] {
    const data = readFileSync(this.importFile, 'utf-8')
    const vouchers = JSON.parse(data) as Voucher[]
    return vouchers.map((voucher) => this.transformVoucher(voucher))
  }

  private transformVoucher(voucher: Voucher): FixedCat {
    return {
      ccpVoucherNumber: voucher.CcpVoucherNumber,
      dateIssued: DateTime.fromFormat(voucher.DateIssued, DATE_FORMAT),
      colonyLocation: voucher.ColonyLocation,
      latLng: undefined,
    }
  }
}
