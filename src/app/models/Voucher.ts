import { DateTime } from 'luxon';

interface LatLng {
  latitude: number;
  longitude: number;
}

export interface VoucherData {
  ccpVoucherNumber: string;
  latLng: LatLng;
  dateIssued: string;
  dateExpire: string;
  colonyLocation: string;
}
export class Voucher {
  public readonly ccpVoucherNumber: string;
  public readonly latLng: LatLng;
  public readonly dateIssued: DateTime;
  public readonly dateExpire: DateTime;
  public readonly colonyLocation: string;

  constructor(voucherData: VoucherData) {
    this.ccpVoucherNumber = voucherData.ccpVoucherNumber;
    this.latLng = voucherData.latLng;
    this.dateExpire = DateTime.fromISO(voucherData.dateExpire);
    this.dateIssued = DateTime.fromISO(voucherData.dateIssued);
    this.colonyLocation = voucherData.colonyLocation;
  }
}
