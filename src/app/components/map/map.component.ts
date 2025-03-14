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
import { Slider } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { DateTime } from 'luxon';

const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const CENTER: [number, number] = [34.053718, -118.2452282];
const DEFAULT_ZOOM = 14;

@Component({
  selector: 'map',
  template: `
    <p-card>
      <div class="filter-controls">
        <div class="slider-container">
          <div class="date-labels">
            <span>{{ getFormattedDate(selectedStartDate) }}</span>
            <span>{{ getFormattedDate(selectedEndDate) }}</span>
          </div>
          <p-slider
            [(ngModel)]="rangeValues"
            [range]="true"
            [min]="0"
            [max]="100"
            (onChange)="onRangeChange($event)"
          >
          </p-slider>
        </div>
      </div>
      <div id="map"></div>
    </p-card>
  `,
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true,
  imports: [Card, Slider, FormsModule],
})
export class MapComponent implements AfterContentInit, OnDestroy {
  private map!: L.Map;
  private catSubscription: Subscription;
  private markers: Array<L.Marker | L.CircleMarker> = [];
  private cats: FixedCat[] = [];
  private dateRange: { start: DateTime; end: DateTime } | null = null;
  rangeValues: number[] = [0, 100];
  selectedStartDate: DateTime | null = null;
  selectedEndDate: DateTime | null = null;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private catDataService: CatDataService
  ) {
    console.log('MapComponent constructor');
    this.catSubscription = this.catDataService.cats$.subscribe((cats) => {
      this.cats = cats;
      this.initializeDateRange(cats);
      if (this.map) {
        this.updateMarkers(this.filterCatsByDateRange(cats));
      }
    });
  }
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }

  private initializeDateRange(cats: FixedCat[]): void {
    if (cats.length === 0) return;

    const dates = cats.map((cat) => cat.dateIssued);

    const start = _.min(dates) || DateTime.now();
    const end = _.max(dates) || DateTime.now();
    this.dateRange = { start, end };
    this.updateSelectedDatesFromRange();
  }

  private updateSelectedDatesFromRange(): void {
    if (!this.dateRange) return;

    const { start, end } = this.dateRange;
    const totalRange = end.diff(start).toMillis();

    this.selectedStartDate = DateTime.fromMillis(
      start.toMillis() + (this.rangeValues[0] / 100) * totalRange
    );

    this.selectedEndDate = DateTime.fromMillis(
      start.toMillis() + (this.rangeValues[1] / 100) * totalRange
    );
  }

  getFormattedDate(date: DateTime | null | undefined): string {
    return date ? date.toLocaleString() : 'Select date';
  }

  onRangeChange(event: any): void {
    this.updateSelectedDatesFromRange();
    this.updateMarkers(this.filterCatsByDateRange(this.cats));
  }

  private filterCatsByDateRange(cats: FixedCat[]): FixedCat[] {
    if (!this.selectedStartDate || !this.selectedEndDate) return cats;

    return cats.filter((cat) => {
      const catDate = cat.dateIssued;
      return (
        catDate >= this.selectedStartDate! &&
        catDate <= this.selectedEndDate!
      );
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
    console.log('Initializing map');
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

  ngAfterViewInit(): void {
    console.log('MapComponent ngAfterViewInit');
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
