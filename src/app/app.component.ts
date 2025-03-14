import { Component } from '@angular/core';
import { MapComponent } from './components/map/map.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [MapComponent],
})
export class AppComponent {}
