import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  AfterContentInit,
  OnDestroy,
} from '@angular/core';
import * as L from 'leaflet';
import { CatDataService, FixedCat } from '../../services/cat-data.service';
import { Subscription } from 'rxjs';
import _ from 'lodash';
import { Card } from 'primeng/card';

interface Location {
  latitude: number;
  longitude: number;
  name: string;
}

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const CENTER: [number, number] = [34.053718, -118.2452282];
const DEFAULT_ZOOM = 14;

@Component({
  selector: 'map',
  template: `
    <p-card>
      <div id="map"></div>
    </p-card>
  `,
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [Card],
})
export class MapComponent implements AfterContentInit, OnDestroy {
  private map!: L.Map;
  private catSubscription: Subscription;
  private markers: Array<L.Marker | L.CircleMarker> = [];
  private cats: FixedCat[] = [];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private catDataService: CatDataService
  ) {
    this.catSubscription = this.catDataService.cats$.subscribe((cats) => {
      this.cats = cats;
      if (this.map) {
        this.updateMarkers(cats);
      }
    });
  }

  private updateMarkers(cats: FixedCat[]): void {
    // Clear existing markers
    this.markers.forEach((marker) => marker.remove());
    this.markers = [];

    // Add new markers
    cats.forEach((cat) => {
      if (_.isNil(cat.latLng)) return;

      const customIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div class='marker-pin'></div>`,
        iconSize: [30, 42],
        iconAnchor: [15, 42],
      });

      const marker = L.circleMarker(
        {
          lat: cat.latLng.latitude,
          lng: cat.latLng.longitude,
        },
        {
          radius: 6,
          fillColor: '#746E6C',
          color: '#000',
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8,
        }
      )
        .bindPopup(
          `Location: ${
            cat.colonyLocation
          }<br>Date: ${cat.dateIssued.toLocaleString()}`
        )
        .addTo(this.map);
      this.markers.push(marker);
    });
  }

  private initMap(): void {
    if (!this.map) {
      this.map = L.map('map', {
        center: CENTER,
        zoom: DEFAULT_ZOOM,
      });

      L.tileLayer(TILE_LAYER, {
        attribution: '© OpenStreetMap contributors',
      }).addTo(this.map);

      // Force a resize after map creation
      requestAnimationFrame(() => {
        this.map.invalidateSize();
      });
      // Add initial markers
      this.updateMarkers(this.cats);
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
    this.catSubscription.unsubscribe();
  }
}
