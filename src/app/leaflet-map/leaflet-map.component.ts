import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Voucher, VoucherData } from '../models/Voucher';
import _ from 'lodash';
import { DateTime } from 'luxon';

interface VoucherDatastore {
  lastModified: string;
  fixedCats: Record<string, VoucherData>;
}

const DTLA_LAT_LNG = new L.LatLng(34.0401279, -118.2895712);
@Component({
  selector: 'app-leaflet-map',
  standalone: true,
  imports: [],
  templateUrl: './leaflet-map.component.html',
  styleUrl: './leaflet-map.component.css',
})
export class LeafletMapComponent implements AfterViewInit {
  @ViewChild('map') private mapContainer!: ElementRef;
  private map: L.Map | undefined;
  lastUpdated: string = '';

  constructor(private http: HttpClient) {}

  async ngAfterViewInit(): Promise<void> {
    this.initMap();
    await this.renderLocations();
  }

  private initMap(): void {
    this.map = L.map(this.mapContainer.nativeElement, {
      center: DTLA_LAT_LNG,
      zoom: 13,
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);
  }

  private async renderLocations(): Promise<void> {
    if (!this.map) {
      console.error('Map is not initialized');
      return;
    }
    const data = await this.getData();
    const bounds: L.LatLngBounds = new L.LatLngBounds(
      undefined as unknown as L.LatLngBoundsLiteral
    );
    data.forEach((item) => {
      var marker = L.marker([
        item.latLng.latitude,
        item.latLng.longitude,
      ]).addTo(this.map as L.Map);
      try {
        bounds.extend(marker.getLatLng());
      } catch (err) {
        console.warn(err);
      }

      marker.bindPopup(`<b>${item.colonyLocation}</b><br>${item.dateIssued}`);
    });
    this.map.fitBounds(bounds, { padding: [20, 20] });
  }
  private async getData(): Promise<Voucher[]> {
    return new Promise<Voucher[]>((resolve, reject) => {
      const data = this.http
        .get<VoucherDatastore>('/assets/fixed-cats.json')
        .subscribe((response) => {
          this.lastUpdated = DateTime.fromISO(
            response.lastModified
          ).toLocaleString();
          resolve(
            _.values(response.fixedCats).map(
              (voucherData) => new Voucher(voucherData)
            )
          );
        });
    });
  }
}
