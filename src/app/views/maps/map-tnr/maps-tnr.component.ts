import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  AfterContentInit,
  OnDestroy,
} from '@angular/core';
import { CardBodyComponent, CardComponent } from '@coreui/angular';
import * as L from 'leaflet';

interface Location {
  latitude: number;
  longitude: number;
  name: string;
}

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const CENTER: [number, number] = [34.053718, -118.2452282];
const DEFAULT_ZOOM = 17;

@Component({
  selector: 'maps-tnr',
  templateUrl: './maps-tnr.component.html',
  styleUrls: ['./maps-tnr.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [CardComponent, CardBodyComponent],
})
export class MapsTnrComponent implements AfterContentInit, OnDestroy {
  private map!: L.Map;
  private readonly locations: Location[] = [
    { latitude: 40.7128, longitude: -74.006, name: 'New York' },
    { latitude: 34.0522, longitude: -118.2437, name: 'Los Angeles' },
    { latitude: 41.8781, longitude: -87.6298, name: 'Chicago' },
  ];

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  private initMap(): void {
    if (!this.map) {
      this.map = L.map('map', {
        center: CENTER,
        zoom: DEFAULT_ZOOM,
      });

      L.tileLayer(TILE_LAYER, {
        attribution: '© OpenStreetMap contributors',
      }).addTo(this.map);

      this.locations.forEach((location) => {
        L.marker([location.latitude, location.longitude])
          .bindPopup(location.name)
          .addTo(this.map);
      });

      // Force a resize after map creation
      requestAnimationFrame(() => {
        this.map.invalidateSize();
      });
    }
  }

  ngAfterContentInit(): void {
    const me = this;
    setTimeout(() => {
      me.initMap();
    }, 100);
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }
}
