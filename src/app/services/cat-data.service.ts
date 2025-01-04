import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { DateTime } from 'luxon';
import _ from 'lodash';

interface FixedCatsDatastore {
  lastModified: string;
  fixedCats: Record<string, FixedCatRecord>;
}
interface FixedCatRecord {
  ccpVoucherNumber: string;
  latLng: LatLng;
  dateIssued: string;
  dateExpire: string;
  colonyLocation: string;
}
interface LatLng {
  latitude: number;
  longitude: number;
}
export interface FixedCat {
  ccpVoucherNumber: string;
  latLng: LatLng;
  dateIssued: DateTime;
  dateExpire: DateTime;
  colonyLocation: string;
}

@Injectable({
  providedIn: 'root',
})
export class CatDataService {
  private catsSubject = new BehaviorSubject<FixedCat[]>([]);
  private lastModifiedSubject = new BehaviorSubject<DateTime | null>(null);
  public cats$ = this.catsSubject.asObservable();
  public lastModified$ = this.lastModifiedSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadCatData();
  }

  private loadCatData(): void {
    this.http
      .get<FixedCatsDatastore>('assets/fixed-cats.json')
      .subscribe((data) => {
        this.catsSubject.next(this.transformData(data));
      });
  }
  private transformData(data: FixedCatsDatastore): FixedCat[] {
    return _.chain(data.fixedCats)
      .values()
      .map((fixedCatRecord: FixedCatRecord) => {
        return {
          ccpVoucherNumber: fixedCatRecord.ccpVoucherNumber,
          latLng: fixedCatRecord.latLng,
          dateIssued: DateTime.fromISO(fixedCatRecord.dateIssued),
          dateExpire: DateTime.fromISO(fixedCatRecord.dateExpire),
          colonyLocation: fixedCatRecord.colonyLocation,
        };
      })
      .value();
  }
}
