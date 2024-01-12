import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-leaflet-map',
  standalone: true,
  imports: [],
  templateUrl: './leaflet-map.component.html',
  styleUrl: './leaflet-map.component.css'
})
export class LeafletMapComponent implements AfterViewInit{
  @ViewChild('map') private mapContainer!: ElementRef;
  private map: L.Map | undefined

  ngAfterViewInit(): void{
    this.initMap();
  }

  private initMap():void{
    this.map = L.map(this.mapContainer.nativeElement, {
      center: [51.505, -0.09],
      zoom: 13
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);
    const data = this.getData()
    const bounds: L.LatLngBounds = new L.LatLngBounds(undefined as unknown as L.LatLngBoundsLiteral)
    data.forEach(item => {
        if(item.Latitude === 'Error' || item.Latitude === ""){
            return
        }
        var marker = L.marker([Number(item.Latitude), Number(item.Longitude)]).addTo(this.map as L.Map);
        try{
            bounds.extend(marker.getLatLng())
        }catch(err){
            console.warn(err)
        }

        marker.bindPopup(`<b>${item.ColonyLocation}</b><br>${item.DateIssued}`);
    });
    this.map.fitBounds(bounds, { padding: [20, 20] });
  }

  private getData(): Array<any>{
    return [
      {
        "ColonyLocation": "1000 W VIN SCULLY AVE, 90012",
        "IsESA": "",
        "DateIssued": "2023-12-14",
        "DateExpire": "12/28/23",
        "Latitude": "34.0717682",
        "Longitude": "-118.2457099"
      },
      {
        "ColonyLocation": "336 N ROBINSON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-12-14",
        "DateExpire": "12/28/23",
        "Latitude": "34.0765434",
        "Longitude": "-118.2810452"
      },
      {
        "ColonyLocation": "PARK VIEW ST AT MIRAMAR ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-12-14",
        "DateExpire": "12/28/23",
        "Latitude": "34.0654932",
        "Longitude": "-118.2756105"
      },
      {
        "ColonyLocation": "2250 N GLOVER PL, 90031",
        "IsESA": "",
        "DateIssued": "2023-12-14",
        "DateExpire": "12/28/23",
        "Latitude": "34.0904901",
        "Longitude": "-118.2365614"
      },
      {
        "ColonyLocation": "MIRAMAR ST AT BONNIE BRAE ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-12-13",
        "DateExpire": "12/27/23",
        "Latitude": "34.0631414",
        "Longitude": "-118.2693655"
      },
      {
        "ColonyLocation": "4027 W CLAYTON AVE, 90027",
        "IsESA": "",
        "DateIssued": "2023-12-13",
        "DateExpire": "12/27/23",
        "Latitude": "34.1002021",
        "Longitude": "-118.279533"
      },
      {
        "ColonyLocation": "4027 W CLAYTON AVE, 90027",
        "IsESA": "",
        "DateIssued": "2023-12-13",
        "DateExpire": "12/27/23",
        "Latitude": "34.1002021",
        "Longitude": "-118.279533"
      },
      {
        "ColonyLocation": "4027 W CLAYTON AVE, 90027",
        "IsESA": "",
        "DateIssued": "2023-12-13",
        "DateExpire": "12/27/23",
        "Latitude": "34.1002021",
        "Longitude": "-118.279533"
      },
      {
        "ColonyLocation": "1422 W CALUMET AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-12-13",
        "DateExpire": "12/27/23",
        "Latitude": "34.0690813",
        "Longitude": "-118.2563901"
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-12-13",
        "DateExpire": "12/27/23",
        "Latitude": "34.0763675",
        "Longitude": "-118.2868363"
      },
      {
        "ColonyLocation": "OLYMPIC BLVD AT SANTEE ST, 90015",
        "IsESA": "",
        "DateIssued": "2023-12-13",
        "DateExpire": "12/27/23",
        "Latitude": "34.0388915",
        "Longitude": "-118.2549866"
      },
      {
        "ColonyLocation": "OLYMPIC BLVD AT SANTEE ST, 90015",
        "IsESA": "",
        "DateIssued": "2023-12-13",
        "DateExpire": "12/27/23",
        "Latitude": "34.0388915",
        "Longitude": "-118.2549866"
      },
      {
        "ColonyLocation": "531 S SAN JULIAN ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "34.0438891",
        "Longitude": "-118.2459468"
      },
      {
        "ColonyLocation": "531 S SAN JULIAN ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "34.0438891",
        "Longitude": "-118.2459468"
      },
      {
        "ColonyLocation": "531 S SAN JULIAN ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "34.0438891",
        "Longitude": "-118.2459468"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "1850 W 60TH ST, 90047",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "33.9848841",
        "Longitude": "-118.3110203"
      },
      {
        "ColonyLocation": "KINGSWELL AVE AT RODNEY DR, 90027",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "34.1026918",
        "Longitude": "-118.2896099"
      },
      {
        "ColonyLocation": "KINGSWELL AVE AT RODNEY DR, 90027",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "34.1026918",
        "Longitude": "-118.2896099"
      },
      {
        "ColonyLocation": "KINGSWELL AVE AT RODNEY DR, 90027",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "34.1026918",
        "Longitude": "-118.2896099"
      },
      {
        "ColonyLocation": "KINGSWELL AVE AT RODNEY DR, 90027",
        "IsESA": "",
        "DateIssued": "2023-12-09",
        "DateExpire": "12/23/23",
        "Latitude": "34.1026918",
        "Longitude": "-118.2896099"
      },
      {
        "ColonyLocation": "623 N BOYLSTON ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-12-07",
        "DateExpire": "12/21/23",
        "Latitude": "34.0673453",
        "Longitude": "-118.2506751"
      },
      {
        "ColonyLocation": "623 N BOYLSTON ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-12-07",
        "DateExpire": "12/21/23",
        "Latitude": "34.0673453",
        "Longitude": "-118.2506751"
      },
      {
        "ColonyLocation": "623 N BOYLSTON ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-12-07",
        "DateExpire": "12/21/23",
        "Latitude": "34.0673453",
        "Longitude": "-118.2506751"
      },
      {
        "ColonyLocation": "LEXINGTON AVE AT ST ANDREWS PL, 90038",
        "IsESA": "",
        "DateIssued": "2023-12-07",
        "DateExpire": "12/21/23",
        "Latitude": "34.0927869",
        "Longitude": "-118.3109289"
      },
      {
        "ColonyLocation": "LEXINGTON AVE AT ST ANDREWS PL, 90038",
        "IsESA": "",
        "DateIssued": "2023-12-07",
        "DateExpire": "12/21/23",
        "Latitude": "34.0927869",
        "Longitude": "-118.3109289"
      },
      {
        "ColonyLocation": "VENDOME ST AT COUNCIL ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-12-07",
        "DateExpire": "12/21/23",
        "Latitude": "34.0733429",
        "Longitude": "-118.281247"
      },
      {
        "ColonyLocation": "LACLEDE AVE AT WILLIMET AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-12-07",
        "DateExpire": "12/21/23",
        "Latitude": "34.1323262",
        "Longitude": "-118.2667303"
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-12-07",
        "DateExpire": "12/21/23",
        "Latitude": "34.0763675",
        "Longitude": "-118.2868363"
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-12-07",
        "DateExpire": "12/21/23",
        "Latitude": "34.0763675",
        "Longitude": "-118.2868363"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "AVENUE 50 AT RANGE VIEW AVE, 90042",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.1240656",
        "Longitude": "-118.2061919"
      },
      {
        "ColonyLocation": "2901 W LOS FELIZ BLVD, 90039",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.1290149",
        "Longitude": "-118.2638085"
      },
      {
        "ColonyLocation": "3840 W SENECA AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.1236405",
        "Longitude": "-118.2609078"
      },
      {
        "ColonyLocation": "4196 E YORK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.1234752",
        "Longitude": "-118.2268512"
      },
      {
        "ColonyLocation": "4196 E YORK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.1234752",
        "Longitude": "-118.2268512"
      },
      {
        "ColonyLocation": "4196 E YORK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.1234752",
        "Longitude": "-118.2268512"
      },
      {
        "ColonyLocation": "8TH ST AT SPENCE ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0205055",
        "Longitude": "-118.2024047"
      },
      {
        "ColonyLocation": "1531 N RICARDO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0610815",
        "Longitude": "-118.1980399"
      },
      {
        "ColonyLocation": "AVENUE 50 AT RANGE VIEW AVE, 90042",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.1240656",
        "Longitude": "-118.2061919"
      },
      {
        "ColonyLocation": "CORONADO ST at TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0722039",
        "Longitude": "-118.2738954"
      },
      {
        "ColonyLocation": "VENDOME ST AT BEVERLY BLVD, 90057",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0718356",
        "Longitude": "-118.2822163"
      },
      {
        "ColonyLocation": "VENDOME ST AT BEVERLY BLVD, 90057",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0718356",
        "Longitude": "-118.2822163"
      },
      {
        "ColonyLocation": "VENDOME ST AT BEVERLY BLVD, 90057",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0718356",
        "Longitude": "-118.2822163"
      },
      {
        "ColonyLocation": "2250 N GLOVER PL, 90031",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0904901",
        "Longitude": "-118.2365614"
      },
      {
        "ColonyLocation": "DILLON ST AT BEVERLY BLVD, 90057",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0722348",
        "Longitude": "-118.2831319"
      },
      {
        "ColonyLocation": "DILLON ST AT BEVERLY BLVD, 90057",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0722348",
        "Longitude": "-118.2831319"
      },
      {
        "ColonyLocation": "DILLON ST AT BEVERLY BLVD, 90057",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0722348",
        "Longitude": "-118.2831319"
      },
      {
        "ColonyLocation": "TEMPLE ST AT NORTH BROADWAY, 90012",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.055716",
        "Longitude": "-118.2436084"
      },
      {
        "ColonyLocation": "807 E 8TH ST, 90021",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0369861",
        "Longitude": "-118.2469813"
      },
      {
        "ColonyLocation": "1129 W BELLEVUE AVE, 90012",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0676319",
        "Longitude": "-118.251845"
      },
      {
        "ColonyLocation": "1129 W BELLEVUE AVE, 90012",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0676319",
        "Longitude": "-118.251845"
      },
      {
        "ColonyLocation": "1129 W BELLEVUE AVE, 90012",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0676319",
        "Longitude": "-118.251845"
      },
      {
        "ColonyLocation": "1129 W BELLEVUE AVE, 90012",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0676319",
        "Longitude": "-118.251845"
      },
      {
        "ColonyLocation": "1129 W BELLEVUE AVE, 90012",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0676319",
        "Longitude": "-118.251845"
      },
      {
        "ColonyLocation": "5020 E SHIPLEY GLEN DR, 90042",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.1103449",
        "Longitude": "-118.205072"
      },
      {
        "ColonyLocation": "5020 E SHIPLEY GLEN DR, 90042",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.1103449",
        "Longitude": "-118.205072"
      },
      {
        "ColonyLocation": "5020 E SHIPLEY GLEN DR, 90042",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.1103449",
        "Longitude": "-118.205072"
      },
      {
        "ColonyLocation": "5020 E SHIPLEY GLEN DR, 90042",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.1103449",
        "Longitude": "-118.205072"
      },
      {
        "ColonyLocation": "5020 E SHIPLEY GLEN DR, 90042",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.1103449",
        "Longitude": "-118.205072"
      },
      {
        "ColonyLocation": "5020 E SHIPLEY GLEN DR, 90042",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.1103449",
        "Longitude": "-118.205072"
      },
      {
        "ColonyLocation": "219 S AVENUE 18, 90031",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0709222",
        "Longitude": "-118.222317"
      },
      {
        "ColonyLocation": "219 S AVENUE 18, 90031",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0709222",
        "Longitude": "-118.222317"
      },
      {
        "ColonyLocation": "219 S AVENUE 18, 90031",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0709222",
        "Longitude": "-118.222317"
      },
      {
        "ColonyLocation": "219 S AVENUE 18, 90031",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0709222",
        "Longitude": "-118.222317"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-12-03",
        "DateExpire": "12/17/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "355 N PARKMAN AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-11-29",
        "DateExpire": "12/13/23",
        "Latitude": "34.0757728",
        "Longitude": "-118.2778393"
      },
      {
        "ColonyLocation": "355 N PARKMAN AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-11-29",
        "DateExpire": "12/13/23",
        "Latitude": "34.0757728",
        "Longitude": "-118.2778393"
      },
      {
        "ColonyLocation": "TEMPLE ST AT HILL ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-11-29",
        "DateExpire": "12/13/23",
        "Latitude": "34.0564992",
        "Longitude": "-118.2445046"
      },
      {
        "ColonyLocation": "TEMPLE ST AT HILL ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-11-29",
        "DateExpire": "12/13/23",
        "Latitude": "34.0564992",
        "Longitude": "-118.2445046"
      },
      {
        "ColonyLocation": "3840 W SENECA AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-11-29",
        "DateExpire": "12/13/23",
        "Latitude": "34.1236405",
        "Longitude": "-118.2609078"
      },
      {
        "ColonyLocation": "123 N DILLON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-11-29",
        "DateExpire": "12/13/23",
        "Latitude": "34.0730042",
        "Longitude": "-118.2829624"
      },
      {
        "ColonyLocation": "123 N DILLON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-11-29",
        "DateExpire": "12/13/23",
        "Latitude": "34.0730042",
        "Longitude": "-118.2829624"
      },
      {
        "ColonyLocation": "123 N DILLON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-11-29",
        "DateExpire": "12/13/23",
        "Latitude": "34.0730042",
        "Longitude": "-118.2829624"
      },
      {
        "ColonyLocation": "123 N DILLON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-11-29",
        "DateExpire": "12/13/23",
        "Latitude": "34.0730042",
        "Longitude": "-118.2829624"
      },
      {
        "ColonyLocation": "1711 W MIRAMAR ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-11-29",
        "DateExpire": "12/13/23",
        "Latitude": "34.0620322",
        "Longitude": "-118.2678055"
      },
      {
        "ColonyLocation": "SAN PEDRO ST at WASHINGTON BLVD, 90015",
        "IsESA": "",
        "DateIssued": "2023-11-22",
        "DateExpire": "12/06/23",
        "Latitude": "34.0276361",
        "Longitude": "-118.2574691"
      },
      {
        "ColonyLocation": "SAN PEDRO ST at WASHINGTON BLVD, 90015",
        "IsESA": "",
        "DateIssued": "2023-11-22",
        "DateExpire": "12/06/23",
        "Latitude": "34.0276361",
        "Longitude": "-118.2574691"
      },
      {
        "ColonyLocation": "SAN PEDRO ST at WASHINGTON BLVD, 90015",
        "IsESA": "",
        "DateIssued": "2023-11-22",
        "DateExpire": "12/06/23",
        "Latitude": "34.0276361",
        "Longitude": "-118.2574691"
      },
      {
        "ColonyLocation": "233 S HOBART BLVD, 90004",
        "IsESA": "",
        "DateIssued": "2023-11-22",
        "DateExpire": "12/06/23",
        "Latitude": "34.070099",
        "Longitude": "-118.30592"
      },
      {
        "ColonyLocation": "3458 N ARROYO SECO AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-11-22",
        "DateExpire": "12/06/23",
        "Latitude": "34.087449",
        "Longitude": "-118.2153219"
      },
      {
        "ColonyLocation": "3458 N ARROYO SECO AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-11-22",
        "DateExpire": "12/06/23",
        "Latitude": "34.087449",
        "Longitude": "-118.2153219"
      },
      {
        "ColonyLocation": "MIRAMAR ST AT PARK VIEW ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-11-22",
        "DateExpire": "12/06/23",
        "Latitude": "34.0654932",
        "Longitude": "-118.2756105"
      },
      {
        "ColonyLocation": "TEMPLE ST AT NORTH BROADWAY, 90012",
        "IsESA": "",
        "DateIssued": "2023-11-22",
        "DateExpire": "12/06/23",
        "Latitude": "34.055716",
        "Longitude": "-118.2436084"
      },
      {
        "ColonyLocation": "OLYMPIC BLVD AT LAWRENCE ST, 90021",
        "IsESA": "",
        "DateIssued": "2023-11-22",
        "DateExpire": "12/06/23",
        "Latitude": "34.0270381",
        "Longitude": "-118.2369121"
      },
      {
        "ColonyLocation": "TEMPLE ST AT HILL ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-11-22",
        "DateExpire": "12/06/23",
        "Latitude": "34.0564992",
        "Longitude": "-118.2445046"
      },
      {
        "ColonyLocation": "1042 E CESAR E CHAVEZ AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-11-22",
        "DateExpire": "12/06/23",
        "Latitude": "34.053533",
        "Longitude": "-118.2244968"
      },
      {
        "ColonyLocation": "5314 E MARMION WAY, 90042",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.1080839",
        "Longitude": "-118.1984493"
      },
      {
        "ColonyLocation": "5314 E MARMION WAY, 90042",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.1080839",
        "Longitude": "-118.1984493"
      },
      {
        "ColonyLocation": "5314 E MARMION WAY, 90042",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.1080839",
        "Longitude": "-118.1984493"
      },
      {
        "ColonyLocation": "5314 E MARMION WAY, 90042",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.1080839",
        "Longitude": "-118.1984493"
      },
      {
        "ColonyLocation": "729 S MAIN ST, 90014",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.0436247",
        "Longitude": "-118.2525481"
      },
      {
        "ColonyLocation": "729 S MAIN ST, 90014",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.0436247",
        "Longitude": "-118.2525481"
      },
      {
        "ColonyLocation": "729 S MAIN ST, 90014",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.0436247",
        "Longitude": "-118.2525481"
      },
      {
        "ColonyLocation": "729 S MAIN ST, 90014",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.0436247",
        "Longitude": "-118.2525481"
      },
      {
        "ColonyLocation": "1615 E 22ND ST, 90011",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.0174435",
        "Longitude": "-118.2447611"
      },
      {
        "ColonyLocation": "1615 E 22ND ST, 90011",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.0174435",
        "Longitude": "-118.2447611"
      },
      {
        "ColonyLocation": "1615 E 22ND ST, 90011",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.0174435",
        "Longitude": "-118.2447611"
      },
      {
        "ColonyLocation": "1615 E 22ND ST, 90011",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.0174435",
        "Longitude": "-118.2447611"
      },
      {
        "ColonyLocation": "1615 E 22ND ST, 90011",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.0174435",
        "Longitude": "-118.2447611"
      },
      {
        "ColonyLocation": "TOLUCA ST AT EMERALD ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.0597746",
        "Longitude": "-118.2585711"
      },
      {
        "ColonyLocation": "AVENUE 21 AT HUMBOLDT ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.077489",
        "Longitude": "-118.2217503"
      },
      {
        "ColonyLocation": "AVENUE 21 AT HUMBOLDT ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.077489",
        "Longitude": "-118.2217503"
      },
      {
        "ColonyLocation": "AVENUE 21 AT HUMBOLDT ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.077489",
        "Longitude": "-118.2217503"
      },
      {
        "ColonyLocation": "AVENUE 21 AT HUMBOLDT ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.077489",
        "Longitude": "-118.2217503"
      },
      {
        "ColonyLocation": "2640 W AVENUE 35, 90065",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.1131126",
        "Longitude": "-118.2335806"
      },
      {
        "ColonyLocation": "2640 W AVENUE 35, 90065",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.1131126",
        "Longitude": "-118.2335806"
      },
      {
        "ColonyLocation": "2640 W AVENUE 35, 90065",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.1131126",
        "Longitude": "-118.2335806"
      },
      {
        "ColonyLocation": "2640 W AVENUE 35, 90065",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.1131126",
        "Longitude": "-118.2335806"
      },
      {
        "ColonyLocation": "2736 E 2ND ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.0398728",
        "Longitude": "-118.2061949"
      },
      {
        "ColonyLocation": "2553 E GANAHL ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.0527147",
        "Longitude": "-118.1995354"
      },
      {
        "ColonyLocation": "3433 N FARNSWORTH AVE, 90032",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.0858806",
        "Longitude": "-118.1671226"
      },
      {
        "ColonyLocation": "3433 N FARNSWORTH AVE, 90032",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.0858806",
        "Longitude": "-118.1671226"
      },
      {
        "ColonyLocation": "5020 E SHIPLEY GLEN DR, 90042",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.1103449",
        "Longitude": "-118.205072"
      },
      {
        "ColonyLocation": "5020 E SHIPLEY GLEN DR, 90042",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.1103449",
        "Longitude": "-118.205072"
      },
      {
        "ColonyLocation": "5020 E SHIPLEY GLEN DR, 90042",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.1103449",
        "Longitude": "-118.205072"
      },
      {
        "ColonyLocation": "5020 E SHIPLEY GLEN DR, 90042",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.1103449",
        "Longitude": "-118.205072"
      },
      {
        "ColonyLocation": "5020 E SHIPLEY GLEN DR, 90042",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.1103449",
        "Longitude": "-118.205072"
      },
      {
        "ColonyLocation": "5020 E SHIPLEY GLEN DR, 90042",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.1103449",
        "Longitude": "-118.205072"
      },
      {
        "ColonyLocation": "7TH ST AT CATALINA ST, 90005",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.0597588",
        "Longitude": "-118.295417"
      },
      {
        "ColonyLocation": "5TH ST AT UNION AVE, 90017",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.0543797",
        "Longitude": "-118.2672801"
      },
      {
        "ColonyLocation": "6TH ST at BURLINGTON AVE, 90057",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.0580199",
        "Longitude": "-118.2714766"
      },
      {
        "ColonyLocation": "6TH ST at BURLINGTON AVE, 90057",
        "IsESA": "",
        "DateIssued": "2023-11-19",
        "DateExpire": "12/03/23",
        "Latitude": "34.0580199",
        "Longitude": "-118.2714766"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE at SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-11-13",
        "DateExpire": "11/27/23",
        "Latitude": "34.0949822",
        "Longitude": "-118.3070348"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE at SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-11-13",
        "DateExpire": "11/27/23",
        "Latitude": "34.0949822",
        "Longitude": "-118.3070348"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE at SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-11-13",
        "DateExpire": "11/27/23",
        "Latitude": "34.0949822",
        "Longitude": "-118.3070348"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE at SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-11-13",
        "DateExpire": "11/27/23",
        "Latitude": "34.0949822",
        "Longitude": "-118.3070348"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE at SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-11-13",
        "DateExpire": "11/27/23",
        "Latitude": "34.0949822",
        "Longitude": "-118.3070348"
      },
      {
        "ColonyLocation": "PARK VIEW ST AT MIRAMAR ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0654932",
        "Longitude": "-118.2756105"
      },
      {
        "ColonyLocation": "AVENUE 43 AT MARMION WAY, 90065",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0953908",
        "Longitude": "-118.2096745"
      },
      {
        "ColonyLocation": "AVENUE 43 AT MARMION WAY, 90065",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0953908",
        "Longitude": "-118.2096745"
      },
      {
        "ColonyLocation": "AVENUE 43 AT MARMION WAY, 90065",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0953908",
        "Longitude": "-118.2096745"
      },
      {
        "ColonyLocation": "AVENUE 43 AT MARMION WAY, 90065",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0953908",
        "Longitude": "-118.2096745"
      },
      {
        "ColonyLocation": "AVENUE 43 AT MARMION WAY, 90065",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0953908",
        "Longitude": "-118.2096745"
      },
      {
        "ColonyLocation": "AVENUE 43 AT MARMION WAY, 90065",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0953908",
        "Longitude": "-118.2096745"
      },
      {
        "ColonyLocation": "AVENUE 43 AT MARMION WAY, 90065",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0953908",
        "Longitude": "-118.2096745"
      },
      {
        "ColonyLocation": "AVENUE 43 AT MARMION WAY, 90065",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0953908",
        "Longitude": "-118.2096745"
      },
      {
        "ColonyLocation": "AVENUE 43 AT MARMION WAY, 90065",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0953908",
        "Longitude": "-118.2096745"
      },
      {
        "ColonyLocation": "1434 W HILL DR, 90041",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.1322469",
        "Longitude": "-118.2117257"
      },
      {
        "ColonyLocation": "1434 W HILL DR, 90041",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.1322469",
        "Longitude": "-118.2117257"
      },
      {
        "ColonyLocation": "1434 W HILL DR, 90041",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.1322469",
        "Longitude": "-118.2117257"
      },
      {
        "ColonyLocation": "6227 W AFTON PL, 90028",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0955361",
        "Longitude": "-118.3250341"
      },
      {
        "ColonyLocation": "508 E 4TH ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0455398",
        "Longitude": "-118.2380875"
      },
      {
        "ColonyLocation": "508 E 4TH ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0455398",
        "Longitude": "-118.2380875"
      },
      {
        "ColonyLocation": "508 E 4TH ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0455398",
        "Longitude": "-118.2380875"
      },
      {
        "ColonyLocation": "1159 S GRANDE VISTA AVE, 90023",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0235167",
        "Longitude": "-118.2086699"
      },
      {
        "ColonyLocation": "1159 S GRANDE VISTA AVE, 90023",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0235167",
        "Longitude": "-118.2086699"
      },
      {
        "ColonyLocation": "3422 N CHADWICK DR, 90032",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0802957",
        "Longitude": "-118.1743065"
      },
      {
        "ColonyLocation": "3422 N CHADWICK DR, 90032",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0802957",
        "Longitude": "-118.1743065"
      },
      {
        "ColonyLocation": "3422 N CHADWICK DR, 90032",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0802957",
        "Longitude": "-118.1743065"
      },
      {
        "ColonyLocation": "3422 N CHADWICK DR, 90032",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0802957",
        "Longitude": "-118.1743065"
      },
      {
        "ColonyLocation": "3422 N CHADWICK DR, 90032",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0802957",
        "Longitude": "-118.1743065"
      },
      {
        "ColonyLocation": "3422 N CHADWICK DR, 90032",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0802957",
        "Longitude": "-118.1743065"
      },
      {
        "ColonyLocation": "3422 N CHADWICK DR, 90032",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0802957",
        "Longitude": "-118.1743065"
      },
      {
        "ColonyLocation": "3422 N CHADWICK DR, 90032",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0802957",
        "Longitude": "-118.1743065"
      },
      {
        "ColonyLocation": "3422 N CHADWICK DR, 90032",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0802957",
        "Longitude": "-118.1743065"
      },
      {
        "ColonyLocation": "3422 N CHADWICK DR, 90032",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0802957",
        "Longitude": "-118.1743065"
      },
      {
        "ColonyLocation": "3422 N CHADWICK DR, 90032",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0802957",
        "Longitude": "-118.1743065"
      },
      {
        "ColonyLocation": "FLORAL DR AT INDIANA ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0424393",
        "Longitude": "-118.1925042"
      },
      {
        "ColonyLocation": "FLORAL DR AT INDIANA ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0424393",
        "Longitude": "-118.1925042"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-11-12",
        "DateExpire": "11/26/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "635 N BRITTANIA ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-11-10",
        "DateExpire": "11/24/23",
        "Latitude": "34.0516015",
        "Longitude": "-118.2121255"
      },
      {
        "ColonyLocation": "305 S CLARENCE ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-11-10",
        "DateExpire": "11/24/23",
        "Latitude": "34.0448256",
        "Longitude": "-118.2242681"
      },
      {
        "ColonyLocation": "2135 W ELSINORE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-11-08",
        "DateExpire": "11/22/23",
        "Latitude": "34.0788348",
        "Longitude": "-118.2641541"
      },
      {
        "ColonyLocation": "CORONADO ST at TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-11-08",
        "DateExpire": "11/22/23",
        "Latitude": "34.0722039",
        "Longitude": "-118.2738954"
      },
      {
        "ColonyLocation": "CORONADO ST at TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-11-08",
        "DateExpire": "11/22/23",
        "Latitude": "34.0722039",
        "Longitude": "-118.2738954"
      },
      {
        "ColonyLocation": "SERRANO AVE AT SANTA MONICA BLVD, 90029",
        "IsESA": "",
        "DateIssued": "2023-11-08",
        "DateExpire": "11/22/23",
        "Latitude": "34.0907921",
        "Longitude": "-118.3059844"
      },
      {
        "ColonyLocation": "SERRANO AVE AT SANTA MONICA BLVD, 90029",
        "IsESA": "",
        "DateIssued": "2023-11-08",
        "DateExpire": "11/22/23",
        "Latitude": "34.0907921",
        "Longitude": "-118.3059844"
      },
      {
        "ColonyLocation": "CENTRAL AVE AT 2ND ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-11-08",
        "DateExpire": "11/22/23",
        "Latitude": "34.0477457",
        "Longitude": "-118.2393688"
      },
      {
        "ColonyLocation": "CENTRAL AVE AT 2ND ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-11-08",
        "DateExpire": "11/22/23",
        "Latitude": "34.0477457",
        "Longitude": "-118.2393688"
      },
      {
        "ColonyLocation": "EDGEMONT ST AT FOUNTAIN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-11-08",
        "DateExpire": "11/22/23",
        "Latitude": "34.0953915",
        "Longitude": "-118.2961363"
      },
      {
        "ColonyLocation": "EDGEMONT ST AT FOUNTAIN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-11-08",
        "DateExpire": "11/22/23",
        "Latitude": "34.0953915",
        "Longitude": "-118.2961363"
      },
      {
        "ColonyLocation": "EDGEMONT ST AT LILY CREST AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-11-01",
        "DateExpire": "11/15/23",
        "Latitude": "34.0880189",
        "Longitude": "-118.2960629"
      },
      {
        "ColonyLocation": "VENDOME ST AT 2ND ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-11-01",
        "DateExpire": "11/15/23",
        "Latitude": "34.0702961",
        "Longitude": "-118.2831985"
      },
      {
        "ColonyLocation": "3200 N VERDUGO ROAD, 90065",
        "IsESA": "",
        "DateIssued": "2023-11-01",
        "DateExpire": "11/15/23",
        "Latitude": "34.1965668",
        "Longitude": "-118.2294888"
      },
      {
        "ColonyLocation": "3200 N VERDUGO ROAD, 90065",
        "IsESA": "",
        "DateIssued": "2023-11-01",
        "DateExpire": "11/15/23",
        "Latitude": "34.1965668",
        "Longitude": "-118.2294888"
      },
      {
        "ColonyLocation": "3200 N VERDUGO ROAD, 90065",
        "IsESA": "",
        "DateIssued": "2023-11-01",
        "DateExpire": "11/15/23",
        "Latitude": "34.1965668",
        "Longitude": "-118.2294888"
      },
      {
        "ColonyLocation": "1ST ST AT HEWITT ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-11-01",
        "DateExpire": "11/15/23",
        "Latitude": "34.0486791",
        "Longitude": "-118.2361316"
      },
      {
        "ColonyLocation": "NORTH BROADWAY AT TEMPLE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-11-01",
        "DateExpire": "11/15/23",
        "Latitude": "34.055716",
        "Longitude": "-118.2436084"
      },
      {
        "ColonyLocation": "NORTH BROADWAY AT TEMPLE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-11-01",
        "DateExpire": "11/15/23",
        "Latitude": "34.055716",
        "Longitude": "-118.2436084"
      },
      {
        "ColonyLocation": "MERIDIAN ST AT FIGUEROA ST, 90042",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.1201575",
        "Longitude": "-118.1837426"
      },
      {
        "ColonyLocation": "1534 W HILL DR, 90041",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.1322469",
        "Longitude": "-118.2117257"
      },
      {
        "ColonyLocation": "1534 W HILL DR, 90041",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.1322469",
        "Longitude": "-118.2117257"
      },
      {
        "ColonyLocation": "1534 W HILL DR, 90041",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.1322469",
        "Longitude": "-118.2117257"
      },
      {
        "ColonyLocation": "1534 W HILL DR, 90041",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.1322469",
        "Longitude": "-118.2117257"
      },
      {
        "ColonyLocation": "5424 N MONTEREY ROAD, 90042",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.1122216",
        "Longitude": "-118.1485301"
      },
      {
        "ColonyLocation": "5424 N MONTEREY ROAD, 90042",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.1122216",
        "Longitude": "-118.1485301"
      },
      {
        "ColonyLocation": "5424 N MONTEREY ROAD, 90042",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.1122216",
        "Longitude": "-118.1485301"
      },
      {
        "ColonyLocation": "5424 N MONTEREY ROAD, 90042",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.1122216",
        "Longitude": "-118.1485301"
      },
      {
        "ColonyLocation": "5424 N MONTEREY ROAD, 90042",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.1122216",
        "Longitude": "-118.1485301"
      },
      {
        "ColonyLocation": "1522 W LINDA ROSA AVE, 90041",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.13511",
        "Longitude": "-118.2041151"
      },
      {
        "ColonyLocation": "1400 N ANGELUS AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.0835068",
        "Longitude": "-118.2694181"
      },
      {
        "ColonyLocation": "ROMAINE ST AT SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.0885087",
        "Longitude": "-118.3064149"
      },
      {
        "ColonyLocation": "ROMAINE ST AT SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.0885087",
        "Longitude": "-118.3064149"
      },
      {
        "ColonyLocation": "ROMAINE ST AT SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.0885087",
        "Longitude": "-118.3064149"
      },
      {
        "ColonyLocation": "ROMAINE ST AT SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.0885087",
        "Longitude": "-118.3064149"
      },
      {
        "ColonyLocation": "ROMAINE ST AT SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.0885087",
        "Longitude": "-118.3064149"
      },
      {
        "ColonyLocation": "ROMAINE ST AT SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.0885087",
        "Longitude": "-118.3064149"
      },
      {
        "ColonyLocation": "ROMAINE ST AT SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.0885087",
        "Longitude": "-118.3064149"
      },
      {
        "ColonyLocation": "ROMAINE ST AT SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.0885087",
        "Longitude": "-118.3064149"
      },
      {
        "ColonyLocation": "ROMAINE ST AT SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.0885087",
        "Longitude": "-118.3064149"
      },
      {
        "ColonyLocation": "ROMAINE ST AT SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.0885087",
        "Longitude": "-118.3064149"
      },
      {
        "ColonyLocation": "ROMAINE ST AT SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.0885087",
        "Longitude": "-118.3064149"
      },
      {
        "ColonyLocation": "ROMAINE ST AT SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.0885087",
        "Longitude": "-118.3064149"
      },
      {
        "ColonyLocation": "ROMAINE ST AT SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.0885087",
        "Longitude": "-118.3064149"
      },
      {
        "ColonyLocation": "3181 E FAIRMOUNT ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "Error",
        "Longitude": "Cannot read properties of undefined (reading 'lat')"
      },
      {
        "ColonyLocation": "3181 E FAIRMOUNT ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "Error",
        "Longitude": "Cannot read properties of undefined (reading 'lat')"
      },
      {
        "ColonyLocation": "3181 E FAIRMOUNT ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "Error",
        "Longitude": "Cannot read properties of undefined (reading 'lat')"
      },
      {
        "ColonyLocation": "3181 E FAIRMOUNT ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "Error",
        "Longitude": "Cannot read properties of undefined (reading 'lat')"
      },
      {
        "ColonyLocation": "3181 E FAIRMOUNT ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "Error",
        "Longitude": "Cannot read properties of undefined (reading 'lat')"
      },
      {
        "ColonyLocation": "3181 E FAIRMOUNT ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "Error",
        "Longitude": "Cannot read properties of undefined (reading 'lat')"
      },
      {
        "ColonyLocation": "3181 E FAIRMOUNT ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "Error",
        "Longitude": "Cannot read properties of undefined (reading 'lat')"
      },
      {
        "ColonyLocation": "3234 E 3RD ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.0359538",
        "Longitude": "-118.1991205"
      },
      {
        "ColonyLocation": "3234 E 3RD ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-10-29",
        "DateExpire": "11/12/23",
        "Latitude": "34.0359538",
        "Longitude": "-118.1991205"
      },
      {
        "ColonyLocation": "BEVERLY BLVD AT VIRGIL AVE, 90004",
        "IsESA": "",
        "DateIssued": "2023-10-25",
        "DateExpire": "11/08/23",
        "Latitude": "34.0749152",
        "Longitude": "-118.2868413"
      },
      {
        "ColonyLocation": "BEVERLY BLVD AT VIRGIL AVE, 90004",
        "IsESA": "",
        "DateIssued": "2023-10-25",
        "DateExpire": "11/08/23",
        "Latitude": "34.0749152",
        "Longitude": "-118.2868413"
      },
      {
        "ColonyLocation": "BEVERLY BLVD AT VIRGIL AVE, 90004",
        "IsESA": "",
        "DateIssued": "2023-10-25",
        "DateExpire": "11/08/23",
        "Latitude": "34.0749152",
        "Longitude": "-118.2868413"
      },
      {
        "ColonyLocation": "BEVERLY BLVD AT VIRGIL AVE, 90004",
        "IsESA": "",
        "DateIssued": "2023-10-25",
        "DateExpire": "11/08/23",
        "Latitude": "34.0749152",
        "Longitude": "-118.2868413"
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD at HOOVER ST, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-25",
        "DateExpire": "11/08/23",
        "Latitude": "34.0908747",
        "Longitude": "-118.2845555"
      },
      {
        "ColonyLocation": "PARK VIEW ST AT MIRAMAR ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-10-25",
        "DateExpire": "11/08/23",
        "Latitude": "34.0654932",
        "Longitude": "-118.2756105"
      },
      {
        "ColonyLocation": "LEMON GROVE AVE at WESTERN AVE, 90038",
        "IsESA": "",
        "DateIssued": "2023-10-25",
        "DateExpire": "11/08/23",
        "Latitude": "34.0866831",
        "Longitude": "-118.3091657"
      },
      {
        "ColonyLocation": "LEMON GROVE AVE at WESTERN AVE, 90038",
        "IsESA": "",
        "DateIssued": "2023-10-25",
        "DateExpire": "11/08/23",
        "Latitude": "34.0866831",
        "Longitude": "-118.3091657"
      },
      {
        "ColonyLocation": "LEMON GROVE AVE at WESTERN AVE, 90038",
        "IsESA": "",
        "DateIssued": "2023-10-25",
        "DateExpire": "11/08/23",
        "Latitude": "34.0866831",
        "Longitude": "-118.3091657"
      },
      {
        "ColonyLocation": "LEMON GROVE AVE at WESTERN AVE, 90038",
        "IsESA": "",
        "DateIssued": "2023-10-25",
        "DateExpire": "11/08/23",
        "Latitude": "34.0866831",
        "Longitude": "-118.3091657"
      },
      {
        "ColonyLocation": "1321 E MONO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0460253",
        "Longitude": "-118.226045"
      },
      {
        "ColonyLocation": "1011 S CONCORD ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0263485",
        "Longitude": "-118.2047116"
      },
      {
        "ColonyLocation": "1011 S CONCORD ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0263485",
        "Longitude": "-118.2047116"
      },
      {
        "ColonyLocation": "1011 S CONCORD ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0263485",
        "Longitude": "-118.2047116"
      },
      {
        "ColonyLocation": "1011 S CONCORD ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0263485",
        "Longitude": "-118.2047116"
      },
      {
        "ColonyLocation": "1011 S CONCORD ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0263485",
        "Longitude": "-118.2047116"
      },
      {
        "ColonyLocation": "1011 S CONCORD ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0263485",
        "Longitude": "-118.2047116"
      },
      {
        "ColonyLocation": "1011 S CONCORD ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0263485",
        "Longitude": "-118.2047116"
      },
      {
        "ColonyLocation": "1011 S CONCORD ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0263485",
        "Longitude": "-118.2047116"
      },
      {
        "ColonyLocation": "1011 S CONCORD ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0263485",
        "Longitude": "-118.2047116"
      },
      {
        "ColonyLocation": "1011 S CONCORD ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0263485",
        "Longitude": "-118.2047116"
      },
      {
        "ColonyLocation": "305 S CLARENCE ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0448256",
        "Longitude": "-118.2242681"
      },
      {
        "ColonyLocation": "632 N BRITTANIA ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.051222",
        "Longitude": "-118.21168"
      },
      {
        "ColonyLocation": "2250 N GLOVER PL, 90031",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0904901",
        "Longitude": "-118.2365614"
      },
      {
        "ColonyLocation": "4233 W BURNS AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0878927",
        "Longitude": "-118.2857875"
      },
      {
        "ColonyLocation": "4233 W BURNS AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0878927",
        "Longitude": "-118.2857875"
      },
      {
        "ColonyLocation": "4233 W BURNS AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0878927",
        "Longitude": "-118.2857875"
      },
      {
        "ColonyLocation": "4233 W BURNS AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0878927",
        "Longitude": "-118.2857875"
      },
      {
        "ColonyLocation": "4233 W BURNS AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0878927",
        "Longitude": "-118.2857875"
      },
      {
        "ColonyLocation": "1014 N ALEXANDRIA AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.089165",
        "Longitude": "-118.2976544"
      },
      {
        "ColonyLocation": "1014 N ALEXANDRIA AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.089165",
        "Longitude": "-118.2976544"
      },
      {
        "ColonyLocation": "1014 N ALEXANDRIA AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.089165",
        "Longitude": "-118.2976544"
      },
      {
        "ColonyLocation": "1014 N ALEXANDRIA AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.089165",
        "Longitude": "-118.2976544"
      },
      {
        "ColonyLocation": "NORMANDIE AVE AT MONROE ST, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0855857",
        "Longitude": "-118.3004768"
      },
      {
        "ColonyLocation": "WESTERN AVE at LEMON GROVE AVE, 90038",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0866831",
        "Longitude": "-118.3091657"
      },
      {
        "ColonyLocation": "WESTERN AVE at LEMON GROVE AVE, 90038",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0866831",
        "Longitude": "-118.3091657"
      },
      {
        "ColonyLocation": "WESTERN AVE at LEMON GROVE AVE, 90038",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0866831",
        "Longitude": "-118.3091657"
      },
      {
        "ColonyLocation": "WESTERN AVE at LEMON GROVE AVE, 90038",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0866831",
        "Longitude": "-118.3091657"
      },
      {
        "ColonyLocation": "WESTERN AVE at LEMON GROVE AVE, 90038",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0866831",
        "Longitude": "-118.3091657"
      },
      {
        "ColonyLocation": "WESTERN AVE at LEMON GROVE AVE, 90038",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0866831",
        "Longitude": "-118.3091657"
      },
      {
        "ColonyLocation": "WESTERN AVE at LEMON GROVE AVE, 90038",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0866831",
        "Longitude": "-118.3091657"
      },
      {
        "ColonyLocation": "AVENUE 50 AT RANGE VIEW AVE, 90042",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.1240656",
        "Longitude": "-118.2061919"
      },
      {
        "ColonyLocation": "2540 E WABASH AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0502898",
        "Longitude": "-118.2117257"
      },
      {
        "ColonyLocation": "2540 E WABASH AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0502898",
        "Longitude": "-118.2117257"
      },
      {
        "ColonyLocation": "2540 E WABASH AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0502898",
        "Longitude": "-118.2117257"
      },
      {
        "ColonyLocation": "2540 E WABASH AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-22",
        "DateExpire": "11/05/23",
        "Latitude": "34.0502898",
        "Longitude": "-118.2117257"
      },
      {
        "ColonyLocation": "1000 W VIN SCULLY AVE, 90012",
        "IsESA": "",
        "DateIssued": "2023-10-18",
        "DateExpire": "11/01/23",
        "Latitude": "34.0717682",
        "Longitude": "-118.2457099"
      },
      {
        "ColonyLocation": "OXFORD AVE at SANTA MONICA BLVD, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-18",
        "DateExpire": "11/01/23",
        "Latitude": "34.0907903",
        "Longitude": "-118.3070029"
      },
      {
        "ColonyLocation": "6TH ST AT SAN PEDRO ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-10-18",
        "DateExpire": "11/01/23",
        "Latitude": "34.0422573",
        "Longitude": "-118.2452668"
      },
      {
        "ColonyLocation": "SUNSET BLVD AT MICHELTORENA ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-18",
        "DateExpire": "11/01/23",
        "Latitude": "34.0875637",
        "Longitude": "-118.2758682"
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 1ST ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-10-18",
        "DateExpire": "11/01/23",
        "Latitude": "34.0735074",
        "Longitude": "-118.2868045"
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 1ST ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-10-18",
        "DateExpire": "11/01/23",
        "Latitude": "34.0735074",
        "Longitude": "-118.2868045"
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 1ST ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-10-18",
        "DateExpire": "11/01/23",
        "Latitude": "34.0735074",
        "Longitude": "-118.2868045"
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 1ST ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-10-18",
        "DateExpire": "11/01/23",
        "Latitude": "34.0735074",
        "Longitude": "-118.2868045"
      },
      {
        "ColonyLocation": "NORTH MAIN ST AT VIGNES ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-10-18",
        "DateExpire": "11/01/23",
        "Latitude": "34.0613505",
        "Longitude": "-118.2352215"
      },
      {
        "ColonyLocation": "NORTH MAIN ST AT VIGNES ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-10-18",
        "DateExpire": "11/01/23",
        "Latitude": "34.0613505",
        "Longitude": "-118.2352215"
      },
      {
        "ColonyLocation": "NORTH MAIN ST AT VIGNES ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-10-18",
        "DateExpire": "11/01/23",
        "Latitude": "34.0613505",
        "Longitude": "-118.2352215"
      },
      {
        "ColonyLocation": "OXFORD AVE at SANTA MONICA BLVD, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0907903",
        "Longitude": "-118.3070029"
      },
      {
        "ColonyLocation": "OXFORD AVE at SANTA MONICA BLVD, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0907903",
        "Longitude": "-118.3070029"
      },
      {
        "ColonyLocation": "OXFORD AVE at SANTA MONICA BLVD, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0907903",
        "Longitude": "-118.3070029"
      },
      {
        "ColonyLocation": "OXFORD AVE at SANTA MONICA BLVD, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0907903",
        "Longitude": "-118.3070029"
      },
      {
        "ColonyLocation": "OXFORD AVE at SANTA MONICA BLVD, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0907903",
        "Longitude": "-118.3070029"
      },
      {
        "ColonyLocation": "NORMANDIE AVE AT MONROE ST, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0855857",
        "Longitude": "-118.3004768"
      },
      {
        "ColonyLocation": "NORMANDIE AVE AT MONROE ST, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0855857",
        "Longitude": "-118.3004768"
      },
      {
        "ColonyLocation": "3232 E 3RD ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0358814",
        "Longitude": "-118.1992751"
      },
      {
        "ColonyLocation": "4846 N RUTH AVE, 90041",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.1346393",
        "Longitude": "-118.1909567"
      },
      {
        "ColonyLocation": "ARROYO SECO AVE AT CYPRESS AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0858464",
        "Longitude": "-118.2182722"
      },
      {
        "ColonyLocation": "ARROYO SECO AVE AT CYPRESS AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0858464",
        "Longitude": "-118.2182722"
      },
      {
        "ColonyLocation": "CYPRESS AVE AT ARROYO SECO AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0858464",
        "Longitude": "-118.2182722"
      },
      {
        "ColonyLocation": "CYPRESS AVE AT ARROYO SECO AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0858464",
        "Longitude": "-118.2182722"
      },
      {
        "ColonyLocation": "6TH ST AT SAN JULIAN ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0428467",
        "Longitude": "-118.2461831"
      },
      {
        "ColonyLocation": "3RD ST AT SAN PEDRO ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0480697",
        "Longitude": "-118.2422398"
      },
      {
        "ColonyLocation": "251 E 3RD ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0483826",
        "Longitude": "-118.2435492"
      },
      {
        "ColonyLocation": "2222 E DAMON ST, 90021",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.028474",
        "Longitude": "-118.2329773"
      },
      {
        "ColonyLocation": "INDIANA ST AT MEDFORD ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0617585",
        "Longitude": "-118.1926459"
      },
      {
        "ColonyLocation": "INDIANA ST AT MEDFORD ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0617585",
        "Longitude": "-118.1926459"
      },
      {
        "ColonyLocation": "INDIANA ST AT MEDFORD ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0617585",
        "Longitude": "-118.1926459"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "TURQUOISE ST at HUNTINGTON DR, 90032",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0807561",
        "Longitude": "-118.1929671"
      },
      {
        "ColonyLocation": "6073 W BARTON AVE, 90038",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0882247",
        "Longitude": "-118.3263177"
      },
      {
        "ColonyLocation": "6073 W BARTON AVE, 90038",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0882247",
        "Longitude": "-118.3263177"
      },
      {
        "ColonyLocation": "6073 W BARTON AVE, 90038",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0882247",
        "Longitude": "-118.3263177"
      },
      {
        "ColonyLocation": "6073 W BARTON AVE, 90038",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0882247",
        "Longitude": "-118.3263177"
      },
      {
        "ColonyLocation": "2845 E GLENN AVE, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0238966",
        "Longitude": "-118.2156569"
      },
      {
        "ColonyLocation": "2845 E GLENN AVE, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0238966",
        "Longitude": "-118.2156569"
      },
      {
        "ColonyLocation": "2845 E GLENN AVE, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0238966",
        "Longitude": "-118.2156569"
      },
      {
        "ColonyLocation": "2845 E GLENN AVE, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0238966",
        "Longitude": "-118.2156569"
      },
      {
        "ColonyLocation": "3232 E 1ST ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-10-15",
        "DateExpire": "10/29/23",
        "Latitude": "34.0381764",
        "Longitude": "-118.1978482"
      },
      {
        "ColonyLocation": "FERNWOOD AVE AT DE LONGPRE AVE, 90028",
        "IsESA": "",
        "DateIssued": "2023-10-11",
        "DateExpire": "10/25/23",
        "Latitude": "34.0966655",
        "Longitude": "-118.3127702"
      },
      {
        "ColonyLocation": "KENMORE AVE at SAN MARINO ST, 90006",
        "IsESA": "",
        "DateIssued": "2023-10-11",
        "DateExpire": "10/25/23",
        "Latitude": "34.0545098",
        "Longitude": "-118.2968656"
      },
      {
        "ColonyLocation": "KENMORE AVE at SAN MARINO ST, 90006",
        "IsESA": "",
        "DateIssued": "2023-10-11",
        "DateExpire": "10/25/23",
        "Latitude": "34.0545098",
        "Longitude": "-118.2968656"
      },
      {
        "ColonyLocation": "BRUNSWICK AVE AT BEMIS ST, 90039",
        "IsESA": "",
        "DateIssued": "2023-10-11",
        "DateExpire": "10/25/23",
        "Latitude": "34.1343273",
        "Longitude": "-118.2690349"
      },
      {
        "ColonyLocation": "BRUNSWICK AVE AT BEMIS ST, 90039",
        "IsESA": "",
        "DateIssued": "2023-10-11",
        "DateExpire": "10/25/23",
        "Latitude": "34.1343273",
        "Longitude": "-118.2690349"
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD at WESTERN AVE, 90038",
        "IsESA": "",
        "DateIssued": "2023-10-11",
        "DateExpire": "10/25/23",
        "Latitude": "34.0907803",
        "Longitude": "-118.3092109"
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD at WESTERN AVE, 90038",
        "IsESA": "",
        "DateIssued": "2023-10-11",
        "DateExpire": "10/25/23",
        "Latitude": "34.0907803",
        "Longitude": "-118.3092109"
      },
      {
        "ColonyLocation": "2750 E HOSTETTER ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.0244623",
        "Longitude": "-118.2181684"
      },
      {
        "ColonyLocation": "SERRANO AVE AT SANTA MONICA BLVD, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.0907921",
        "Longitude": "-118.3059844"
      },
      {
        "ColonyLocation": "2250 N GLOVER PL, 90031",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.0904901",
        "Longitude": "-118.2365614"
      },
      {
        "ColonyLocation": "MONROE ST AT NORMANDIE AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "33.9294289",
        "Longitude": "-118.3003388"
      },
      {
        "ColonyLocation": "MONROE ST AT NORMANDIE AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "33.9294289",
        "Longitude": "-118.3003388"
      },
      {
        "ColonyLocation": "LACLEDE AVE AT WILLIMET AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.1323262",
        "Longitude": "-118.2667303"
      },
      {
        "ColonyLocation": "LACLEDE AVE AT WILLIMET AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.1323262",
        "Longitude": "-118.2667303"
      },
      {
        "ColonyLocation": "LACLEDE AVE AT WILLIMET AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.1323262",
        "Longitude": "-118.2667303"
      },
      {
        "ColonyLocation": "LACLEDE AVE AT WILLIMET AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.1323262",
        "Longitude": "-118.2667303"
      },
      {
        "ColonyLocation": "LACLEDE AVE AT WILLIMET AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.1323262",
        "Longitude": "-118.2667303"
      },
      {
        "ColonyLocation": "3840 W SENECA AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.1236405",
        "Longitude": "-118.2609078"
      },
      {
        "ColonyLocation": "4149 N BRUNSWICK AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.1281911",
        "Longitude": "-118.2676684"
      },
      {
        "ColonyLocation": "3324 N DREW ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.1201553",
        "Longitude": "-118.2421778"
      },
      {
        "ColonyLocation": "3324 N DREW ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.1201553",
        "Longitude": "-118.2421778"
      },
      {
        "ColonyLocation": "3324 N DREW ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.1201553",
        "Longitude": "-118.2421778"
      },
      {
        "ColonyLocation": "3324 N DREW ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.1201553",
        "Longitude": "-118.2421778"
      },
      {
        "ColonyLocation": "6225 W AFTON PL, 90028",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.0955275",
        "Longitude": "-118.3249534"
      },
      {
        "ColonyLocation": "6225 W AFTON PL, 90028",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.0955275",
        "Longitude": "-118.3249534"
      },
      {
        "ColonyLocation": "6225 W AFTON PL, 90028",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.0955275",
        "Longitude": "-118.3249534"
      },
      {
        "ColonyLocation": "6225 W AFTON PL, 90028",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.0955275",
        "Longitude": "-118.3249534"
      },
      {
        "ColonyLocation": "707 E TEMPLE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.0503294",
        "Longitude": "-118.2332455"
      },
      {
        "ColonyLocation": "3RD ST at UNION AVE, 90017",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.0608745",
        "Longitude": "-118.2679547"
      },
      {
        "ColonyLocation": "4TH ST at CORONADO ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "32.6858853",
        "Longitude": "-117.1830891"
      },
      {
        "ColonyLocation": "OCEAN VIEW AVE AT CORONADO ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.0625462",
        "Longitude": "-118.2800378"
      },
      {
        "ColonyLocation": "OCEAN VIEW AVE AT CORONADO ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.0625462",
        "Longitude": "-118.2800378"
      },
      {
        "ColonyLocation": "OCEAN VIEW AVE AT CORONADO ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.0625462",
        "Longitude": "-118.2800378"
      },
      {
        "ColonyLocation": "1333 N DE NEVE LANE, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.0571012",
        "Longitude": "-118.196696"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "3234 E 3RD ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.0359538",
        "Longitude": "-118.1991205"
      },
      {
        "ColonyLocation": "3234 E 3RD ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.0359538",
        "Longitude": "-118.1991205"
      },
      {
        "ColonyLocation": "961 S CONCORD ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.0272157",
        "Longitude": "-118.2043127"
      },
      {
        "ColonyLocation": "961 S CONCORD ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.0272157",
        "Longitude": "-118.2043127"
      },
      {
        "ColonyLocation": "961 S CONCORD ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-08",
        "DateExpire": "10/22/23",
        "Latitude": "34.0272157",
        "Longitude": "-118.2043127"
      },
      {
        "ColonyLocation": "COLUMBIA AVE at MIRAMAR ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-06",
        "DateExpire": "10/20/23",
        "Latitude": "34.0604519",
        "Longitude": "-118.263414"
      },
      {
        "ColonyLocation": "COLUMBIA AVE at MIRAMAR ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-06",
        "DateExpire": "10/20/23",
        "Latitude": "34.0604519",
        "Longitude": "-118.263414"
      },
      {
        "ColonyLocation": "KENMORE AVE AT 3RD ST, 90020",
        "IsESA": "",
        "DateIssued": "2023-10-05",
        "DateExpire": "10/19/23",
        "Latitude": "34.0690394",
        "Longitude": "-118.2966774"
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-10-05",
        "DateExpire": "10/19/23",
        "Latitude": "34.0763675",
        "Longitude": "-118.2868363"
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-10-05",
        "DateExpire": "10/19/23",
        "Latitude": "34.0763675",
        "Longitude": "-118.2868363"
      },
      {
        "ColonyLocation": "KINGSLEY DR AT SUNSET BLVD, 90027",
        "IsESA": "",
        "DateIssued": "2023-10-05",
        "DateExpire": "10/19/23",
        "Latitude": "34.098127",
        "Longitude": "-118.3031667"
      },
      {
        "ColonyLocation": "BONNIE BRAE ST AT TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-04",
        "DateExpire": "10/18/23",
        "Latitude": "34.0694476",
        "Longitude": "-118.2655384"
      },
      {
        "ColonyLocation": "MICHELTORENA ST AT DESCANSO DR, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-04",
        "DateExpire": "10/18/23",
        "Latitude": "34.0854021",
        "Longitude": "-118.2771995"
      },
      {
        "ColonyLocation": "SCOTT AVE AT STADIUM WAY, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-04",
        "DateExpire": "10/18/23",
        "Latitude": "34.077304",
        "Longitude": "-118.2489078"
      },
      {
        "ColonyLocation": "BOYLSTON ST AT SUNSET BLVD, 90012",
        "IsESA": "",
        "DateIssued": "2023-10-04",
        "DateExpire": "10/18/23",
        "Latitude": "34.0672086",
        "Longitude": "-118.2498819"
      },
      {
        "ColonyLocation": "BOYLSTON ST AT SUNSET BLVD, 90012",
        "IsESA": "",
        "DateIssued": "2023-10-04",
        "DateExpire": "10/18/23",
        "Latitude": "34.0672086",
        "Longitude": "-118.2498819"
      },
      {
        "ColonyLocation": "BRUNSWICK AVE AT BEMIS ST, 90039",
        "IsESA": "",
        "DateIssued": "2023-10-04",
        "DateExpire": "10/18/23",
        "Latitude": "34.1343273",
        "Longitude": "-118.2690349"
      },
      {
        "ColonyLocation": "2250 N GLOVER PL, 90031",
        "IsESA": "",
        "DateIssued": "2023-10-04",
        "DateExpire": "10/18/23",
        "Latitude": "34.0904901",
        "Longitude": "-118.2365614"
      },
      {
        "ColonyLocation": "3RD ST AT LOS ANGELES ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-10-04",
        "DateExpire": "10/18/23",
        "Latitude": "34.0485237",
        "Longitude": "-118.2447449"
      },
      {
        "ColonyLocation": "200 N CORONADO ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-04",
        "DateExpire": "10/18/23",
        "Latitude": "34.0705917",
        "Longitude": "-118.2746343"
      },
      {
        "ColonyLocation": "3221 N GRIFFIN AVE, 90031",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.0826448",
        "Longitude": "-118.2121734"
      },
      {
        "ColonyLocation": "1740 E 3RD ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.0452529",
        "Longitude": "-118.2204052"
      },
      {
        "ColonyLocation": "2845 E GLENN AVE, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.0238966",
        "Longitude": "-118.2156569"
      },
      {
        "ColonyLocation": "218 N ARDMORE AVE, 90004",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.0759094",
        "Longitude": "-118.3017195"
      },
      {
        "ColonyLocation": "ROSEMONT AVE at TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.0709978",
        "Longitude": "-118.2702471"
      },
      {
        "ColonyLocation": "ROSEMONT AVE at TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.0709978",
        "Longitude": "-118.2702471"
      },
      {
        "ColonyLocation": "ROSEMONT AVE at TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.0709978",
        "Longitude": "-118.2702471"
      },
      {
        "ColonyLocation": "ROSEMONT AVE AT COUNCIL ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.0692882",
        "Longitude": "-118.2718565"
      },
      {
        "ColonyLocation": "DOUGLAS ST AT TOLUCA ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.061736",
        "Longitude": "-118.2585212"
      },
      {
        "ColonyLocation": "TOLUCA ST AT COURT ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.0625159",
        "Longitude": "-118.2579934"
      },
      {
        "ColonyLocation": "TOLUCA ST AT COURT ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.0625159",
        "Longitude": "-118.2579934"
      },
      {
        "ColonyLocation": "DOUGLAS ST AT TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.0672771",
        "Longitude": "-118.2566139"
      },
      {
        "ColonyLocation": "3840 W SENECA AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.1236405",
        "Longitude": "-118.2609078"
      },
      {
        "ColonyLocation": "3840 W SENECA AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.1236405",
        "Longitude": "-118.2609078"
      },
      {
        "ColonyLocation": "3840 W SENECA AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.1236405",
        "Longitude": "-118.2609078"
      },
      {
        "ColonyLocation": "3840 W SENECA AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.1236405",
        "Longitude": "-118.2609078"
      },
      {
        "ColonyLocation": "3840 W SENECA AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.1236405",
        "Longitude": "-118.2609078"
      },
      {
        "ColonyLocation": "3840 W SENECA AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.1236405",
        "Longitude": "-118.2609078"
      },
      {
        "ColonyLocation": "3840 W SENECA AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.1236405",
        "Longitude": "-118.2609078"
      },
      {
        "ColonyLocation": "3840 W SENECA AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.1236405",
        "Longitude": "-118.2609078"
      },
      {
        "ColonyLocation": "NAUD ST AT MESNAGER ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.067801",
        "Longitude": "-118.2282994"
      },
      {
        "ColonyLocation": "130 W BRUNO ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.0623185",
        "Longitude": "-118.235754"
      },
      {
        "ColonyLocation": "130 W BRUNO ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.0623185",
        "Longitude": "-118.235754"
      },
      {
        "ColonyLocation": "6TH ST AT SAN JULIAN ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.0428467",
        "Longitude": "-118.2461831"
      },
      {
        "ColonyLocation": "900 N FOREST AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.0501905",
        "Longitude": "-118.1979757"
      },
      {
        "ColonyLocation": "900 N FOREST AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.0501905",
        "Longitude": "-118.1979757"
      },
      {
        "ColonyLocation": "2222 E DAMON ST, 90021",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.028474",
        "Longitude": "-118.2329773"
      },
      {
        "ColonyLocation": "219 S AVENUE 18, 90031",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.0709222",
        "Longitude": "-118.222317"
      },
      {
        "ColonyLocation": "219 S AVENUE 18, 90031",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.0709222",
        "Longitude": "-118.222317"
      },
      {
        "ColonyLocation": "219 S AVENUE 18, 90031",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.0709222",
        "Longitude": "-118.222317"
      },
      {
        "ColonyLocation": "219 S AVENUE 18, 90031",
        "IsESA": "",
        "DateIssued": "2023-10-02",
        "DateExpire": "10/16/23",
        "Latitude": "34.0709222",
        "Longitude": "-118.222317"
      },
      {
        "ColonyLocation": "KENMORE AVE at SANTA MONICA BLVD, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.090854",
        "Longitude": "-118.2973858"
      },
      {
        "ColonyLocation": "KENMORE AVE at SANTA MONICA BLVD, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.090854",
        "Longitude": "-118.2973858"
      },
      {
        "ColonyLocation": "MONROE ST AT NORMANDIE AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "33.9294289",
        "Longitude": "-118.3003388"
      },
      {
        "ColonyLocation": "MONROE ST AT NORMANDIE AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "33.9294289",
        "Longitude": "-118.3003388"
      },
      {
        "ColonyLocation": "CORONADO TER at PARK VIEW ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.0720703",
        "Longitude": "-118.2722716"
      },
      {
        "ColonyLocation": "2540 E WABASH AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.0502898",
        "Longitude": "-118.2117257"
      },
      {
        "ColonyLocation": "2540 E WABASH AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.0502898",
        "Longitude": "-118.2117257"
      },
      {
        "ColonyLocation": "2540 E WABASH AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.0502898",
        "Longitude": "-118.2117257"
      },
      {
        "ColonyLocation": "2540 E WABASH AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.0502898",
        "Longitude": "-118.2117257"
      },
      {
        "ColonyLocation": "2540 E WABASH AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.0502898",
        "Longitude": "-118.2117257"
      },
      {
        "ColonyLocation": "320 N SOTO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.0472774",
        "Longitude": "-118.2071791"
      },
      {
        "ColonyLocation": "536 N CUMMINGS ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.0496971",
        "Longitude": "-118.2115645"
      },
      {
        "ColonyLocation": "536 N CUMMINGS ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.0496971",
        "Longitude": "-118.2115645"
      },
      {
        "ColonyLocation": "3422 N DREW ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.1210525",
        "Longitude": "-118.2408692"
      },
      {
        "ColonyLocation": "3422 N DREW ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.1210525",
        "Longitude": "-118.2408692"
      },
      {
        "ColonyLocation": "3422 N DREW ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.1210525",
        "Longitude": "-118.2408692"
      },
      {
        "ColonyLocation": "3422 N DREW ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.1210525",
        "Longitude": "-118.2408692"
      },
      {
        "ColonyLocation": "3422 N DREW ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.1210525",
        "Longitude": "-118.2408692"
      },
      {
        "ColonyLocation": "4TH ST at UNION AVE, 90017",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.0543797",
        "Longitude": "-118.2672801"
      },
      {
        "ColonyLocation": "TOLUCA ST AT DOUGLAS ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.061736",
        "Longitude": "-118.2585212"
      },
      {
        "ColonyLocation": "TOLUCA ST AT DOUGLAS ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.061736",
        "Longitude": "-118.2585212"
      },
      {
        "ColonyLocation": "TOLUCA ST AT DOUGLAS ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.061736",
        "Longitude": "-118.2585212"
      },
      {
        "ColonyLocation": "TOLUCA ST AT DOUGLAS ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.061736",
        "Longitude": "-118.2585212"
      },
      {
        "ColonyLocation": "3113 E FOLSOM ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.0443241",
        "Longitude": "-118.1970672"
      },
      {
        "ColonyLocation": "3155 E 8TH ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.0236965",
        "Longitude": "-118.2090997"
      },
      {
        "ColonyLocation": "3155 E 8TH ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.0236965",
        "Longitude": "-118.2090997"
      },
      {
        "ColonyLocation": "3050 E INEZ ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.0320404",
        "Longitude": "-118.2045288"
      },
      {
        "ColonyLocation": "3401 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.0278133",
        "Longitude": "-118.2006332"
      },
      {
        "ColonyLocation": "3401 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.0278133",
        "Longitude": "-118.2006332"
      },
      {
        "ColonyLocation": "3234 E 4TH ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.0348552",
        "Longitude": "-118.1993495"
      },
      {
        "ColonyLocation": "3234 E 4TH ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.0348552",
        "Longitude": "-118.1993495"
      },
      {
        "ColonyLocation": "2759 S GLENN AVE, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.025737",
        "Longitude": "-118.2176935"
      },
      {
        "ColonyLocation": "2759 S GLENN AVE, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.025737",
        "Longitude": "-118.2176935"
      },
      {
        "ColonyLocation": "2759 S GLENN AVE, 90023",
        "IsESA": "",
        "DateIssued": "2023-10-01",
        "DateExpire": "10/15/23",
        "Latitude": "34.025737",
        "Longitude": "-118.2176935"
      },
      {
        "ColonyLocation": "NORMAL AVE AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-09-29",
        "DateExpire": "10/13/23",
        "Latitude": "34.0866545",
        "Longitude": "-118.286892"
      },
      {
        "ColonyLocation": "NORMAL AVE AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-09-29",
        "DateExpire": "10/13/23",
        "Latitude": "34.0866545",
        "Longitude": "-118.286892"
      },
      {
        "ColonyLocation": "PARK VIEW ST AT MIRAMAR ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-09-29",
        "DateExpire": "10/13/23",
        "Latitude": "34.0654932",
        "Longitude": "-118.2756105"
      },
      {
        "ColonyLocation": "OLYMPIC BLVD AT SANTEE ST, 90015",
        "IsESA": "",
        "DateIssued": "2023-09-29",
        "DateExpire": "10/13/23",
        "Latitude": "34.0388915",
        "Longitude": "-118.2549866"
      },
      {
        "ColonyLocation": "OLYMPIC BLVD AT SANTEE ST, 90015",
        "IsESA": "",
        "DateIssued": "2023-09-29",
        "DateExpire": "10/13/23",
        "Latitude": "34.0388915",
        "Longitude": "-118.2549866"
      },
      {
        "ColonyLocation": "HILL ST AT TEMPLE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-09-29",
        "DateExpire": "10/13/23",
        "Latitude": "34.0564992",
        "Longitude": "-118.2445046"
      },
      {
        "ColonyLocation": "FERNWOOD AVE at WESTERN AVE, 90027",
        "IsESA": "",
        "DateIssued": "2023-09-27",
        "DateExpire": "10/11/23",
        "Latitude": "34.0955569",
        "Longitude": "-118.3092266"
      },
      {
        "ColonyLocation": "FERNWOOD AVE at WESTERN AVE, 90027",
        "IsESA": "",
        "DateIssued": "2023-09-27",
        "DateExpire": "10/11/23",
        "Latitude": "34.0955569",
        "Longitude": "-118.3092266"
      },
      {
        "ColonyLocation": "FERNWOOD AVE at WESTERN AVE, 90027",
        "IsESA": "",
        "DateIssued": "2023-09-27",
        "DateExpire": "10/11/23",
        "Latitude": "34.0955569",
        "Longitude": "-118.3092266"
      },
      {
        "ColonyLocation": "FERNWOOD AVE at WESTERN AVE, 90027",
        "IsESA": "",
        "DateIssued": "2023-09-27",
        "DateExpire": "10/11/23",
        "Latitude": "34.0955569",
        "Longitude": "-118.3092266"
      },
      {
        "ColonyLocation": "FRANCIS AVE AT HOOVER ST, 90005",
        "IsESA": "",
        "DateIssued": "2023-09-27",
        "DateExpire": "10/11/23",
        "Latitude": "34.0568407",
        "Longitude": "-118.2842427"
      },
      {
        "ColonyLocation": "FRANCIS AVE AT HOOVER ST, 90005",
        "IsESA": "",
        "DateIssued": "2023-09-27",
        "DateExpire": "10/11/23",
        "Latitude": "34.0568407",
        "Longitude": "-118.2842427"
      },
      {
        "ColonyLocation": "MONROE ST AT NORMANDIE AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-09-27",
        "DateExpire": "10/11/23",
        "Latitude": "33.9294289",
        "Longitude": "-118.3003388"
      },
      {
        "ColonyLocation": "2250 N GLOVER PL, 90031",
        "IsESA": "",
        "DateIssued": "2023-09-27",
        "DateExpire": "10/11/23",
        "Latitude": "34.0904901",
        "Longitude": "-118.2365614"
      },
      {
        "ColonyLocation": "SANTEE ST AT PICO BLVD, 90015",
        "IsESA": "",
        "DateIssued": "2023-09-27",
        "DateExpire": "10/11/23",
        "Latitude": "34.0351458",
        "Longitude": "-118.2582838"
      },
      {
        "ColonyLocation": "822 N BEAUDRY AVE, 90012",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/31/23",
        "Latitude": "34.0665471",
        "Longitude": "-118.2469747"
      },
      {
        "ColonyLocation": "1916 W BELLEVUE AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0677753",
        "Longitude": "-118.2521436"
      },
      {
        "ColonyLocation": "1916 W BELLEVUE AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0677753",
        "Longitude": "-118.2521436"
      },
      {
        "ColonyLocation": "LEXINGTON AVE AT EDGEMONT ST, 90029",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0934302",
        "Longitude": "-118.2961268"
      },
      {
        "ColonyLocation": "LEXINGTON AVE AT EDGEMONT ST, 90029",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0934302",
        "Longitude": "-118.2961268"
      },
      {
        "ColonyLocation": "2250 N GLOVER PL, 90031",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0904901",
        "Longitude": "-118.2365614"
      },
      {
        "ColonyLocation": "2250 N GLOVER PL, 90031",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0904901",
        "Longitude": "-118.2365614"
      },
      {
        "ColonyLocation": "3RD ST AT SAN PEDRO ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0480697",
        "Longitude": "-118.2422398"
      },
      {
        "ColonyLocation": "3RD ST AT SAN PEDRO ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0480697",
        "Longitude": "-118.2422398"
      },
      {
        "ColonyLocation": "DREW ST AT ESTARA AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.1199398",
        "Longitude": "-118.2431292"
      },
      {
        "ColonyLocation": "DREW ST AT ESTARA AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.1199398",
        "Longitude": "-118.2431292"
      },
      {
        "ColonyLocation": "3840 W SENECA AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.1236405",
        "Longitude": "-118.2609078"
      },
      {
        "ColonyLocation": "ANDERSON ST AT 1ST ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0476134",
        "Longitude": "-118.2267418"
      },
      {
        "ColonyLocation": "ANDERSON ST AT 1ST ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0476134",
        "Longitude": "-118.2267418"
      },
      {
        "ColonyLocation": "ANDERSON ST AT 1ST ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0476134",
        "Longitude": "-118.2267418"
      },
      {
        "ColonyLocation": "ANDERSON ST AT 1ST ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0476134",
        "Longitude": "-118.2267418"
      },
      {
        "ColonyLocation": "ANDERSON ST AT 1ST ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0476134",
        "Longitude": "-118.2267418"
      },
      {
        "ColonyLocation": "4TH ST AT BOYLE AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0430576",
        "Longitude": "-118.2196484"
      },
      {
        "ColonyLocation": "301 S CLARENCE ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0450089",
        "Longitude": "-118.2243122"
      },
      {
        "ColonyLocation": "301 S CLARENCE ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0450089",
        "Longitude": "-118.2243122"
      },
      {
        "ColonyLocation": "415 W 5TH ST, 90731",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "33.73951",
        "Longitude": "-118.2861"
      },
      {
        "ColonyLocation": "415 W 5TH ST, 90731",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "33.73951",
        "Longitude": "-118.2861"
      },
      {
        "ColonyLocation": "415 W 5TH ST, 90731",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "33.73951",
        "Longitude": "-118.2861"
      },
      {
        "ColonyLocation": "3050 E INEZ ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0320404",
        "Longitude": "-118.2045288"
      },
      {
        "ColonyLocation": "3050 E INEZ ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0320404",
        "Longitude": "-118.2045288"
      },
      {
        "ColonyLocation": "3050 E INEZ ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0320404",
        "Longitude": "-118.2045288"
      },
      {
        "ColonyLocation": "3050 E INEZ ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0320404",
        "Longitude": "-118.2045288"
      },
      {
        "ColonyLocation": "6000 W SANTA MONICA BLVD, 90038",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0888841",
        "Longitude": "-118.319063"
      },
      {
        "ColonyLocation": "6000 W SANTA MONICA BLVD, 90038",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0888841",
        "Longitude": "-118.319063"
      },
      {
        "ColonyLocation": "822 N BEAUDRY AVE, 90012",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0665471",
        "Longitude": "-118.2469747"
      },
      {
        "ColonyLocation": "134 S BONNIE BRAE ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0644734",
        "Longitude": "-118.268115"
      },
      {
        "ColonyLocation": "134 S BONNIE BRAE ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0644734",
        "Longitude": "-118.268115"
      },
      {
        "ColonyLocation": "AVENUE 50 AT RANGE VIEW AVE, 90042",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.1240656",
        "Longitude": "-118.2061919"
      },
      {
        "ColonyLocation": "AVENUE 50 AT RANGE VIEW AVE, 90042",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.1240656",
        "Longitude": "-118.2061919"
      },
      {
        "ColonyLocation": "1740 E 3RD ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0452529",
        "Longitude": "-118.2204052"
      },
      {
        "ColonyLocation": "2750 E HOSTETTER ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0244623",
        "Longitude": "-118.2181684"
      },
      {
        "ColonyLocation": "2750 E HOSTETTER ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0244623",
        "Longitude": "-118.2181684"
      },
      {
        "ColonyLocation": "1813 N WORKMAN ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0641247",
        "Longitude": "-118.2144445"
      },
      {
        "ColonyLocation": "HUNTINGTON DR at TURQUOISE ST, 90032",
        "IsESA": "",
        "DateIssued": "2023-09-25",
        "DateExpire": "10/09/23",
        "Latitude": "34.0807561",
        "Longitude": "-118.1929671"
      },
      {
        "ColonyLocation": "2334 N THOMAS ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-09-24",
        "DateExpire": "10/08/23",
        "Latitude": "34.0729936",
        "Longitude": "-118.2049644"
      },
      {
        "ColonyLocation": "2334 N THOMAS ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-09-24",
        "DateExpire": "10/08/23",
        "Latitude": "34.0729936",
        "Longitude": "-118.2049644"
      },
      {
        "ColonyLocation": "2334 N THOMAS ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-09-24",
        "DateExpire": "10/08/23",
        "Latitude": "34.0729936",
        "Longitude": "-118.2049644"
      },
      {
        "ColonyLocation": "2334 N THOMAS ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-09-24",
        "DateExpire": "10/08/23",
        "Latitude": "34.0729936",
        "Longitude": "-118.2049644"
      },
      {
        "ColonyLocation": "TOWNE AVE AT 7TH ST, 90021",
        "IsESA": "",
        "DateIssued": "2023-09-24",
        "DateExpire": "10/08/23",
        "Latitude": "34.0395687",
        "Longitude": "-118.2451585"
      },
      {
        "ColonyLocation": "TOWNE AVE AT 4TH ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-09-24",
        "DateExpire": "10/08/23",
        "Latitude": "34.0444306",
        "Longitude": "-118.2407439"
      },
      {
        "ColonyLocation": "TOWNE AVE AT 4TH ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-09-24",
        "DateExpire": "10/08/23",
        "Latitude": "34.0444306",
        "Longitude": "-118.2407439"
      },
      {
        "ColonyLocation": "TOWNE AVE AT 4TH ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-09-24",
        "DateExpire": "10/08/23",
        "Latitude": "34.0444306",
        "Longitude": "-118.2407439"
      },
      {
        "ColonyLocation": "TOWNE AVE AT 4TH ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-09-24",
        "DateExpire": "10/08/23",
        "Latitude": "34.0444306",
        "Longitude": "-118.2407439"
      },
      {
        "ColonyLocation": "643 N BRITTANIA ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0517686",
        "Longitude": "-118.211977"
      },
      {
        "ColonyLocation": "643 N BRITTANIA ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0517686",
        "Longitude": "-118.211977"
      },
      {
        "ColonyLocation": "BONNIE BRAE ST AT TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0694476",
        "Longitude": "-118.2655384"
      },
      {
        "ColonyLocation": "WILLIMET AVE AT LACLEDE AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.1323262",
        "Longitude": "-118.2667303"
      },
      {
        "ColonyLocation": "WILLIMET AVE AT LACLEDE AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.1323262",
        "Longitude": "-118.2667303"
      },
      {
        "ColonyLocation": "WILLIMET AVE AT LACLEDE AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.1323262",
        "Longitude": "-118.2667303"
      },
      {
        "ColonyLocation": "WILLIMET AVE AT LACLEDE AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.1323262",
        "Longitude": "-118.2667303"
      },
      {
        "ColonyLocation": "WILLIMET AVE AT LACLEDE AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.1323262",
        "Longitude": "-118.2667303"
      },
      {
        "ColonyLocation": "ALPINE ST at BEAUDRY AVE, 90012",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0657593",
        "Longitude": "-118.2476401"
      },
      {
        "ColonyLocation": "ALPINE ST at BEAUDRY AVE, 90012",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0657593",
        "Longitude": "-118.2476401"
      },
      {
        "ColonyLocation": "ALPINE ST at BEAUDRY AVE, 90012",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0657593",
        "Longitude": "-118.2476401"
      },
      {
        "ColonyLocation": "ALPINE ST at BEAUDRY AVE, 90012",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0657593",
        "Longitude": "-118.2476401"
      },
      {
        "ColonyLocation": "ALPINE ST at BEAUDRY AVE, 90012",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0657593",
        "Longitude": "-118.2476401"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "1333 N DE NEVE LANE, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0571012",
        "Longitude": "-118.196696"
      },
      {
        "ColonyLocation": "1333 N DE NEVE LANE, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0571012",
        "Longitude": "-118.196696"
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD at KINGSLEY DR, 90029",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.090813",
        "Longitude": "-118.3024843"
      },
      {
        "ColonyLocation": "RANGE VIEW AVE AT AVENUE 50, 90042",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.1240656",
        "Longitude": "-118.2061919"
      },
      {
        "ColonyLocation": "3211 N EDWARD AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.1140518",
        "Longitude": "-118.2413098"
      },
      {
        "ColonyLocation": "415 S ST LOUIS ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0399025",
        "Longitude": "-118.217186"
      },
      {
        "ColonyLocation": "2018 N CYRIL AVE, 90032",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0665332",
        "Longitude": "-118.1817896"
      },
      {
        "ColonyLocation": "2533 E FOLSOM ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.043906",
        "Longitude": "-118.1880959"
      },
      {
        "ColonyLocation": "3050 E INEZ ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0320404",
        "Longitude": "-118.2045288"
      },
      {
        "ColonyLocation": "3050 E INEZ ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0320404",
        "Longitude": "-118.2045288"
      },
      {
        "ColonyLocation": "3050 E INEZ ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0320404",
        "Longitude": "-118.2045288"
      },
      {
        "ColonyLocation": "KENT ST AT WATERLOO ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0755869",
        "Longitude": "-118.2683049"
      },
      {
        "ColonyLocation": "KENT ST AT WATERLOO ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0755869",
        "Longitude": "-118.2683049"
      },
      {
        "ColonyLocation": "KENT ST AT WATERLOO ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0755869",
        "Longitude": "-118.2683049"
      },
      {
        "ColonyLocation": "SERRANO AVE AT SANTA MONICA BLVD, 90029",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0907921",
        "Longitude": "-118.3059844"
      },
      {
        "ColonyLocation": "325 S BOYLE AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-23",
        "DateExpire": "10/07/23",
        "Latitude": "34.0444936",
        "Longitude": "-118.2199732"
      },
      {
        "ColonyLocation": "ARROYO SECO AVE AT CYPRESS AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.0858464",
        "Longitude": "-118.2182722"
      },
      {
        "ColonyLocation": "PARK VIEW ST AT MIRAMAR ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.0654932",
        "Longitude": "-118.2756105"
      },
      {
        "ColonyLocation": "PARK VIEW ST AT MIRAMAR ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.0654932",
        "Longitude": "-118.2756105"
      },
      {
        "ColonyLocation": "2821 N KNOX AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.1024413",
        "Longitude": "-118.2447471"
      },
      {
        "ColonyLocation": "2250 1/2 N GLOVER PL, 90031",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.0904901",
        "Longitude": "-118.2365614"
      },
      {
        "ColonyLocation": "4196 E YORK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.1234752",
        "Longitude": "-118.2268512"
      },
      {
        "ColonyLocation": "HUB ST AT AVENUE 57, 90042",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.1159245",
        "Longitude": "-118.1945033"
      },
      {
        "ColonyLocation": "3840 W SENECA AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.1236405",
        "Longitude": "-118.2609078"
      },
      {
        "ColonyLocation": "CYPRESS AVE AT ARROYO SECO AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.0858464",
        "Longitude": "-118.2182722"
      },
      {
        "ColonyLocation": "CYPRESS AVE AT ARROYO SECO AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.0858464",
        "Longitude": "-118.2182722"
      },
      {
        "ColonyLocation": "CYPRESS AVE AT ARROYO SECO AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.0858464",
        "Longitude": "-118.2182722"
      },
      {
        "ColonyLocation": "CYPRESS AVE AT ARROYO SECO AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.0858464",
        "Longitude": "-118.2182722"
      },
      {
        "ColonyLocation": "CYPRESS AVE AT ARROYO SECO AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.0858464",
        "Longitude": "-118.2182722"
      },
      {
        "ColonyLocation": "4196 E YORK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.1234752",
        "Longitude": "-118.2268512"
      },
      {
        "ColonyLocation": "4196 E YORK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.1234752",
        "Longitude": "-118.2268512"
      },
      {
        "ColonyLocation": "4196 E YORK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.1234752",
        "Longitude": "-118.2268512"
      },
      {
        "ColonyLocation": "4196 E YORK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.1234752",
        "Longitude": "-118.2268512"
      },
      {
        "ColonyLocation": "508 E 4TH ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.0455398",
        "Longitude": "-118.2380875"
      },
      {
        "ColonyLocation": "508 E 4TH ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.0455398",
        "Longitude": "-118.2380875"
      },
      {
        "ColonyLocation": "3324 N DREW ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.1201553",
        "Longitude": "-118.2421778"
      },
      {
        "ColonyLocation": "3324 N DREW ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.1201553",
        "Longitude": "-118.2421778"
      },
      {
        "ColonyLocation": "AVENUE 50 AT RANGE VIEW AVE, 90042",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.1240656",
        "Longitude": "-118.2061919"
      },
      {
        "ColonyLocation": "7TH ST AT BERENDO ST, 90005",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.0597621",
        "Longitude": "-118.2941645"
      },
      {
        "ColonyLocation": "4TH ST at CORONADO ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "32.6858853",
        "Longitude": "-117.1830891"
      },
      {
        "ColonyLocation": "4TH ST at CORONADO ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "32.6858853",
        "Longitude": "-117.1830891"
      },
      {
        "ColonyLocation": "4TH ST at CORONADO ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "32.6858853",
        "Longitude": "-117.1830891"
      },
      {
        "ColonyLocation": "1083 N FICKETT ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.0541326",
        "Longitude": "-118.2009337"
      },
      {
        "ColonyLocation": "POMEROY AVE AT SOTO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.0537121",
        "Longitude": "-118.2034292"
      },
      {
        "ColonyLocation": "POMEROY AVE AT SOTO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.0537121",
        "Longitude": "-118.2034292"
      },
      {
        "ColonyLocation": "134 S BONNIE BRAE ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.0644734",
        "Longitude": "-118.268115"
      },
      {
        "ColonyLocation": "134 S BONNIE BRAE ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.0644734",
        "Longitude": "-118.268115"
      },
      {
        "ColonyLocation": "2759 S GLENN AVE, 90023",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.025737",
        "Longitude": "-118.2176935"
      },
      {
        "ColonyLocation": "2759 S GLENN AVE, 90023",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.025737",
        "Longitude": "-118.2176935"
      },
      {
        "ColonyLocation": "2759 S GLENN AVE, 90023",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.025737",
        "Longitude": "-118.2176935"
      },
      {
        "ColonyLocation": "6220 W AFTON PL, 90028",
        "IsESA": "",
        "DateIssued": "2023-09-17",
        "DateExpire": "10/01/23",
        "Latitude": "34.0950419",
        "Longitude": "-118.3248181"
      },
      {
        "ColonyLocation": "ARROYO SECO AVE AT CYPRESS AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.0858464",
        "Longitude": "-118.2182722"
      },
      {
        "ColonyLocation": "ARROYO SECO AVE AT CYPRESS AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.0858464",
        "Longitude": "-118.2182722"
      },
      {
        "ColonyLocation": "ARROYO SECO AVE AT CYPRESS AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.0858464",
        "Longitude": "-118.2182722"
      },
      {
        "ColonyLocation": "FLETCHER DR at AVENUE 32, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.1167489",
        "Longitude": "-118.2431638"
      },
      {
        "ColonyLocation": "FLETCHER DR at AVENUE 32, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.1167489",
        "Longitude": "-118.2431638"
      },
      {
        "ColonyLocation": "BEMIS ST AT BRUNSWICK AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.1343273",
        "Longitude": "-118.2690349"
      },
      {
        "ColonyLocation": "BEMIS ST AT BRUNSWICK AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.1343273",
        "Longitude": "-118.2690349"
      },
      {
        "ColonyLocation": "LACLEDE AVE AT WILLIMET AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.1323262",
        "Longitude": "-118.2667303"
      },
      {
        "ColonyLocation": "LACLEDE AVE AT WILLIMET AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.1323262",
        "Longitude": "-118.2667303"
      },
      {
        "ColonyLocation": "325 S BOYLE AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.0444936",
        "Longitude": "-118.2199732"
      },
      {
        "ColonyLocation": "325 S BOYLE AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.0444936",
        "Longitude": "-118.2199732"
      },
      {
        "ColonyLocation": "325 S BOYLE AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.0444936",
        "Longitude": "-118.2199732"
      },
      {
        "ColonyLocation": "1627 N GOLDEN GATE AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.0932488",
        "Longitude": "-118.2729553"
      },
      {
        "ColonyLocation": "1627 N GOLDEN GATE AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.0932488",
        "Longitude": "-118.2729553"
      },
      {
        "ColonyLocation": "CORONADO TER AT BELLEVUE AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.0746008",
        "Longitude": "-118.2707232"
      },
      {
        "ColonyLocation": "2250 1/2 N GLOVER PL, 90031",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.0904901",
        "Longitude": "-118.2365614"
      },
      {
        "ColonyLocation": "2250 1/2 N GLOVER PL, 90031",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.0904901",
        "Longitude": "-118.2365614"
      },
      {
        "ColonyLocation": "2250 1/2 N GLOVER PL, 90031",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.0904901",
        "Longitude": "-118.2365614"
      },
      {
        "ColonyLocation": "2250 1/2 N GLOVER PL, 90031",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.0904901",
        "Longitude": "-118.2365614"
      },
      {
        "ColonyLocation": "2250 1/2 N GLOVER PL, 90031",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.0904901",
        "Longitude": "-118.2365614"
      },
      {
        "ColonyLocation": "LA FAYETTE PARK PL AT TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.0732929",
        "Longitude": "-118.2766359"
      },
      {
        "ColonyLocation": "LA FAYETTE PARK PL AT TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.0732929",
        "Longitude": "-118.2766359"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE AT WESTERN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.094902",
        "Longitude": "-118.3092299"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE AT WESTERN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.094902",
        "Longitude": "-118.3092299"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE AT WESTERN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.094902",
        "Longitude": "-118.3092299"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE AT WESTERN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.094902",
        "Longitude": "-118.3092299"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE AT WESTERN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.094902",
        "Longitude": "-118.3092299"
      },
      {
        "ColonyLocation": "2821 N NORTH COOLIDGE AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.1037037",
        "Longitude": "-118.2453935"
      },
      {
        "ColonyLocation": "2821 N NORTH COOLIDGE AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.1037037",
        "Longitude": "-118.2453935"
      },
      {
        "ColonyLocation": "2821 N NORTH COOLIDGE AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.1037037",
        "Longitude": "-118.2453935"
      },
      {
        "ColonyLocation": "2821 N NORTH COOLIDGE AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.1037037",
        "Longitude": "-118.2453935"
      },
      {
        "ColonyLocation": "2821 N NORTH COOLIDGE AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.1037037",
        "Longitude": "-118.2453935"
      },
      {
        "ColonyLocation": "1ST ST AT ANDERSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.047774",
        "Longitude": "-118.226727"
      },
      {
        "ColonyLocation": "1ST ST AT ANDERSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.047774",
        "Longitude": "-118.226727"
      },
      {
        "ColonyLocation": "3800 N HOMER ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-09-16",
        "DateExpire": "09/30/23",
        "Latitude": "34.0885485",
        "Longitude": "-118.2081344"
      },
      {
        "ColonyLocation": "2222 N GLOVER PL, 90031",
        "IsESA": "",
        "DateIssued": "2023-09-13",
        "DateExpire": "09/27/23",
        "Latitude": "34.0898441",
        "Longitude": "-118.2371523"
      },
      {
        "ColonyLocation": "WESTERN AVE AT FOUNTAIN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-09-13",
        "DateExpire": "09/27/23",
        "Latitude": "34.094902",
        "Longitude": "-118.3092299"
      },
      {
        "ColonyLocation": "WILLIMET AVE AT LACLEDE AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-13",
        "DateExpire": "09/27/23",
        "Latitude": "34.1323262",
        "Longitude": "-118.2667303"
      },
      {
        "ColonyLocation": "BEMIS ST AT BRUNSWICK AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-13",
        "DateExpire": "09/27/23",
        "Latitude": "34.1343273",
        "Longitude": "-118.2690349"
      },
      {
        "ColonyLocation": "BEMIS ST AT BRUNSWICK AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-13",
        "DateExpire": "09/27/23",
        "Latitude": "34.1343273",
        "Longitude": "-118.2690349"
      },
      {
        "ColonyLocation": "BEMIS ST AT BRUNSWICK AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-13",
        "DateExpire": "09/27/23",
        "Latitude": "34.1343273",
        "Longitude": "-118.2690349"
      },
      {
        "ColonyLocation": "HOLLYWOOD BLVD AT HOBART BLVD, 90027",
        "IsESA": "",
        "DateIssued": "2023-09-13",
        "DateExpire": "09/27/23",
        "Latitude": "34.1017443",
        "Longitude": "-118.3056567"
      },
      {
        "ColonyLocation": "HOLLYWOOD BLVD AT HOBART BLVD, 90027",
        "IsESA": "",
        "DateIssued": "2023-09-13",
        "DateExpire": "09/27/23",
        "Latitude": "34.1017443",
        "Longitude": "-118.3056567"
      },
      {
        "ColonyLocation": "HOLLYWOOD BLVD AT HOBART BLVD, 90027",
        "IsESA": "",
        "DateIssued": "2023-09-13",
        "DateExpire": "09/27/23",
        "Latitude": "34.1017443",
        "Longitude": "-118.3056567"
      },
      {
        "ColonyLocation": "HOLLYWOOD BLVD AT HOBART BLVD, 90027",
        "IsESA": "",
        "DateIssued": "2023-09-13",
        "DateExpire": "09/27/23",
        "Latitude": "34.1017443",
        "Longitude": "-118.3056567"
      },
      {
        "ColonyLocation": "HOLLYWOOD BLVD AT HOBART BLVD, 90027",
        "IsESA": "",
        "DateIssued": "2023-09-13",
        "DateExpire": "09/27/23",
        "Latitude": "34.1017443",
        "Longitude": "-118.3056567"
      },
      {
        "ColonyLocation": "3321 N ANDRITA ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.1196579",
        "Longitude": "-118.2417666"
      },
      {
        "ColonyLocation": "3324 N DREW ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.1201553",
        "Longitude": "-118.2421778"
      },
      {
        "ColonyLocation": "3324 N DREW ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.1201553",
        "Longitude": "-118.2421778"
      },
      {
        "ColonyLocation": "3324 N DREW ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.1201553",
        "Longitude": "-118.2421778"
      },
      {
        "ColonyLocation": "AVENUE 50 AT RANGE VIEW AVE, 90042",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.1240656",
        "Longitude": "-118.2061919"
      },
      {
        "ColonyLocation": "AVENUE 50 AT RANGE VIEW AVE, 90042",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.1240656",
        "Longitude": "-118.2061919"
      },
      {
        "ColonyLocation": "6142 W AFTON PL, 90028",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0950068",
        "Longitude": "-118.323804"
      },
      {
        "ColonyLocation": "6142 W AFTON PL, 90028",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0950068",
        "Longitude": "-118.323804"
      },
      {
        "ColonyLocation": "325 S BOYLE AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0444936",
        "Longitude": "-118.2199732"
      },
      {
        "ColonyLocation": "325 S BOYLE AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0444936",
        "Longitude": "-118.2199732"
      },
      {
        "ColonyLocation": "325 S BOYLE AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0444936",
        "Longitude": "-118.2199732"
      },
      {
        "ColonyLocation": "325 S BOYLE AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0444936",
        "Longitude": "-118.2199732"
      },
      {
        "ColonyLocation": "325 S BOYLE AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0444936",
        "Longitude": "-118.2199732"
      },
      {
        "ColonyLocation": "ALBION ST AT NORTH MAIN ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0661166",
        "Longitude": "-118.2194293"
      },
      {
        "ColonyLocation": "ALBION ST AT NORTH MAIN ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0661166",
        "Longitude": "-118.2194293"
      },
      {
        "ColonyLocation": "AVENUE 50 AT RANGE VIEW AVE, 90042",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.1240656",
        "Longitude": "-118.2061919"
      },
      {
        "ColonyLocation": "AVENUE 50 AT RANGE VIEW AVE, 90042",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.1240656",
        "Longitude": "-118.2061919"
      },
      {
        "ColonyLocation": "AVENUE 50 AT RANGE VIEW AVE, 90042",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.1240656",
        "Longitude": "-118.2061919"
      },
      {
        "ColonyLocation": "AVENUE 54 AT ABBOTT PL, 90042",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.1120308",
        "Longitude": "-118.1990986"
      },
      {
        "ColonyLocation": "AVENUE 54 AT ABBOTT PL, 90042",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.1120308",
        "Longitude": "-118.1990986"
      },
      {
        "ColonyLocation": "AVENUE 54 AT ABBOTT PL, 90042",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.1120308",
        "Longitude": "-118.1990986"
      },
      {
        "ColonyLocation": "AVENUE 54 AT ABBOTT PL, 90042",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.1120308",
        "Longitude": "-118.1990986"
      },
      {
        "ColonyLocation": "AVENUE 61 AT MONTE VISTA ST, 90042",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.1139598",
        "Longitude": "-118.1900304"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE AT WESTERN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.094902",
        "Longitude": "-118.3092299"
      },
      {
        "ColonyLocation": "LA FAYETTE PARK PL AT TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0732929",
        "Longitude": "-118.2766359"
      },
      {
        "ColonyLocation": "LA FAYETTE PARK PL AT TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0732929",
        "Longitude": "-118.2766359"
      },
      {
        "ColonyLocation": "DEWEY AVE AT SAN MARINO ST, 90006",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0545136",
        "Longitude": "-118.2958231"
      },
      {
        "ColonyLocation": "DEWEY AVE AT SAN MARINO ST, 90006",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0545136",
        "Longitude": "-118.2958231"
      },
      {
        "ColonyLocation": "VENDOME ST AT 2ND ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0702961",
        "Longitude": "-118.2831985"
      },
      {
        "ColonyLocation": "COUNCIL ST AT CARONDELET ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0701744",
        "Longitude": "-118.2740711"
      },
      {
        "ColonyLocation": "305 S CLARENCE ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0448256",
        "Longitude": "-118.2242681"
      },
      {
        "ColonyLocation": "EVERGREEN AVE AT POMEROY AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0529778",
        "Longitude": "-118.1952077"
      },
      {
        "ColonyLocation": "320 N SOTO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0472774",
        "Longitude": "-118.2071791"
      },
      {
        "ColonyLocation": "STONE ST AT ATWOOD ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0539619",
        "Longitude": "-118.192955"
      },
      {
        "ColonyLocation": "2440 E WABASH AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0502898",
        "Longitude": "-118.2117257"
      },
      {
        "ColonyLocation": "2440 E WABASH AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-10",
        "DateExpire": "09/24/23",
        "Latitude": "34.0502898",
        "Longitude": "-118.2117257"
      },
      {
        "ColonyLocation": "COURT ST AT PATTON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-06",
        "DateExpire": "09/20/23",
        "Latitude": "34.0662811",
        "Longitude": "-118.2585743"
      },
      {
        "ColonyLocation": "COURT ST AT PATTON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-06",
        "DateExpire": "09/20/23",
        "Latitude": "34.0662811",
        "Longitude": "-118.2585743"
      },
      {
        "ColonyLocation": "COURT ST AT PATTON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-06",
        "DateExpire": "09/20/23",
        "Latitude": "34.0662811",
        "Longitude": "-118.2585743"
      },
      {
        "ColonyLocation": "COURT ST AT PATTON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-06",
        "DateExpire": "09/20/23",
        "Latitude": "34.0662811",
        "Longitude": "-118.2585743"
      },
      {
        "ColonyLocation": "ROBINSON ST AT TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-06",
        "DateExpire": "09/20/23",
        "Latitude": "34.0756844",
        "Longitude": "-118.2821236"
      },
      {
        "ColonyLocation": "SAN MARINO ST AT DEWEY AVE, 90006",
        "IsESA": "",
        "DateIssued": "2023-09-06",
        "DateExpire": "09/20/23",
        "Latitude": "34.0545136",
        "Longitude": "-118.2958231"
      },
      {
        "ColonyLocation": "SAN MARINO ST AT DEWEY AVE, 90006",
        "IsESA": "",
        "DateIssued": "2023-09-06",
        "DateExpire": "09/20/23",
        "Latitude": "34.0545136",
        "Longitude": "-118.2958231"
      },
      {
        "ColonyLocation": "536 S BERNAL AVE, 90063",
        "IsESA": "",
        "DateIssued": "2023-09-01",
        "DateExpire": "09/15/23",
        "Latitude": "34.0318001",
        "Longitude": "-118.1992308"
      },
      {
        "ColonyLocation": "536 S BERNAL AVE, 90063",
        "IsESA": "",
        "DateIssued": "2023-09-01",
        "DateExpire": "09/15/23",
        "Latitude": "34.0318001",
        "Longitude": "-118.1992308"
      },
      {
        "ColonyLocation": "1321 E MONO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-01",
        "DateExpire": "09/15/23",
        "Latitude": "34.0460253",
        "Longitude": "-118.226045"
      },
      {
        "ColonyLocation": "1321 E MONO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-01",
        "DateExpire": "09/15/23",
        "Latitude": "34.0460253",
        "Longitude": "-118.226045"
      },
      {
        "ColonyLocation": "2510 E PENNSYLVANIA AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-09-01",
        "DateExpire": "09/15/23",
        "Latitude": "34.0436283",
        "Longitude": "-118.2076816"
      },
      {
        "ColonyLocation": "GRIFFITH PARK BLVD AT LUCILE AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-01",
        "DateExpire": "09/15/23",
        "Latitude": "34.0921392",
        "Longitude": "-118.2780472"
      },
      {
        "ColonyLocation": "GRIFFITH PARK BLVD AT LUCILE AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-01",
        "DateExpire": "09/15/23",
        "Latitude": "34.0921392",
        "Longitude": "-118.2780472"
      },
      {
        "ColonyLocation": "GRIFFITH PARK BLVD AT LUCILE AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-01",
        "DateExpire": "09/15/23",
        "Latitude": "34.0921392",
        "Longitude": "-118.2780472"
      },
      {
        "ColonyLocation": "GLENDALE BLVD at BRUNSWICK AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-09-01",
        "DateExpire": "09/15/23",
        "Latitude": "34.1185932",
        "Longitude": "-118.2603124"
      },
      {
        "ColonyLocation": "MICHELTORENA ST AT MARATHON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-09-01",
        "DateExpire": "09/15/23",
        "Latitude": "34.0823028",
        "Longitude": "-118.2791528"
      },
      {
        "ColonyLocation": "BELLEVUE AVE AT SILVER LAKE BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.0783558",
        "Longitude": "-118.2791307"
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.0763675",
        "Longitude": "-118.2868363"
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.0763675",
        "Longitude": "-118.2868363"
      },
      {
        "ColonyLocation": "4123 W CUMBERLAND AVE, 90027",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.0993485",
        "Longitude": "-118.2814913"
      },
      {
        "ColonyLocation": "4123 W CUMBERLAND AVE, 90027",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.0993485",
        "Longitude": "-118.2814913"
      },
      {
        "ColonyLocation": "4123 W CUMBERLAND AVE, 90027",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.0993485",
        "Longitude": "-118.2814913"
      },
      {
        "ColonyLocation": "3458 N ARROYO SECO AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.087449",
        "Longitude": "-118.2153219"
      },
      {
        "ColonyLocation": "3458 N ARROYO SECO AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.087449",
        "Longitude": "-118.2153219"
      },
      {
        "ColonyLocation": "1042 E CESAR E CHAVEZ AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.053533",
        "Longitude": "-118.2244968"
      },
      {
        "ColonyLocation": "1042 E CESAR E CHAVEZ AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.053533",
        "Longitude": "-118.2244968"
      },
      {
        "ColonyLocation": "2570 E PENNSYLVANIA AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.0432609",
        "Longitude": "-118.2069638"
      },
      {
        "ColonyLocation": "2570 E PENNSYLVANIA AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.0432609",
        "Longitude": "-118.2069638"
      },
      {
        "ColonyLocation": "410 N FRESNO ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.04199",
        "Longitude": "-118.1960407"
      },
      {
        "ColonyLocation": "2222 E DAMON ST, 90021",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.028474",
        "Longitude": "-118.2329773"
      },
      {
        "ColonyLocation": "2222 E DAMON ST, 90021",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.028474",
        "Longitude": "-118.2329773"
      },
      {
        "ColonyLocation": "2222 E DAMON ST, 90021",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.028474",
        "Longitude": "-118.2329773"
      },
      {
        "ColonyLocation": "3212 N HURON ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.0862361",
        "Longitude": "-118.2205465"
      },
      {
        "ColonyLocation": "3212 N HURON ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.0862361",
        "Longitude": "-118.2205465"
      },
      {
        "ColonyLocation": "2616 W LOCKSLEY PL, 90039",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.1056349",
        "Longitude": "-118.2592094"
      },
      {
        "ColonyLocation": "3324 N DREW ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.1201553",
        "Longitude": "-118.2421778"
      },
      {
        "ColonyLocation": "3324 N DREW ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.1201553",
        "Longitude": "-118.2421778"
      },
      {
        "ColonyLocation": "3221 N ANDRITA ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.1182064",
        "Longitude": "-118.2436944"
      },
      {
        "ColonyLocation": "1916 W BELLEVUE AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.0677753",
        "Longitude": "-118.2521436"
      },
      {
        "ColonyLocation": "1202 S ALMA ST, 90731",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "33.733284",
        "Longitude": "-118.2987903"
      },
      {
        "ColonyLocation": "1911 W BELLEVUE AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.0676319",
        "Longitude": "-118.251845"
      },
      {
        "ColonyLocation": "1911 W BELLEVUE AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.0676319",
        "Longitude": "-118.251845"
      },
      {
        "ColonyLocation": "3318 E DARWIN AVE, 90031",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.067383",
        "Longitude": "-118.205642"
      },
      {
        "ColonyLocation": "5TH ST AT UNION AVE, 90017",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.0543797",
        "Longitude": "-118.2672801"
      },
      {
        "ColonyLocation": "4TH ST at UNION AVE, 90017",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.0543797",
        "Longitude": "-118.2672801"
      },
      {
        "ColonyLocation": "CATALINA ST AT PICO BLVD, 90006",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.0472558",
        "Longitude": "-118.2947364"
      },
      {
        "ColonyLocation": "ANDERSON ST AT 1ST ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.0476134",
        "Longitude": "-118.2267418"
      },
      {
        "ColonyLocation": "ANDERSON ST AT 1ST ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.0476134",
        "Longitude": "-118.2267418"
      },
      {
        "ColonyLocation": "ANDERSON ST AT 1ST ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.0476134",
        "Longitude": "-118.2267418"
      },
      {
        "ColonyLocation": "ANDERSON ST AT 1ST ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-08-27",
        "DateExpire": "09/10/23",
        "Latitude": "34.0476134",
        "Longitude": "-118.2267418"
      },
      {
        "ColonyLocation": "RAMPART BLVD AT TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-23",
        "DateExpire": "09/06/23",
        "Latitude": "34.0725289",
        "Longitude": "-118.2749109"
      },
      {
        "ColonyLocation": "RIVERSIDE DR AT GLOVER PL, 90031",
        "IsESA": "",
        "DateIssued": "2023-08-23",
        "DateExpire": "09/06/23",
        "Latitude": "34.0913494",
        "Longitude": "-118.2357575"
      },
      {
        "ColonyLocation": "LACLEDE AVE AT WILLIMET AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-08-23",
        "DateExpire": "09/06/23",
        "Latitude": "34.1323262",
        "Longitude": "-118.2667303"
      },
      {
        "ColonyLocation": "KENT ST AT ROSEMONT AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-23",
        "DateExpire": "09/06/23",
        "Latitude": "34.0751721",
        "Longitude": "-118.2672923"
      },
      {
        "ColonyLocation": "FRANCIS AVE AT HOOVER ST, 90005",
        "IsESA": "",
        "DateIssued": "2023-08-23",
        "DateExpire": "09/06/23",
        "Latitude": "34.0568407",
        "Longitude": "-118.2842427"
      },
      {
        "ColonyLocation": "FRANCIS AVE AT HOOVER ST, 90005",
        "IsESA": "",
        "DateIssued": "2023-08-23",
        "DateExpire": "09/06/23",
        "Latitude": "34.0568407",
        "Longitude": "-118.2842427"
      },
      {
        "ColonyLocation": "WHITE KNOLL DR AT ALPINE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-08-23",
        "DateExpire": "09/06/23",
        "Latitude": "34.0670826",
        "Longitude": "-118.2483258"
      },
      {
        "ColonyLocation": "WHITE KNOLL DR AT ALPINE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-08-23",
        "DateExpire": "09/06/23",
        "Latitude": "34.0670826",
        "Longitude": "-118.2483258"
      },
      {
        "ColonyLocation": "DE LONGPRE AVE AT KINGSLEY DR, 90027",
        "IsESA": "",
        "DateIssued": "2023-08-21",
        "DateExpire": "09/04/23",
        "Latitude": "34.0966646",
        "Longitude": "-118.3031643"
      },
      {
        "ColonyLocation": "DE LONGPRE AVE AT KINGSLEY DR, 90027",
        "IsESA": "",
        "DateIssued": "2023-08-21",
        "DateExpire": "09/04/23",
        "Latitude": "34.0966646",
        "Longitude": "-118.3031643"
      },
      {
        "ColonyLocation": "DE LONGPRE AVE AT KINGSLEY DR, 90027",
        "IsESA": "",
        "DateIssued": "2023-08-21",
        "DateExpire": "09/04/23",
        "Latitude": "34.0966646",
        "Longitude": "-118.3031643"
      },
      {
        "ColonyLocation": "DE LONGPRE AVE AT KINGSLEY DR, 90027",
        "IsESA": "",
        "DateIssued": "2023-08-21",
        "DateExpire": "09/04/23",
        "Latitude": "34.0966646",
        "Longitude": "-118.3031643"
      },
      {
        "ColonyLocation": "GLENDALE BLVD AT COURT ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0799869",
        "Longitude": "-118.260071"
      },
      {
        "ColonyLocation": "GLENDALE BLVD AT COURT ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0799869",
        "Longitude": "-118.260071"
      },
      {
        "ColonyLocation": "GLENDALE BLVD AT COURT ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0799869",
        "Longitude": "-118.260071"
      },
      {
        "ColonyLocation": "LACLEDE AVE AT WILLIMET AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.1323262",
        "Longitude": "-118.2667303"
      },
      {
        "ColonyLocation": "LACLEDE AVE AT WILLIMET AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.1323262",
        "Longitude": "-118.2667303"
      },
      {
        "ColonyLocation": "LACLEDE AVE AT WILLIMET AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.1323262",
        "Longitude": "-118.2667303"
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.090892",
        "Longitude": "-118.2867356"
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.090892",
        "Longitude": "-118.2867356"
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.090892",
        "Longitude": "-118.2867356"
      },
      {
        "ColonyLocation": "OLYMPIC BLVD AT SANTEE ST, 90015",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0388915",
        "Longitude": "-118.2549866"
      },
      {
        "ColonyLocation": "BRUNSWICK AVE AT BEMIS ST, 90039",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.1343273",
        "Longitude": "-118.2690349"
      },
      {
        "ColonyLocation": "BRUNSWICK AVE AT BEMIS ST, 90039",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.1343273",
        "Longitude": "-118.2690349"
      },
      {
        "ColonyLocation": "BRUNSWICK AVE AT BEMIS ST, 90039",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.1343273",
        "Longitude": "-118.2690349"
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.090892",
        "Longitude": "-118.2867356"
      },
      {
        "ColonyLocation": "FRANCIS AVE AT HOOVER ST, 90005",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0568407",
        "Longitude": "-118.2842427"
      },
      {
        "ColonyLocation": "FRANCIS AVE AT HOOVER ST, 90005",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0568407",
        "Longitude": "-118.2842427"
      },
      {
        "ColonyLocation": "1422 W CALUMET AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0690813",
        "Longitude": "-118.2563901"
      },
      {
        "ColonyLocation": "1422 W CALUMET AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0690813",
        "Longitude": "-118.2563901"
      },
      {
        "ColonyLocation": "1422 W CALUMET AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0690813",
        "Longitude": "-118.2563901"
      },
      {
        "ColonyLocation": "1422 W CALUMET AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0690813",
        "Longitude": "-118.2563901"
      },
      {
        "ColonyLocation": "1422 W CALUMET AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0690813",
        "Longitude": "-118.2563901"
      },
      {
        "ColonyLocation": "TEMPLE ST AT RAMPART BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0725289",
        "Longitude": "-118.2749109"
      },
      {
        "ColonyLocation": "TEMPLE ST AT RAMPART BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0725289",
        "Longitude": "-118.2749109"
      },
      {
        "ColonyLocation": "TEMPLE ST AT RAMPART BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0725289",
        "Longitude": "-118.2749109"
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0400025",
        "Longitude": "-118.2569549"
      },
      {
        "ColonyLocation": "MONROE ST AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0900646",
        "Longitude": "-118.2869162"
      },
      {
        "ColonyLocation": "MONROE ST AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0900646",
        "Longitude": "-118.2869162"
      },
      {
        "ColonyLocation": "MONROE ST AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0900646",
        "Longitude": "-118.2869162"
      },
      {
        "ColonyLocation": "MONROE ST AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0900646",
        "Longitude": "-118.2869162"
      },
      {
        "ColonyLocation": "108 E 5TH ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0463936",
        "Longitude": "-118.2483452"
      },
      {
        "ColonyLocation": "108 E 5TH ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0463936",
        "Longitude": "-118.2483452"
      },
      {
        "ColonyLocation": "108 E 5TH ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0463936",
        "Longitude": "-118.2483452"
      },
      {
        "ColonyLocation": "108 E 5TH ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0463936",
        "Longitude": "-118.2483452"
      },
      {
        "ColonyLocation": "108 E 5TH ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0463936",
        "Longitude": "-118.2483452"
      },
      {
        "ColonyLocation": "108 E 5TH ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0463936",
        "Longitude": "-118.2483452"
      },
      {
        "ColonyLocation": "1321 E MONO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0460253",
        "Longitude": "-118.226045"
      },
      {
        "ColonyLocation": "1321 E MONO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0460253",
        "Longitude": "-118.226045"
      },
      {
        "ColonyLocation": "1321 E MONO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0460253",
        "Longitude": "-118.226045"
      },
      {
        "ColonyLocation": "2222 E DAMON ST, 90021",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.028474",
        "Longitude": "-118.2329773"
      },
      {
        "ColonyLocation": "2222 E DAMON ST, 90021",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.028474",
        "Longitude": "-118.2329773"
      },
      {
        "ColonyLocation": "305 S CLARENCE ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0448256",
        "Longitude": "-118.2242681"
      },
      {
        "ColonyLocation": "305 S CLARENCE ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0448256",
        "Longitude": "-118.2242681"
      },
      {
        "ColonyLocation": "447 S LORENA ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0329301",
        "Longitude": "-118.1980795"
      },
      {
        "ColonyLocation": "447 S LORENA ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-08-16",
        "DateExpire": "08/30/23",
        "Latitude": "34.0329301",
        "Longitude": "-118.1980795"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE AT WESTERN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-08-14",
        "DateExpire": "08/28/23",
        "Latitude": "34.094902",
        "Longitude": "-118.3092299"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE AT WESTERN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-08-14",
        "DateExpire": "08/28/23",
        "Latitude": "34.094902",
        "Longitude": "-118.3092299"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE AT WESTERN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-08-14",
        "DateExpire": "08/28/23",
        "Latitude": "34.094902",
        "Longitude": "-118.3092299"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE AT WESTERN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-08-14",
        "DateExpire": "08/28/23",
        "Latitude": "34.094902",
        "Longitude": "-118.3092299"
      },
      {
        "ColonyLocation": "BEAUDRY AVE AT TEMPLE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-08-09",
        "DateExpire": "08/23/23",
        "Latitude": "34.0631983",
        "Longitude": "-118.2513502"
      },
      {
        "ColonyLocation": "1422 W CALUMET AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-09",
        "DateExpire": "08/23/23",
        "Latitude": "34.0690813",
        "Longitude": "-118.2563901"
      },
      {
        "ColonyLocation": "FRANCIS AVE AT HOOVER ST, 90005",
        "IsESA": "",
        "DateIssued": "2023-08-09",
        "DateExpire": "08/23/23",
        "Latitude": "34.0568407",
        "Longitude": "-118.2842427"
      },
      {
        "ColonyLocation": "TEMPLE ST AT RAMPART BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-09",
        "DateExpire": "08/23/23",
        "Latitude": "34.0725289",
        "Longitude": "-118.2749109"
      },
      {
        "ColonyLocation": "TEMPLE ST AT RAMPART BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-09",
        "DateExpire": "08/23/23",
        "Latitude": "34.0725289",
        "Longitude": "-118.2749109"
      },
      {
        "ColonyLocation": "TEMPLE ST AT RAMPART BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-09",
        "DateExpire": "08/23/23",
        "Latitude": "34.0725289",
        "Longitude": "-118.2749109"
      },
      {
        "ColonyLocation": "MIRAMAR ST AT BONNIE BRAE ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-08-09",
        "DateExpire": "08/23/23",
        "Latitude": "34.0631414",
        "Longitude": "-118.2693655"
      },
      {
        "ColonyLocation": "MIRAMAR ST AT BONNIE BRAE ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-08-09",
        "DateExpire": "08/23/23",
        "Latitude": "34.0631414",
        "Longitude": "-118.2693655"
      },
      {
        "ColonyLocation": "1422 W CALUMET AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0690813",
        "Longitude": "-118.2563901"
      },
      {
        "ColonyLocation": "1875 OAK TREE DR, 90041",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.1372051",
        "Longitude": "-118.2081645"
      },
      {
        "ColonyLocation": "1875 OAK TREE DR, 90041",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.1372051",
        "Longitude": "-118.2081645"
      },
      {
        "ColonyLocation": "4196 E YORK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.1234752",
        "Longitude": "-118.2268512"
      },
      {
        "ColonyLocation": "4196 E YORK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.1234752",
        "Longitude": "-118.2268512"
      },
      {
        "ColonyLocation": "4196 E YORK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.1234752",
        "Longitude": "-118.2268512"
      },
      {
        "ColonyLocation": "5315 N HILLMONT AVE, 90041",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.1431906",
        "Longitude": "-118.191933"
      },
      {
        "ColonyLocation": "TEMPLE ST AT RAMPART BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0725289",
        "Longitude": "-118.2749109"
      },
      {
        "ColonyLocation": "TEMPLE ST AT RAMPART BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0725289",
        "Longitude": "-118.2749109"
      },
      {
        "ColonyLocation": "TEMPLE ST AT RAMPART BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0725289",
        "Longitude": "-118.2749109"
      },
      {
        "ColonyLocation": "ARROYO SECO AVE AT AMABEL ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0878019",
        "Longitude": "-118.2150979"
      },
      {
        "ColonyLocation": "CORONADO ST AT COUNCIL ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0705599",
        "Longitude": "-118.274947"
      },
      {
        "ColonyLocation": "CASITAS AVE AT SILVER LAKE BLVD, 90039",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.1167444",
        "Longitude": "-118.2526986"
      },
      {
        "ColonyLocation": "8TH ST AT WESTLAKE AVE, 90057",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.054349",
        "Longitude": "-118.2766936"
      },
      {
        "ColonyLocation": "8TH ST AT WESTLAKE AVE, 90057",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.054349",
        "Longitude": "-118.2766936"
      },
      {
        "ColonyLocation": "8TH ST AT WESTLAKE AVE, 90057",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.054349",
        "Longitude": "-118.2766936"
      },
      {
        "ColonyLocation": "8TH ST AT WESTLAKE AVE, 90057",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.054349",
        "Longitude": "-118.2766936"
      },
      {
        "ColonyLocation": "1220 N STONE ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0532868",
        "Longitude": "-118.1937596"
      },
      {
        "ColonyLocation": "EVERGREEN AVE AT MARENGO ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0544725",
        "Longitude": "-118.1949435"
      },
      {
        "ColonyLocation": "1233 N ATWOOD ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0531694",
        "Longitude": "-118.1931503"
      },
      {
        "ColonyLocation": "134 S BONNIE BRAE ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0644734",
        "Longitude": "-118.268115"
      },
      {
        "ColonyLocation": "134 S BONNIE BRAE ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0644734",
        "Longitude": "-118.268115"
      },
      {
        "ColonyLocation": "134 S BONNIE BRAE ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0644734",
        "Longitude": "-118.268115"
      },
      {
        "ColonyLocation": "134 S BONNIE BRAE ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0644734",
        "Longitude": "-118.268115"
      },
      {
        "ColonyLocation": "6000 W SANTA MONICA BLVD, 90038",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0888841",
        "Longitude": "-118.319063"
      },
      {
        "ColonyLocation": "455 E 3RD ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0472912",
        "Longitude": "-118.2406473"
      },
      {
        "ColonyLocation": "455 E 3RD ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0472912",
        "Longitude": "-118.2406473"
      },
      {
        "ColonyLocation": "455 E 3RD ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0472912",
        "Longitude": "-118.2406473"
      },
      {
        "ColonyLocation": "5022 E LYNNFIELD ST, 90032",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0800349",
        "Longitude": "-118.1734988"
      },
      {
        "ColonyLocation": "5022 E LYNNFIELD ST, 90032",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0800349",
        "Longitude": "-118.1734988"
      },
      {
        "ColonyLocation": "5022 E LYNNFIELD ST, 90032",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0800349",
        "Longitude": "-118.1734988"
      },
      {
        "ColonyLocation": "5022 E LYNNFIELD ST, 90032",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0800349",
        "Longitude": "-118.1734988"
      },
      {
        "ColonyLocation": "325 S BOYLE AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0444936",
        "Longitude": "-118.2199732"
      },
      {
        "ColonyLocation": "325 S BOYLE AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0444936",
        "Longitude": "-118.2199732"
      },
      {
        "ColonyLocation": "325 S BOYLE AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-08-06",
        "DateExpire": "08/20/23",
        "Latitude": "34.0444936",
        "Longitude": "-118.2199732"
      },
      {
        "ColonyLocation": "830 N CENTENNIAL ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0658488",
        "Longitude": "-118.2462438"
      },
      {
        "ColonyLocation": "830 N CENTENNIAL ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0658488",
        "Longitude": "-118.2462438"
      },
      {
        "ColonyLocation": "830 N CENTENNIAL ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0658488",
        "Longitude": "-118.2462438"
      },
      {
        "ColonyLocation": "830 N CENTENNIAL ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0658488",
        "Longitude": "-118.2462438"
      },
      {
        "ColonyLocation": "830 N CENTENNIAL ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0658488",
        "Longitude": "-118.2462438"
      },
      {
        "ColonyLocation": "823 W ALPINE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0642126",
        "Longitude": "-118.2447294"
      },
      {
        "ColonyLocation": "823 W ALPINE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0642126",
        "Longitude": "-118.2447294"
      },
      {
        "ColonyLocation": "823 W ALPINE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0642126",
        "Longitude": "-118.2447294"
      },
      {
        "ColonyLocation": "823 W ALPINE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0642126",
        "Longitude": "-118.2447294"
      },
      {
        "ColonyLocation": "823 W ALPINE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0642126",
        "Longitude": "-118.2447294"
      },
      {
        "ColonyLocation": "823 W ALPINE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0642126",
        "Longitude": "-118.2447294"
      },
      {
        "ColonyLocation": "823 W ALPINE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0642126",
        "Longitude": "-118.2447294"
      },
      {
        "ColonyLocation": "823 W ALPINE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0642126",
        "Longitude": "-118.2447294"
      },
      {
        "ColonyLocation": "2411 N FORNEY ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0953829",
        "Longitude": "-118.2408485"
      },
      {
        "ColonyLocation": "2411 N FORNEY ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0953829",
        "Longitude": "-118.2408485"
      },
      {
        "ColonyLocation": "2411 N FORNEY ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0953829",
        "Longitude": "-118.2408485"
      },
      {
        "ColonyLocation": "2411 N FORNEY ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0953829",
        "Longitude": "-118.2408485"
      },
      {
        "ColonyLocation": "2411 N FORNEY ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0953829",
        "Longitude": "-118.2408485"
      },
      {
        "ColonyLocation": "2411 N FORNEY ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0953829",
        "Longitude": "-118.2408485"
      },
      {
        "ColonyLocation": "2411 N FORNEY ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0953829",
        "Longitude": "-118.2408485"
      },
      {
        "ColonyLocation": "2411 N FORNEY ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0953829",
        "Longitude": "-118.2408485"
      },
      {
        "ColonyLocation": "BRUNSWICK AVE AT VESELICH AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.1268446",
        "Longitude": "-118.2670901"
      },
      {
        "ColonyLocation": "BRUNSWICK AVE AT VESELICH AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.1268446",
        "Longitude": "-118.2670901"
      },
      {
        "ColonyLocation": "BRUNSWICK AVE AT VESELICH AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.1268446",
        "Longitude": "-118.2670901"
      },
      {
        "ColonyLocation": "BRUNSWICK AVE AT VESELICH AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.1268446",
        "Longitude": "-118.2670901"
      },
      {
        "ColonyLocation": "BRUNSWICK AVE AT VESELICH AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.1268446",
        "Longitude": "-118.2670901"
      },
      {
        "ColonyLocation": "BRUNSWICK AVE AT VESELICH AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.1268446",
        "Longitude": "-118.2670901"
      },
      {
        "ColonyLocation": "BRUNSWICK AVE AT VESELICH AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.1268446",
        "Longitude": "-118.2670901"
      },
      {
        "ColonyLocation": "HUMBOLDT ST AT AVENUE 31, 90031",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.081758",
        "Longitude": "-118.2162168"
      },
      {
        "ColonyLocation": "HUMBOLDT ST AT AVENUE 31, 90031",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.081758",
        "Longitude": "-118.2162168"
      },
      {
        "ColonyLocation": "HUMBOLDT ST AT AVENUE 31, 90031",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.081758",
        "Longitude": "-118.2162168"
      },
      {
        "ColonyLocation": "HUMBOLDT ST AT AVENUE 31, 90031",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.081758",
        "Longitude": "-118.2162168"
      },
      {
        "ColonyLocation": "HUMBOLDT ST AT AVENUE 31, 90031",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.081758",
        "Longitude": "-118.2162168"
      },
      {
        "ColonyLocation": "HUMBOLDT ST AT AVENUE 31, 90031",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.081758",
        "Longitude": "-118.2162168"
      },
      {
        "ColonyLocation": "HUMBOLDT ST AT AVENUE 31, 90031",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.081758",
        "Longitude": "-118.2162168"
      },
      {
        "ColonyLocation": "5315 N HILLMONT AVE, 90041",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.1431906",
        "Longitude": "-118.191933"
      },
      {
        "ColonyLocation": "NORTH MAIN ST AT ALBION ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0674561",
        "Longitude": "-118.2239613"
      },
      {
        "ColonyLocation": "ORD ST AT NORTH BROADWAY, 90012",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "09/13/23",
        "Latitude": "34.0603431",
        "Longitude": "-118.2393336"
      },
      {
        "ColonyLocation": "4196 E YORK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.1234752",
        "Longitude": "-118.2268512"
      },
      {
        "ColonyLocation": "4196 E YORK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.1234752",
        "Longitude": "-118.2268512"
      },
      {
        "ColonyLocation": "4196 E YORK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.1234752",
        "Longitude": "-118.2268512"
      },
      {
        "ColonyLocation": "142 S NEW HAMPSHIRE AVE, 90004",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0714279",
        "Longitude": "-118.2925158"
      },
      {
        "ColonyLocation": "142 S NEW HAMPSHIRE AVE, 90004",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0714279",
        "Longitude": "-118.2925158"
      },
      {
        "ColonyLocation": "142 S NEW HAMPSHIRE AVE, 90004",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.0714279",
        "Longitude": "-118.2925158"
      },
      {
        "ColonyLocation": "COMMONWEALTH AVE AT LOS FELIZ BLVD, 90027",
        "IsESA": "",
        "DateIssued": "2023-08-02",
        "DateExpire": "08/16/23",
        "Latitude": "34.1123054",
        "Longitude": "-118.2852766"
      },
      {
        "ColonyLocation": "RIVERSIDE DR AT LOS FELIZ BLVD, 90039",
        "IsESA": "",
        "DateIssued": "2023-07-31",
        "DateExpire": "08/14/23",
        "Latitude": "34.1169975",
        "Longitude": "-118.2716913"
      },
      {
        "ColonyLocation": "BEVERLY BLVD AT ALVARADO ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-07-31",
        "DateExpire": "08/14/23",
        "Latitude": "34.0666849",
        "Longitude": "-118.2703225"
      },
      {
        "ColonyLocation": "BEVERLY BLVD AT ALVARADO ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-07-31",
        "DateExpire": "08/14/23",
        "Latitude": "34.0666849",
        "Longitude": "-118.2703225"
      },
      {
        "ColonyLocation": "BEAUDRY AVE at SUNSET BLVD, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.0652171",
        "Longitude": "-118.2492342"
      },
      {
        "ColonyLocation": "BEAUDRY AVE at SUNSET BLVD, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.0652171",
        "Longitude": "-118.2492342"
      },
      {
        "ColonyLocation": "BEAUDRY AVE at SUNSET BLVD, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.0652171",
        "Longitude": "-118.2492342"
      },
      {
        "ColonyLocation": "VENDOME ST AT 3RD ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.0685095",
        "Longitude": "-118.2842969"
      },
      {
        "ColonyLocation": "BROADWAY at WASHINGTON BLVD, 90007",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.0114952",
        "Longitude": "-118.410598"
      },
      {
        "ColonyLocation": "COURT ST AT PATTON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.0662811",
        "Longitude": "-118.2585743"
      },
      {
        "ColonyLocation": "COURT ST AT PATTON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.0662811",
        "Longitude": "-118.2585743"
      },
      {
        "ColonyLocation": "COURT ST AT PATTON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.0662811",
        "Longitude": "-118.2585743"
      },
      {
        "ColonyLocation": "4196 E YORK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.1234752",
        "Longitude": "-118.2268512"
      },
      {
        "ColonyLocation": "4196 E YORK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.1234752",
        "Longitude": "-118.2268512"
      },
      {
        "ColonyLocation": "4196 E YORK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.1234752",
        "Longitude": "-118.2268512"
      },
      {
        "ColonyLocation": "4196 E YORK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.1234752",
        "Longitude": "-118.2268512"
      },
      {
        "ColonyLocation": "4196 E YORK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.1234752",
        "Longitude": "-118.2268512"
      },
      {
        "ColonyLocation": "4196 E YORK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.1234752",
        "Longitude": "-118.2268512"
      },
      {
        "ColonyLocation": "ABBOTT PL AT AVENUE 54, 90042",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.1120308",
        "Longitude": "-118.1990986"
      },
      {
        "ColonyLocation": "ABBOTT PL AT AVENUE 54, 90042",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.1120308",
        "Longitude": "-118.1990986"
      },
      {
        "ColonyLocation": "130 W BRUNO ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.0623185",
        "Longitude": "-118.235754"
      },
      {
        "ColonyLocation": "130 W BRUNO ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.0623185",
        "Longitude": "-118.235754"
      },
      {
        "ColonyLocation": "130 W BRUNO ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.0623185",
        "Longitude": "-118.235754"
      },
      {
        "ColonyLocation": "3125 N CARLYLE ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.1067916",
        "Longitude": "-118.2353934"
      },
      {
        "ColonyLocation": "3427 N DREW ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.1215902",
        "Longitude": "-118.2411156"
      },
      {
        "ColonyLocation": "3427 N DREW ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.1215902",
        "Longitude": "-118.2411156"
      },
      {
        "ColonyLocation": "3170 W ESTARA AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.1194148",
        "Longitude": "-118.2428633"
      },
      {
        "ColonyLocation": "EVERGREEN AVE AT MARENGO ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.0544725",
        "Longitude": "-118.1949435"
      },
      {
        "ColonyLocation": "EVERGREEN AVE AT MARENGO ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.0544725",
        "Longitude": "-118.1949435"
      },
      {
        "ColonyLocation": "134 S BONNIE BRAE ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.0644734",
        "Longitude": "-118.268115"
      },
      {
        "ColonyLocation": "1916 W BELLEVUE AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-30",
        "DateExpire": "08/13/23",
        "Latitude": "34.0677753",
        "Longitude": "-118.2521436"
      },
      {
        "ColonyLocation": "WANDA DR AT HOLLY KNOLL DR, 90027",
        "IsESA": "",
        "DateIssued": "2023-07-26",
        "DateExpire": "08/09/23",
        "Latitude": "34.1064235",
        "Longitude": "-118.2809295"
      },
      {
        "ColonyLocation": "VIRGIL AVE AT NORMAL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-07-26",
        "DateExpire": "08/09/23",
        "Latitude": "34.0866545",
        "Longitude": "-118.286892"
      },
      {
        "ColonyLocation": "VIRGIL AVE AT NORMAL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-07-26",
        "DateExpire": "08/09/23",
        "Latitude": "34.0866545",
        "Longitude": "-118.286892"
      },
      {
        "ColonyLocation": "FEDORA ST AT OLYMPIC BLVD, 90006",
        "IsESA": "",
        "DateIssued": "2023-07-26",
        "DateExpire": "08/09/23",
        "Latitude": "34.0526352",
        "Longitude": "-118.2979145"
      },
      {
        "ColonyLocation": "COURT ST AT PATTON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-26",
        "DateExpire": "08/09/23",
        "Latitude": "34.0662811",
        "Longitude": "-118.2585743"
      },
      {
        "ColonyLocation": "LYMAN PL AT LEXINGTON AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-07-26",
        "DateExpire": "08/09/23",
        "Latitude": "34.0934694",
        "Longitude": "-118.2886939"
      },
      {
        "ColonyLocation": "BEAUDRY AVE at SUNSET BLVD, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-26",
        "DateExpire": "08/09/23",
        "Latitude": "34.0652171",
        "Longitude": "-118.2492342"
      },
      {
        "ColonyLocation": "BEAUDRY AVE at SUNSET BLVD, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-26",
        "DateExpire": "08/09/23",
        "Latitude": "34.0652171",
        "Longitude": "-118.2492342"
      },
      {
        "ColonyLocation": "BURLINGTON AVE AT COURT ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-24",
        "DateExpire": "08/07/23",
        "Latitude": "34.0683231",
        "Longitude": "-118.265051"
      },
      {
        "ColonyLocation": "BURLINGTON AVE AT COURT ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-24",
        "DateExpire": "08/07/23",
        "Latitude": "34.0683231",
        "Longitude": "-118.265051"
      },
      {
        "ColonyLocation": "BURLINGTON AVE AT COURT ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-24",
        "DateExpire": "08/07/23",
        "Latitude": "34.0683231",
        "Longitude": "-118.265051"
      },
      {
        "ColonyLocation": "325 E 3RD ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.0482067",
        "Longitude": "-118.2432067"
      },
      {
        "ColonyLocation": "325 E 3RD ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.0482067",
        "Longitude": "-118.2432067"
      },
      {
        "ColonyLocation": "325 E 3RD ST, 90013",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.0482067",
        "Longitude": "-118.2432067"
      },
      {
        "ColonyLocation": "NEW HAMPSHIRE AVE AT 1ST ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.0760846",
        "Longitude": "-118.2929786"
      },
      {
        "ColonyLocation": "NEW HAMPSHIRE AVE AT 1ST ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.0760846",
        "Longitude": "-118.2929786"
      },
      {
        "ColonyLocation": "4121 N SHELBURN CT, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.0940101",
        "Longitude": "-118.2104796"
      },
      {
        "ColonyLocation": "AVENUE 52 AT GRANADA ST, 90042",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.1107157",
        "Longitude": "-118.2026851"
      },
      {
        "ColonyLocation": "GRIFFITH PARK BLVD AT LUCILE AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.0921392",
        "Longitude": "-118.2780472"
      },
      {
        "ColonyLocation": "CYPRESS AVE AT ARROYO SECO AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.0858464",
        "Longitude": "-118.2182722"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE AT WESTERN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.094902",
        "Longitude": "-118.3092299"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE AT WESTERN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.094902",
        "Longitude": "-118.3092299"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE AT WESTERN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.094902",
        "Longitude": "-118.3092299"
      },
      {
        "ColonyLocation": "RENO ST AT TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.0744777",
        "Longitude": "-118.2793553"
      },
      {
        "ColonyLocation": "WANDA DR AT HOLLY KNOLL DR, 90027",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.1064235",
        "Longitude": "-118.2809295"
      },
      {
        "ColonyLocation": "WANDA DR AT HOLLY KNOLL DR, 90027",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.1064235",
        "Longitude": "-118.2809295"
      },
      {
        "ColonyLocation": "WANDA DR AT HOLLY KNOLL DR, 90027",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.1064235",
        "Longitude": "-118.2809295"
      },
      {
        "ColonyLocation": "1ST ST AT DACOTAH ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.0395154",
        "Longitude": "-118.2003345"
      },
      {
        "ColonyLocation": "3025 N MANITOU AVE, 90031",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.0721503",
        "Longitude": "-118.2094504"
      },
      {
        "ColonyLocation": "3025 N MANITOU AVE, 90031",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.0721503",
        "Longitude": "-118.2094504"
      },
      {
        "ColonyLocation": "EVERGREEN AVE AT MARENGO ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.0544725",
        "Longitude": "-118.1949435"
      },
      {
        "ColonyLocation": "EVERGREEN AVE AT MARENGO ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.0544725",
        "Longitude": "-118.1949435"
      },
      {
        "ColonyLocation": "EVERGREEN AVE AT MARENGO ST, 90063",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.0544725",
        "Longitude": "-118.1949435"
      },
      {
        "ColonyLocation": "57TH ST AT HOOPER AVE, 90011",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "33.9911307",
        "Longitude": "-118.2521186"
      },
      {
        "ColonyLocation": "57TH ST AT HOOPER AVE, 90011",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "33.9911307",
        "Longitude": "-118.2521186"
      },
      {
        "ColonyLocation": "57TH ST AT HOOPER AVE, 90011",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "33.9911307",
        "Longitude": "-118.2521186"
      },
      {
        "ColonyLocation": "57TH ST AT HOOPER AVE, 90011",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "33.9911307",
        "Longitude": "-118.2521186"
      },
      {
        "ColonyLocation": "57TH ST AT HOOPER AVE, 90011",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "33.9911307",
        "Longitude": "-118.2521186"
      },
      {
        "ColonyLocation": "57TH ST AT HOOPER AVE, 90011",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "33.9911307",
        "Longitude": "-118.2521186"
      },
      {
        "ColonyLocation": "57TH ST AT HOOPER AVE, 90011",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "33.9911307",
        "Longitude": "-118.2521186"
      },
      {
        "ColonyLocation": "57TH ST AT HOOPER AVE, 90011",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "33.9911307",
        "Longitude": "-118.2521186"
      },
      {
        "ColonyLocation": "57TH ST AT HOOPER AVE, 90011",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "33.9911307",
        "Longitude": "-118.2521186"
      },
      {
        "ColonyLocation": "2ND ST at LOMA DR, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.0612954",
        "Longitude": "-118.263775"
      },
      {
        "ColonyLocation": "2ND ST at LOMA DR, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.0612954",
        "Longitude": "-118.263775"
      },
      {
        "ColonyLocation": "3RD ST AT SAN PEDRO ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.0480697",
        "Longitude": "-118.2422398"
      },
      {
        "ColonyLocation": "3RD ST AT SAN PEDRO ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-23",
        "DateExpire": "08/06/23",
        "Latitude": "34.0480697",
        "Longitude": "-118.2422398"
      },
      {
        "ColonyLocation": "TEMPLE ST at COMMONWEALTH AVE, 90004",
        "IsESA": "",
        "DateIssued": "2023-07-19",
        "DateExpire": "08/02/23",
        "Latitude": "34.0767241",
        "Longitude": "-118.2856117"
      },
      {
        "ColonyLocation": "TEMPLE ST at COMMONWEALTH AVE, 90004",
        "IsESA": "",
        "DateIssued": "2023-07-19",
        "DateExpire": "08/02/23",
        "Latitude": "34.0767241",
        "Longitude": "-118.2856117"
      },
      {
        "ColonyLocation": "WANDA DR AT HOLLY KNOLL DR, 90027",
        "IsESA": "",
        "DateIssued": "2023-07-19",
        "DateExpire": "08/02/23",
        "Latitude": "34.1064235",
        "Longitude": "-118.2809295"
      },
      {
        "ColonyLocation": "WANDA DR AT HOLLY KNOLL DR, 90027",
        "IsESA": "",
        "DateIssued": "2023-07-19",
        "DateExpire": "08/02/23",
        "Latitude": "34.1064235",
        "Longitude": "-118.2809295"
      },
      {
        "ColonyLocation": "WANDA DR AT HOLLY KNOLL DR, 90027",
        "IsESA": "",
        "DateIssued": "2023-07-19",
        "DateExpire": "08/02/23",
        "Latitude": "34.1064235",
        "Longitude": "-118.2809295"
      },
      {
        "ColonyLocation": "WANDA DR AT HOLLY KNOLL DR, 90027",
        "IsESA": "",
        "DateIssued": "2023-07-19",
        "DateExpire": "08/02/23",
        "Latitude": "34.1064235",
        "Longitude": "-118.2809295"
      },
      {
        "ColonyLocation": "WANDA DR AT HOLLY KNOLL DR, 90027",
        "IsESA": "",
        "DateIssued": "2023-07-19",
        "DateExpire": "08/02/23",
        "Latitude": "34.1064235",
        "Longitude": "-118.2809295"
      },
      {
        "ColonyLocation": "WANDA DR AT HOLLY KNOLL DR, 90027",
        "IsESA": "",
        "DateIssued": "2023-07-19",
        "DateExpire": "08/02/23",
        "Latitude": "34.1064235",
        "Longitude": "-118.2809295"
      },
      {
        "ColonyLocation": "LEXINGTON AVE AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-07-19",
        "DateExpire": "08/02/23",
        "Latitude": "34.0934715",
        "Longitude": "-118.2866005"
      },
      {
        "ColonyLocation": "SCOTT AVE at PORTIA ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-19",
        "DateExpire": "08/02/23",
        "Latitude": "34.0786267",
        "Longitude": "-118.252412"
      },
      {
        "ColonyLocation": "COMMONWEALTH AVE at TEMPLE ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "08/07/23",
        "Latitude": "34.0767241",
        "Longitude": "-118.2856117"
      },
      {
        "ColonyLocation": "NORTH MAIN ST AT ALBION ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0674561",
        "Longitude": "-118.2239613"
      },
      {
        "ColonyLocation": "3740 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0239158",
        "Longitude": "-118.1926704"
      },
      {
        "ColonyLocation": "2901 E MARENGO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0546428",
        "Longitude": "-118.1947347"
      },
      {
        "ColonyLocation": "2901 E MARENGO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "08/07/23",
        "Latitude": "34.0546428",
        "Longitude": "-118.1947347"
      },
      {
        "ColonyLocation": "3223 E CITY TERRACE DR, 90063",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0491462",
        "Longitude": "-118.1918159"
      },
      {
        "ColonyLocation": "3534 E SISKIYOU ST, 90023",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0249945",
        "Longitude": "-118.198225"
      },
      {
        "ColonyLocation": "1710 S INDUSTRIAL WAY, 90023",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0224471",
        "Longitude": "-118.2000277"
      },
      {
        "ColonyLocation": "1710 S INDUSTRIAL WAY, 90023",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0224471",
        "Longitude": "-118.2000277"
      },
      {
        "ColonyLocation": "415 S ST LOUIS ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0399025",
        "Longitude": "-118.217186"
      },
      {
        "ColonyLocation": "536 S BERNAL AVE, 90063",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0318001",
        "Longitude": "-118.1992308"
      },
      {
        "ColonyLocation": "HOPE ST AT TEMPLE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0589445",
        "Longitude": "-118.2474133"
      },
      {
        "ColonyLocation": "HOPE ST AT TEMPLE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0589445",
        "Longitude": "-118.2474133"
      },
      {
        "ColonyLocation": "HOPE ST AT TEMPLE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0589445",
        "Longitude": "-118.2474133"
      },
      {
        "ColonyLocation": "HOPE ST AT TEMPLE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0589445",
        "Longitude": "-118.2474133"
      },
      {
        "ColonyLocation": "HOPE ST AT TEMPLE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0589445",
        "Longitude": "-118.2474133"
      },
      {
        "ColonyLocation": "HOPE ST AT TEMPLE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0589445",
        "Longitude": "-118.2474133"
      },
      {
        "ColonyLocation": "HOPE ST AT TEMPLE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0589445",
        "Longitude": "-118.2474133"
      },
      {
        "ColonyLocation": "HOPE ST AT TEMPLE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0589445",
        "Longitude": "-118.2474133"
      },
      {
        "ColonyLocation": "HOPE ST AT TEMPLE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0589445",
        "Longitude": "-118.2474133"
      },
      {
        "ColonyLocation": "COMMONWEALTH AVE at TEMPLE ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0767241",
        "Longitude": "-118.2856117"
      },
      {
        "ColonyLocation": "COMMONWEALTH AVE at TEMPLE ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0767241",
        "Longitude": "-118.2856117"
      },
      {
        "ColonyLocation": "COMMONWEALTH AVE at TEMPLE ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0767241",
        "Longitude": "-118.2856117"
      },
      {
        "ColonyLocation": "COMMONWEALTH AVE at TEMPLE ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0767241",
        "Longitude": "-118.2856117"
      },
      {
        "ColonyLocation": "COMMONWEALTH AVE at TEMPLE ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0767241",
        "Longitude": "-118.2856117"
      },
      {
        "ColonyLocation": "ROBINSON ST AT TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0756844",
        "Longitude": "-118.2821236"
      },
      {
        "ColonyLocation": "7TH ST AT CATALINA ST, 90005",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0597588",
        "Longitude": "-118.295417"
      },
      {
        "ColonyLocation": "4TH ST at CORONADO ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "32.6858853",
        "Longitude": "-117.1830891"
      },
      {
        "ColonyLocation": "7TH ST AT WESTLAKE AVE, 90057",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0559282",
        "Longitude": "-118.2756623"
      },
      {
        "ColonyLocation": "7TH ST AT WESTLAKE AVE, 90057",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0559282",
        "Longitude": "-118.2756623"
      },
      {
        "ColonyLocation": "7TH ST AT WESTLAKE AVE, 90057",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0559282",
        "Longitude": "-118.2756623"
      },
      {
        "ColonyLocation": "325 S BOYLE AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0444936",
        "Longitude": "-118.2199732"
      },
      {
        "ColonyLocation": "325 S BOYLE AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0444936",
        "Longitude": "-118.2199732"
      },
      {
        "ColonyLocation": "325 S BOYLE AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-16",
        "DateExpire": "07/30/23",
        "Latitude": "34.0444936",
        "Longitude": "-118.2199732"
      },
      {
        "ColonyLocation": "3611 N EAGLE ROCK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-13",
        "DateExpire": "07/27/23",
        "Latitude": "34.1177311",
        "Longitude": "-118.234222"
      },
      {
        "ColonyLocation": "3611 N EAGLE ROCK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-13",
        "DateExpire": "07/27/23",
        "Latitude": "34.1177311",
        "Longitude": "-118.234222"
      },
      {
        "ColonyLocation": "3611 N EAGLE ROCK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-13",
        "DateExpire": "07/27/23",
        "Latitude": "34.1177311",
        "Longitude": "-118.234222"
      },
      {
        "ColonyLocation": "3611 N EAGLE ROCK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-13",
        "DateExpire": "07/27/23",
        "Latitude": "34.1177311",
        "Longitude": "-118.234222"
      },
      {
        "ColonyLocation": "3611 N EAGLE ROCK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-13",
        "DateExpire": "07/27/23",
        "Latitude": "34.1177311",
        "Longitude": "-118.234222"
      },
      {
        "ColonyLocation": "3611 N EAGLE ROCK BLVD, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-13",
        "DateExpire": "07/27/23",
        "Latitude": "34.1177311",
        "Longitude": "-118.234222"
      },
      {
        "ColonyLocation": "BERENDO ST at LEXINGTON AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-07-12",
        "DateExpire": "07/26/23",
        "Latitude": "34.093442",
        "Longitude": "-118.2939135"
      },
      {
        "ColonyLocation": "BELLEVUE AVE at CORONADO ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-12",
        "DateExpire": "07/26/23",
        "Latitude": "34.0750456",
        "Longitude": "-118.2717225"
      },
      {
        "ColonyLocation": "FIGUEROA ST AT AVENUE 37, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-12",
        "DateExpire": "07/26/23",
        "Latitude": "34.0901034",
        "Longitude": "-118.2125496"
      },
      {
        "ColonyLocation": "FIGUEROA ST AT AVENUE 37, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-12",
        "DateExpire": "07/26/23",
        "Latitude": "34.0901034",
        "Longitude": "-118.2125496"
      },
      {
        "ColonyLocation": "NEW HAMPSHIRE AVE AT SANTA MONICA BLVD, 90029",
        "IsESA": "",
        "DateIssued": "2023-07-12",
        "DateExpire": "07/26/23",
        "Latitude": "34.0908774",
        "Longitude": "-118.2928161"
      },
      {
        "ColonyLocation": "RAMPART BLVD AT TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0725289",
        "Longitude": "-118.2749109"
      },
      {
        "ColonyLocation": "919 N ARDMORE AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0868708",
        "Longitude": "-118.3021194"
      },
      {
        "ColonyLocation": "6020 E ANNAN WAY, 90042",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.1289041",
        "Longitude": "-118.1893602"
      },
      {
        "ColonyLocation": "153 N NEW HAMPSHIRE AVE, 90004",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0742599",
        "Longitude": "-118.2932735"
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0400025",
        "Longitude": "-118.2569549"
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0400025",
        "Longitude": "-118.2569549"
      },
      {
        "ColonyLocation": "ORD ST AT NORTH BROADWAY, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0603431",
        "Longitude": "-118.2393336"
      },
      {
        "ColonyLocation": "360 N AVENUE 57, 90042",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.1135064",
        "Longitude": "-118.1945871"
      },
      {
        "ColonyLocation": "2606 W AVENUE 32, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.1093156",
        "Longitude": "-118.2380865"
      },
      {
        "ColonyLocation": "2606 W AVENUE 32, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.1093156",
        "Longitude": "-118.2380865"
      },
      {
        "ColonyLocation": "2606 W AVENUE 32, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.1093156",
        "Longitude": "-118.2380865"
      },
      {
        "ColonyLocation": "3228 N VERDUGO ROAD, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.1975883",
        "Longitude": "-118.229035"
      },
      {
        "ColonyLocation": "3228 N VERDUGO ROAD, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.1975883",
        "Longitude": "-118.229035"
      },
      {
        "ColonyLocation": "325 S BOYLE AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0444936",
        "Longitude": "-118.2199732"
      },
      {
        "ColonyLocation": "325 S BOYLE AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0444936",
        "Longitude": "-118.2199732"
      },
      {
        "ColonyLocation": "1342 E WARREN ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0516236",
        "Longitude": "-118.2204778"
      },
      {
        "ColonyLocation": "NORTH MAIN ST AT ALBION ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0674561",
        "Longitude": "-118.2239613"
      },
      {
        "ColonyLocation": "NORTH MAIN ST AT ALBION ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0674561",
        "Longitude": "-118.2239613"
      },
      {
        "ColonyLocation": "RAMPART BLVD AT TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0725289",
        "Longitude": "-118.2749109"
      },
      {
        "ColonyLocation": "AVENUE 32 at FLETCHER DR, 90065",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.1167489",
        "Longitude": "-118.2431638"
      },
      {
        "ColonyLocation": "2719 W LOCKSLEY PL, 90039",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.1075827",
        "Longitude": "-118.2619624"
      },
      {
        "ColonyLocation": "PARK VIEW ST AT MIRAMAR ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0654932",
        "Longitude": "-118.2756105"
      },
      {
        "ColonyLocation": "CATALINA ST AT 7TH ST, 90005",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0597588",
        "Longitude": "-118.295417"
      },
      {
        "ColonyLocation": "2816 N ALLESANDRO ST, 90039",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.1028042",
        "Longitude": "-118.2474316"
      },
      {
        "ColonyLocation": "1042 N EVERGREEN AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0510941",
        "Longitude": "-118.1960934"
      },
      {
        "ColonyLocation": "1042 N EVERGREEN AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0510941",
        "Longitude": "-118.1960934"
      },
      {
        "ColonyLocation": "1042 N EVERGREEN AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0510941",
        "Longitude": "-118.1960934"
      },
      {
        "ColonyLocation": "1042 N EVERGREEN AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0510941",
        "Longitude": "-118.1960934"
      },
      {
        "ColonyLocation": "1042 N EVERGREEN AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0510941",
        "Longitude": "-118.1960934"
      },
      {
        "ColonyLocation": "1042 N EVERGREEN AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0510941",
        "Longitude": "-118.1960934"
      },
      {
        "ColonyLocation": "536 S BERNAL AVE, 90063",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0318001",
        "Longitude": "-118.1992308"
      },
      {
        "ColonyLocation": "536 S BERNAL AVE, 90063",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0318001",
        "Longitude": "-118.1992308"
      },
      {
        "ColonyLocation": "536 S BERNAL AVE, 90063",
        "IsESA": "",
        "DateIssued": "2023-07-09",
        "DateExpire": "07/23/23",
        "Latitude": "34.0318001",
        "Longitude": "-118.1992308"
      },
      {
        "ColonyLocation": "10863 W SHERMAN WAY, 91352",
        "IsESA": "",
        "DateIssued": "2023-07-08",
        "DateExpire": "07/22/23",
        "Latitude": "34.2015234",
        "Longitude": "-118.3680139"
      },
      {
        "ColonyLocation": "10863 W SHERMAN WAY, 91352",
        "IsESA": "",
        "DateIssued": "2023-07-08",
        "DateExpire": "07/22/23",
        "Latitude": "34.2015234",
        "Longitude": "-118.3680139"
      },
      {
        "ColonyLocation": "10863 W SHERMAN WAY, 91352",
        "IsESA": "",
        "DateIssued": "2023-07-08",
        "DateExpire": "07/22/23",
        "Latitude": "34.2015234",
        "Longitude": "-118.3680139"
      },
      {
        "ColonyLocation": "10863 W SHERMAN WAY, 91352",
        "IsESA": "",
        "DateIssued": "2023-07-08",
        "DateExpire": "07/22/23",
        "Latitude": "34.2015234",
        "Longitude": "-118.3680139"
      },
      {
        "ColonyLocation": "10863 W SHERMAN WAY, 91352",
        "IsESA": "",
        "DateIssued": "2023-07-08",
        "DateExpire": "07/22/23",
        "Latitude": "34.2015234",
        "Longitude": "-118.3680139"
      },
      {
        "ColonyLocation": "10863 W SHERMAN WAY, 91352",
        "IsESA": "",
        "DateIssued": "2023-07-08",
        "DateExpire": "07/22/23",
        "Latitude": "34.2015234",
        "Longitude": "-118.3680139"
      },
      {
        "ColonyLocation": "10863 W SHERMAN WAY, 91352",
        "IsESA": "",
        "DateIssued": "2023-07-08",
        "DateExpire": "07/22/23",
        "Latitude": "34.2015234",
        "Longitude": "-118.3680139"
      },
      {
        "ColonyLocation": "DOUGLAS ST AT TOLUCA ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-05",
        "DateExpire": "07/19/23",
        "Latitude": "34.061736",
        "Longitude": "-118.2585212"
      },
      {
        "ColonyLocation": "BURLINGTON AVE AT COURT ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-05",
        "DateExpire": "07/19/23",
        "Latitude": "34.0683231",
        "Longitude": "-118.265051"
      },
      {
        "ColonyLocation": "BURLINGTON AVE AT COURT ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-05",
        "DateExpire": "07/19/23",
        "Latitude": "34.0683231",
        "Longitude": "-118.265051"
      },
      {
        "ColonyLocation": "HARVARD BLVD at HOLLYWOOD BLVD, 90027",
        "IsESA": "",
        "DateIssued": "2023-07-05",
        "DateExpire": "07/19/23",
        "Latitude": "34.1017596",
        "Longitude": "-118.3043924"
      },
      {
        "ColonyLocation": "TEMPLE ST AT CARONDELET ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-05",
        "DateExpire": "07/19/23",
        "Latitude": "34.0718901",
        "Longitude": "-118.2729579"
      },
      {
        "ColonyLocation": "TEMPLE ST at CORONADO ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-05",
        "DateExpire": "07/19/23",
        "Latitude": "34.0722039",
        "Longitude": "-118.2738954"
      },
      {
        "ColonyLocation": "EFFIE ST at LAKE SHORE AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-05",
        "DateExpire": "07/19/23",
        "Latitude": "34.0843694",
        "Longitude": "-118.2566825"
      },
      {
        "ColonyLocation": "EFFIE ST at LAKE SHORE AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-05",
        "DateExpire": "07/19/23",
        "Latitude": "34.0843694",
        "Longitude": "-118.2566825"
      },
      {
        "ColonyLocation": "EFFIE ST at LAKE SHORE AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-05",
        "DateExpire": "07/19/23",
        "Latitude": "34.0843694",
        "Longitude": "-118.2566825"
      },
      {
        "ColonyLocation": "EFFIE ST at LAKE SHORE AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-07-05",
        "DateExpire": "07/19/23",
        "Latitude": "34.0843694",
        "Longitude": "-118.2566825"
      },
      {
        "ColonyLocation": "LA FAYETTE PARK PL AT 2ND ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0692452",
        "Longitude": "-118.2792242"
      },
      {
        "ColonyLocation": "LA FAYETTE PARK PL AT 2ND ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0692452",
        "Longitude": "-118.2792242"
      },
      {
        "ColonyLocation": "LA FAYETTE PARK PL AT 2ND ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0692452",
        "Longitude": "-118.2792242"
      },
      {
        "ColonyLocation": "PARK VIEW ST AT MIRAMAR ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0654932",
        "Longitude": "-118.2756105"
      },
      {
        "ColonyLocation": "1315 W OAK GROVE DR, 90041",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.1315523",
        "Longitude": "-118.195161"
      },
      {
        "ColonyLocation": "1904 W NOLDEN ST, 90041",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.1300167",
        "Longitude": "-118.1935305"
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0400025",
        "Longitude": "-118.2569549"
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0400025",
        "Longitude": "-118.2569549"
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0400025",
        "Longitude": "-118.2569549"
      },
      {
        "ColonyLocation": "350 N AVENUE 57, 90042",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.1133517",
        "Longitude": "-118.1945219"
      },
      {
        "ColonyLocation": "350 N AVENUE 57, 90042",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.1133517",
        "Longitude": "-118.1945219"
      },
      {
        "ColonyLocation": "350 N AVENUE 57, 90042",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.1133517",
        "Longitude": "-118.1945219"
      },
      {
        "ColonyLocation": "118 E SYCAMORE PARK DR, 90031",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.09655",
        "Longitude": "-118.2059"
      },
      {
        "ColonyLocation": "118 E SYCAMORE PARK DR, 90031",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.09655",
        "Longitude": "-118.2059"
      },
      {
        "ColonyLocation": "118 E SYCAMORE PARK DR, 90031",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.09655",
        "Longitude": "-118.2059"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "2116 E JUDSON ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-07-02",
        "DateExpire": "07/16/23",
        "Latitude": "34.0526796",
        "Longitude": "-118.207997"
      },
      {
        "ColonyLocation": "BEAUDRY AVE AT 1ST ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-07-01",
        "DateExpire": "09/13/23",
        "Latitude": "34.0591824",
        "Longitude": "-118.2541485"
      },
      {
        "ColonyLocation": "HARVARD BLVD at HOLLYWOOD BLVD, 90027",
        "IsESA": "",
        "DateIssued": "2023-06-28",
        "DateExpire": "07/12/23",
        "Latitude": "34.1017596",
        "Longitude": "-118.3043924"
      },
      {
        "ColonyLocation": "KENT ST AT ROSEMONT AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-06-28",
        "DateExpire": "07/12/23",
        "Latitude": "34.0751721",
        "Longitude": "-118.2672923"
      },
      {
        "ColonyLocation": "PATTON ST AT COURT ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-06-28",
        "DateExpire": "07/12/23",
        "Latitude": "34.0662811",
        "Longitude": "-118.2585743"
      },
      {
        "ColonyLocation": "BEVERLY BLVD AT ROSEMONT AVE, 90057",
        "IsESA": "",
        "DateIssued": "2023-06-28",
        "DateExpire": "07/12/23",
        "Latitude": "34.0677586",
        "Longitude": "-118.2728079"
      },
      {
        "ColonyLocation": "TEMPLE ST AT BENTON WAY, 90026",
        "IsESA": "",
        "DateIssued": "2023-06-28",
        "DateExpire": "07/12/23",
        "Latitude": "34.0728909",
        "Longitude": "-118.2757323"
      },
      {
        "ColonyLocation": "BRUNSWICK AVE AT CHEVY CHASE DR, 90039",
        "IsESA": "",
        "DateIssued": "2023-06-28",
        "DateExpire": "07/12/23",
        "Latitude": "34.1334097",
        "Longitude": "-118.2690414"
      },
      {
        "ColonyLocation": "BRUNSWICK AVE AT CHEVY CHASE DR, 90039",
        "IsESA": "",
        "DateIssued": "2023-06-28",
        "DateExpire": "07/12/23",
        "Latitude": "34.1334097",
        "Longitude": "-118.2690414"
      },
      {
        "ColonyLocation": "2100 E MARENGO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-06-24",
        "DateExpire": "07/08/23",
        "Latitude": "34.0557216",
        "Longitude": "-118.2058654"
      },
      {
        "ColonyLocation": "2100 E MARENGO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-06-24",
        "DateExpire": "07/08/23",
        "Latitude": "34.0557216",
        "Longitude": "-118.2058654"
      },
      {
        "ColonyLocation": "2100 E MARENGO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-06-24",
        "DateExpire": "07/08/23",
        "Latitude": "34.0557216",
        "Longitude": "-118.2058654"
      },
      {
        "ColonyLocation": "2100 E MARENGO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-06-24",
        "DateExpire": "07/08/23",
        "Latitude": "34.0557216",
        "Longitude": "-118.2058654"
      },
      {
        "ColonyLocation": "2100 E MARENGO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-06-24",
        "DateExpire": "07/08/23",
        "Latitude": "34.0557216",
        "Longitude": "-118.2058654"
      },
      {
        "ColonyLocation": "2100 E MARENGO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-06-24",
        "DateExpire": "07/08/23",
        "Latitude": "34.0557216",
        "Longitude": "-118.2058654"
      },
      {
        "ColonyLocation": "2100 E MARENGO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-06-24",
        "DateExpire": "07/08/23",
        "Latitude": "34.0557216",
        "Longitude": "-118.2058654"
      },
      {
        "ColonyLocation": "2100 E MARENGO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-06-24",
        "DateExpire": "07/08/23",
        "Latitude": "34.0557216",
        "Longitude": "-118.2058654"
      },
      {
        "ColonyLocation": "2100 E MARENGO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-06-24",
        "DateExpire": "07/08/23",
        "Latitude": "34.0557216",
        "Longitude": "-118.2058654"
      },
      {
        "ColonyLocation": "2100 E MARENGO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-06-24",
        "DateExpire": "07/08/23",
        "Latitude": "34.0557216",
        "Longitude": "-118.2058654"
      },
      {
        "ColonyLocation": "2100 E MARENGO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-06-24",
        "DateExpire": "07/08/23",
        "Latitude": "34.0557216",
        "Longitude": "-118.2058654"
      },
      {
        "ColonyLocation": "2100 E MARENGO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-06-24",
        "DateExpire": "07/08/23",
        "Latitude": "34.0557216",
        "Longitude": "-118.2058654"
      },
      {
        "ColonyLocation": "2100 E MARENGO ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-06-24",
        "DateExpire": "07/08/23",
        "Latitude": "34.0557216",
        "Longitude": "-118.2058654"
      },
      {
        "ColonyLocation": "PARK VIEW ST AT MIRAMAR ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-06-24",
        "DateExpire": "07/08/23",
        "Latitude": "34.0654932",
        "Longitude": "-118.2756105"
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD at HOOVER ST, 90029",
        "IsESA": "",
        "DateIssued": "2023-06-24",
        "DateExpire": "07/08/23",
        "Latitude": "34.0908747",
        "Longitude": "-118.2845555"
      },
      {
        "ColonyLocation": "GLENDALE BLVD AT AARON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-06-24",
        "DateExpire": "07/08/23",
        "Latitude": "34.0868577",
        "Longitude": "-118.2597555"
      },
      {
        "ColonyLocation": "GLENDALE BLVD AT AARON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-06-24",
        "DateExpire": "07/08/23",
        "Latitude": "34.0868577",
        "Longitude": "-118.2597555"
      },
      {
        "ColonyLocation": "GLENDALE BLVD AT AARON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-06-24",
        "DateExpire": "07/08/23",
        "Latitude": "34.0868577",
        "Longitude": "-118.2597555"
      },
      {
        "ColonyLocation": "GLENDALE BLVD AT AARON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-06-24",
        "DateExpire": "07/08/23",
        "Latitude": "34.0868577",
        "Longitude": "-118.2597555"
      },
      {
        "ColonyLocation": "GLENDALE BLVD AT AARON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-06-24",
        "DateExpire": "07/08/23",
        "Latitude": "34.0868577",
        "Longitude": "-118.2597555"
      },
      {
        "ColonyLocation": "SANTA YNEZ ST AT ROSEMONT AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-06-21",
        "DateExpire": "07/05/23",
        "Latitude": "34.0759256",
        "Longitude": "-118.2668374"
      },
      {
        "ColonyLocation": "PICO BLVD AT DEWEY AVE, 90006",
        "IsESA": "",
        "DateIssued": "2023-06-21",
        "DateExpire": "07/05/23",
        "Latitude": "34.0472495",
        "Longitude": "-118.2958789"
      },
      {
        "ColonyLocation": "316 E PICO BLVD, 90015",
        "IsESA": "",
        "DateIssued": "2023-06-21",
        "DateExpire": "07/05/23",
        "Latitude": "34.0346307",
        "Longitude": "-118.2578165"
      },
      {
        "ColonyLocation": "111 N HOPE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-06-21",
        "DateExpire": "07/05/23",
        "Latitude": "34.058043",
        "Longitude": "-118.24954"
      },
      {
        "ColonyLocation": "LILAC PL AT VIN SCULLY AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-06-21",
        "DateExpire": "07/05/23",
        "Latitude": "34.07246",
        "Longitude": "-118.2490324"
      },
      {
        "ColonyLocation": "SAN PEDRO ST at 12TH ST, 90015",
        "IsESA": "",
        "DateIssued": "2023-06-21",
        "DateExpire": "07/05/23",
        "Latitude": "34.0337103",
        "Longitude": "-118.2533364"
      },
      {
        "ColonyLocation": "SAN PEDRO ST at 12TH ST, 90015",
        "IsESA": "",
        "DateIssued": "2023-06-21",
        "DateExpire": "07/05/23",
        "Latitude": "34.0337103",
        "Longitude": "-118.2533364"
      },
      {
        "ColonyLocation": "SAN PEDRO ST at 12TH ST, 90015",
        "IsESA": "",
        "DateIssued": "2023-06-21",
        "DateExpire": "07/05/23",
        "Latitude": "34.0337103",
        "Longitude": "-118.2533364"
      },
      {
        "ColonyLocation": "SAN PEDRO ST at 12TH ST, 90015",
        "IsESA": "",
        "DateIssued": "2023-06-21",
        "DateExpire": "07/05/23",
        "Latitude": "34.0337103",
        "Longitude": "-118.2533364"
      },
      {
        "ColonyLocation": "1436 W CERRO GORDO ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-06-21",
        "DateExpire": "07/05/23",
        "Latitude": "34.0907555",
        "Longitude": "-118.2444539"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE at SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-06-20",
        "DateExpire": "07/04/23",
        "Latitude": "34.0949822",
        "Longitude": "-118.3070348"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE at SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-06-20",
        "DateExpire": "07/04/23",
        "Latitude": "34.0949822",
        "Longitude": "-118.3070348"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE at SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-06-20",
        "DateExpire": "07/04/23",
        "Latitude": "34.0949822",
        "Longitude": "-118.3070348"
      },
      {
        "ColonyLocation": "FOUNTAIN AVE at SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-06-20",
        "DateExpire": "07/04/23",
        "Latitude": "34.0949822",
        "Longitude": "-118.3070348"
      },
      {
        "ColonyLocation": "2333 W MOSS AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "34.1089946",
        "Longitude": "-118.2322881"
      },
      {
        "ColonyLocation": "2333 W MOSS AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "34.1089946",
        "Longitude": "-118.2322881"
      },
      {
        "ColonyLocation": "2333 W MOSS AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "34.1089946",
        "Longitude": "-118.2322881"
      },
      {
        "ColonyLocation": "2333 W MOSS AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "34.1089946",
        "Longitude": "-118.2322881"
      },
      {
        "ColonyLocation": "2333 W MOSS AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "34.1089946",
        "Longitude": "-118.2322881"
      },
      {
        "ColonyLocation": "2333 W MOSS AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "34.1089946",
        "Longitude": "-118.2322881"
      },
      {
        "ColonyLocation": "2333 W MOSS AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "34.1089946",
        "Longitude": "-118.2322881"
      },
      {
        "ColonyLocation": "2333 W MOSS AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "34.1089946",
        "Longitude": "-118.2322881"
      },
      {
        "ColonyLocation": "2333 W MOSS AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "34.1089946",
        "Longitude": "-118.2322881"
      },
      {
        "ColonyLocation": "AVENUE 30 AT HALLETT AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "34.109019",
        "Longitude": "-118.2404725"
      },
      {
        "ColonyLocation": "AVENUE 30 AT HALLETT AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "34.109019",
        "Longitude": "-118.2404725"
      },
      {
        "ColonyLocation": "AVENUE 30 AT HALLETT AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "34.109019",
        "Longitude": "-118.2404725"
      },
      {
        "ColonyLocation": "2606 W AVENUE 32, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "34.1093156",
        "Longitude": "-118.2380865"
      },
      {
        "ColonyLocation": "2606 W AVENUE 32, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "118 E SYCAMORE PARK DR, 90031",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "118 E SYCAMORE PARK DR, 90031",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "118 E SYCAMORE PARK DR, 90031",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "350 N AVENUE 57, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "350 N AVENUE 57, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "350 N AVENUE 57, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "AVENUE 57 at VIA MARISOL, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ESTARA AVE AT ANDRITA ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ESTARA AVE AT ANDRITA ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ESTARA AVE AT ANDRITA ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ESTARA AVE AT ANDRITA ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ESTARA AVE AT ANDRITA ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ESTARA AVE AT ANDRITA ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3110 E ISABEL DR, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2606 W AVENUE 32, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2606 W AVENUE 32, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2606 W AVENUE 32, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2606 W AVENUE 32, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2606 W AVENUE 32, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3200 N VERDUGO ROAD, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-11",
        "DateExpire": "06/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3200 N VERDUGO ROAD, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-10",
        "DateExpire": "09/13/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2136 W AVENUE 30, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-10",
        "DateExpire": "06/24/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2136 W AVENUE 30, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-10",
        "DateExpire": "06/24/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2136 W AVENUE 30, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-10",
        "DateExpire": "06/24/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2136 W AVENUE 30, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-10",
        "DateExpire": "06/24/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2136 W AVENUE 30, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-10",
        "DateExpire": "06/24/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "YALE ST AT COLLEGE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-06-07",
        "DateExpire": "06/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "YALE ST AT COLLEGE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-06-07",
        "DateExpire": "06/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "YALE ST AT COLLEGE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-06-07",
        "DateExpire": "06/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "YALE ST AT COLLEGE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-06-07",
        "DateExpire": "06/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "BROADWAY at WASHINGTON BLVD, 90015",
        "IsESA": "",
        "DateIssued": "2023-06-07",
        "DateExpire": "06/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "STADIUM WAY AT BERNARD ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-06-07",
        "DateExpire": "06/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "STADIUM WAY AT BERNARD ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-06-07",
        "DateExpire": "06/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "STADIUM WAY AT BERNARD ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-06-07",
        "DateExpire": "06/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "CYPRESS AVE AT ARROYO SECO AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-07",
        "DateExpire": "06/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FOUNTAIN AVE AT WESTERN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-06-05",
        "DateExpire": "06/19/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3458 N ARROYO SECO AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-05",
        "DateExpire": "06/19/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3458 N ARROYO SECO AVE, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-05",
        "DateExpire": "06/19/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "4927 N OAK TERRACE DR, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ROSEMONT AVE at TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ROSEMONT AVE at TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ROSEMONT AVE at TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "AVENUE 55 AT MONTE VISTA ST, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "AVENUE 55 AT MONTE VISTA ST, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "4641 N FIGUEROA ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "350 N AVENUE 57, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "350 N AVENUE 57, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ARROYO GLEN ST AT HAYES AVE, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "TOLEDO ST AT BUCHANAN ST, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "6147 E HILLANDALE DR, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "6147 E HILLANDALE DR, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "6147 E HILLANDALE DR, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "6147 E HILLANDALE DR, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "6147 E HILLANDALE DR, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "TOLEDO ST AT BUCHANAN ST, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "327 W AVENUE 51, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SYCAMORE TER at FIGUEROA ST, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SYCAMORE TER at FIGUEROA ST, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "6236 E ANNAN WAY, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "6236 E ANNAN WAY, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "GRANADA ST AT AVENUE 52, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "GRANADA ST AT AVENUE 52, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "5200 N MONTE VISTA ST, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "5200 N MONTE VISTA ST, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "217 S AVENUE 64, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "5200 N MONTE VISTA ST, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "5200 N MONTE VISTA ST, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "5200 N MONTE VISTA ST, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "5200 N MONTE VISTA ST, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "5200 N MONTE VISTA ST, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-04",
        "DateExpire": "06/18/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "6225 W AFTON PL, 90028",
        "IsESA": "",
        "DateIssued": "2023-06-03",
        "DateExpire": "06/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "6225 W AFTON PL, 90028",
        "IsESA": "",
        "DateIssued": "2023-06-03",
        "DateExpire": "06/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "145 N AVENUE 51, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-03",
        "DateExpire": "06/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "368 W AVENUE 52, 90042",
        "IsESA": "",
        "DateIssued": "2023-06-03",
        "DateExpire": "06/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "BEAUDRY AVE AT 1ST ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-05-31",
        "DateExpire": "06/14/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "KINGSLEY DR AT DE LONGPRE AVE, 90027",
        "IsESA": "",
        "DateIssued": "2023-05-31",
        "DateExpire": "06/14/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "BEAUDRY AVE AT 1ST ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-05-31",
        "DateExpire": "06/14/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "EVERGREEN AVE AT OLYMPIC BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-05-31",
        "DateExpire": "06/14/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "OXFORD AVE AT BEVERLY BLVD, 90004",
        "IsESA": "",
        "DateIssued": "2023-05-31",
        "DateExpire": "06/14/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "BROADWAY at WASHINGTON BLVD, 90007",
        "IsESA": "",
        "DateIssued": "2023-05-31",
        "DateExpire": "06/14/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "BROADWAY at WASHINGTON BLVD, 90007",
        "IsESA": "",
        "DateIssued": "2023-05-31",
        "DateExpire": "06/14/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "TEMPLE ST AT WESTLAKE AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-05-31",
        "DateExpire": "06/14/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "PARK VIEW ST AT MIRAMAR ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-05-31",
        "DateExpire": "06/14/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "BEMIS ST AT BRUNSWICK AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-05-31",
        "DateExpire": "06/14/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "DE LONGPRE AVE AT KINGSLEY DR, 90027",
        "IsESA": "",
        "DateIssued": "2023-05-24",
        "DateExpire": "06/07/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-05-24",
        "DateExpire": "06/07/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LEXINGTON AVE at WESTERN AVE, 90038",
        "IsESA": "",
        "DateIssued": "2023-05-24",
        "DateExpire": "06/07/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "BERENDO ST AT SANTA MONICA BLVD, 90029",
        "IsESA": "",
        "DateIssued": "2023-05-24",
        "DateExpire": "06/07/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HELIOTROPE DR AT SANTA MONICA BLVD, 90029",
        "IsESA": "",
        "DateIssued": "2023-05-24",
        "DateExpire": "06/07/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HELIOTROPE DR AT SANTA MONICA BLVD, 90029",
        "IsESA": "",
        "DateIssued": "2023-05-24",
        "DateExpire": "06/07/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HELIOTROPE DR AT SANTA MONICA BLVD, 90029",
        "IsESA": "",
        "DateIssued": "2023-05-24",
        "DateExpire": "06/07/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HYPERION AVE AT SUNSET BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-05-24",
        "DateExpire": "06/07/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LYMAN PL at FOUNTAIN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-05-22",
        "DateExpire": "06/05/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LYMAN PL at FOUNTAIN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-05-22",
        "DateExpire": "06/05/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LYMAN PL at FOUNTAIN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-05-22",
        "DateExpire": "06/05/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ALBION ST AT NORTH MAIN ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ALBION ST AT NORTH MAIN ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ALBION ST AT NORTH MAIN ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "8TH ST AT WESTLAKE AVE, 90057",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "OCEAN VIEW AVE AT CORONADO ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "OCEAN VIEW AVE AT CORONADO ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "OCEAN VIEW AVE AT CORONADO ST, 90057",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FIGUEROA ST at HILLANDALE DR, 90042",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1415 S ALVARADO TER, 90006",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1415 S ALVARADO TER, 90006",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1415 S ALVARADO TER, 90006",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1415 S ALVARADO TER, 90006",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HUB ST AT AVENUE 57, 90042",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HUB ST AT AVENUE 57, 90042",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HUB ST AT AVENUE 57, 90042",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2241 N HARWOOD ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "6000 W SANTA MONICA BLVD, 90038",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SCOTT AVE at MCCOLLUM PL, 90026",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "KENMORE AVE at FOUNTAIN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "BEMIS ST AT BRUNSWICK AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "BEMIS ST AT BRUNSWICK AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "GLENDALE BLVD AT COURT ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2337 N EASTLAKE AVE, 90031",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "415 S ST LOUIS ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "415 S ST LOUIS ST, 90033",
        "IsESA": "",
        "DateIssued": "2023-05-20",
        "DateExpire": "06/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "BERENDO ST AT SANTA MONICA BLVD, 90029",
        "IsESA": "",
        "DateIssued": "2023-05-17",
        "DateExpire": "05/31/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "GLENDALE BLVD AT CORTEZ ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-05-17",
        "DateExpire": "05/31/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "4185 E WILLIMET AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-05-17",
        "DateExpire": "05/31/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SCOTT AVE at PORTIA ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-05-17",
        "DateExpire": "05/31/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "KENMORE AVE at SAN MARINO ST, 90006",
        "IsESA": "",
        "DateIssued": "2023-05-17",
        "DateExpire": "05/31/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "6TH ST AT ST ANDREWS PL, 90005",
        "IsESA": "",
        "DateIssued": "2023-05-17",
        "DateExpire": "05/31/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FOUNTAIN AVE at SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-05-17",
        "DateExpire": "05/31/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FOUNTAIN AVE at SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-05-17",
        "DateExpire": "05/31/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FOUNTAIN AVE at SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-05-17",
        "DateExpire": "05/31/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "BEAUDRY AVE at SUNSET BLVD, 90012",
        "IsESA": "",
        "DateIssued": "2023-05-10",
        "DateExpire": "05/24/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "BEAUDRY AVE at SUNSET BLVD, 90012",
        "IsESA": "",
        "DateIssued": "2023-05-10",
        "DateExpire": "05/24/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "KINGSLEY DR AT DE LONGPRE AVE, 90027",
        "IsESA": "",
        "DateIssued": "2023-05-10",
        "DateExpire": "05/24/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HOOVER ST AT FRANCIS AVE, 90005",
        "IsESA": "",
        "DateIssued": "2023-05-10",
        "DateExpire": "05/24/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MARATHON ST AT SILVER LAKE BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-05-10",
        "DateExpire": "05/24/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HELIOTROPE DR AT SANTA MONICA BLVD, 90029",
        "IsESA": "",
        "DateIssued": "2023-05-10",
        "DateExpire": "05/24/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "CORONADO ST AT COUNCIL ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-05-10",
        "DateExpire": "05/24/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MARATHON ST AT SILVER LAKE BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-05-08",
        "DateExpire": "09/13/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MARATHON ST AT SILVER LAKE BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-05-08",
        "DateExpire": "05/22/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ELSINORE ST AT BENTON WAY, 90026",
        "IsESA": "",
        "DateIssued": "2023-05-03",
        "DateExpire": "05/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "15939 W CANTLAY ST, 91406",
        "IsESA": "",
        "DateIssued": "2023-05-03",
        "DateExpire": "05/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "910 N SAN FERNANDO ROAD, 90065",
        "IsESA": "",
        "DateIssued": "2023-05-03",
        "DateExpire": "05/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "NORTH BROADWAY AT COLLEGE ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-05-03",
        "DateExpire": "05/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "540 N HARVARD BLVD, 90004",
        "IsESA": "",
        "DateIssued": "2023-05-03",
        "DateExpire": "05/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "540 N HARVARD BLVD, 90004",
        "IsESA": "",
        "DateIssued": "2023-05-03",
        "DateExpire": "05/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "540 N HARVARD BLVD, 90004",
        "IsESA": "",
        "DateIssued": "2023-05-03",
        "DateExpire": "05/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "540 N HARVARD BLVD, 90004",
        "IsESA": "",
        "DateIssued": "2023-05-03",
        "DateExpire": "05/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "540 N HARVARD BLVD, 90004",
        "IsESA": "",
        "DateIssued": "2023-05-03",
        "DateExpire": "05/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "540 N HARVARD BLVD, 90004",
        "IsESA": "",
        "DateIssued": "2023-05-03",
        "DateExpire": "05/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HELIOTROPE DR AT SANTA MONICA BLVD, 90029",
        "IsESA": "",
        "DateIssued": "2023-04-26",
        "DateExpire": "05/10/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "NORTH MAIN ST AT ALBION ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-04-26",
        "DateExpire": "05/10/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SUNSET BLVD AT FIGUEROA ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-04-26",
        "DateExpire": "05/10/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FRANCIS AVE AT HOOVER ST, 90005",
        "IsESA": "",
        "DateIssued": "2023-04-26",
        "DateExpire": "05/10/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FRANCIS AVE AT HOOVER ST, 90005",
        "IsESA": "",
        "DateIssued": "2023-04-26",
        "DateExpire": "05/10/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "4207 E WILLIMET AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-04-26",
        "DateExpire": "05/10/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "4207 E WILLIMET AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-04-26",
        "DateExpire": "05/10/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MACON ST AT ISABEL ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-04-26",
        "DateExpire": "05/10/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MACON ST AT ISABEL ST, 90065",
        "IsESA": "",
        "DateIssued": "2023-04-26",
        "DateExpire": "05/10/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FOUNTAIN AVE AT WESTERN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-04-19",
        "DateExpire": "05/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FOUNTAIN AVE AT WESTERN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-04-19",
        "DateExpire": "05/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2ND ST AT COMMONWEALTH AVE, 90004",
        "IsESA": "",
        "DateIssued": "2023-04-19",
        "DateExpire": "05/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HARVARD BLVD at HOLLYWOOD BLVD, 90027",
        "IsESA": "",
        "DateIssued": "2023-04-19",
        "DateExpire": "05/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "CATALINA ST AT 12TH ST, 90006",
        "IsESA": "",
        "DateIssued": "2023-04-19",
        "DateExpire": "05/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "CATALINA ST AT 12TH ST, 90006",
        "IsESA": "",
        "DateIssued": "2023-04-19",
        "DateExpire": "05/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FOUNTAIN AVE at SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-04-17",
        "DateExpire": "05/01/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FOUNTAIN AVE at SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-04-17",
        "DateExpire": "05/01/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FOUNTAIN AVE at SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-04-17",
        "DateExpire": "05/01/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FOUNTAIN AVE at SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-04-17",
        "DateExpire": "05/01/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FOUNTAIN AVE at SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-04-17",
        "DateExpire": "05/01/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "CORONADO ST at SUNSET BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-04-12",
        "DateExpire": "04/26/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "CORONADO ST at TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-04-12",
        "DateExpire": "04/26/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "CORONADO ST at TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-04-12",
        "DateExpire": "04/26/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "CORONADO ST at TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-04-12",
        "DateExpire": "04/26/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LEXINGTON AVE AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-04-12",
        "DateExpire": "04/26/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-04-12",
        "DateExpire": "04/26/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD AT BERENDO ST, 90029",
        "IsESA": "",
        "DateIssued": "2023-04-12",
        "DateExpire": "04/26/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD AT BERENDO ST, 90029",
        "IsESA": "",
        "DateIssued": "2023-04-12",
        "DateExpire": "04/26/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD AT BERENDO ST, 90029",
        "IsESA": "",
        "DateIssued": "2023-04-12",
        "DateExpire": "04/26/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "CHEVY CHASE DR AT LACLEDE AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-04-12",
        "DateExpire": "04/26/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FOUNTAIN AVE AT WESTERN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-04-10",
        "DateExpire": "04/24/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FOUNTAIN AVE AT WESTERN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-04-10",
        "DateExpire": "04/24/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3004 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-04-08",
        "DateExpire": "04/22/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3004 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-04-08",
        "DateExpire": "04/22/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3004 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-04-08",
        "DateExpire": "04/22/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3004 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-04-08",
        "DateExpire": "04/22/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3004 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-04-08",
        "DateExpire": "04/22/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3004 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-04-08",
        "DateExpire": "04/22/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3004 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-04-08",
        "DateExpire": "04/22/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3004 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-04-08",
        "DateExpire": "04/22/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3004 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-04-08",
        "DateExpire": "04/22/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-04-07",
        "DateExpire": "04/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-04-07",
        "DateExpire": "04/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-04-07",
        "DateExpire": "04/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3004 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-04-07",
        "DateExpire": "04/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3004 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-04-07",
        "DateExpire": "04/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3004 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-04-07",
        "DateExpire": "04/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3004 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-04-07",
        "DateExpire": "04/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3004 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-04-07",
        "DateExpire": "04/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3004 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-04-07",
        "DateExpire": "04/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3004 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-04-07",
        "DateExpire": "04/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3004 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-04-07",
        "DateExpire": "04/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3004 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-04-07",
        "DateExpire": "04/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3004 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-04-07",
        "DateExpire": "04/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3004 E WHITTIER BLVD, 90023",
        "IsESA": "",
        "DateIssued": "2023-04-07",
        "DateExpire": "04/21/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE at MIDDLEBURY ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-04-05",
        "DateExpire": "04/19/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-04-05",
        "DateExpire": "04/19/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ST ANDREWS PL AT 6TH ST, 90005",
        "IsESA": "",
        "DateIssued": "2023-04-05",
        "DateExpire": "04/19/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HOOVER ST AT FRANCIS AVE, 90005",
        "IsESA": "",
        "DateIssued": "2023-04-05",
        "DateExpire": "04/19/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SANTA YNEZ ST AT ROSEMONT AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-04-05",
        "DateExpire": "04/19/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LONDON ST AT HOOVER ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-04-05",
        "DateExpire": "04/19/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "BEVERLY BLVD AT COMMONWEALTH AVE, 90004",
        "IsESA": "",
        "DateIssued": "2023-04-05",
        "DateExpire": "04/19/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SUNSET BLVD at BEAUDRY AVE, 90012",
        "IsESA": "",
        "DateIssued": "2023-04-05",
        "DateExpire": "04/19/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SUNSET BLVD at BEAUDRY AVE, 90012",
        "IsESA": "",
        "DateIssued": "2023-04-05",
        "DateExpire": "04/19/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SILVER LAKE BLVD AT DUANE ST, 90039",
        "IsESA": "",
        "DateIssued": "2023-04-03",
        "DateExpire": "04/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ALVARADO ST AT BEVERLY BLVD, 90057",
        "IsESA": "",
        "DateIssued": "2023-03-30",
        "DateExpire": "04/13/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ALVARADO ST AT BEVERLY BLVD, 90057",
        "IsESA": "",
        "DateIssued": "2023-03-30",
        "DateExpire": "04/13/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ALVARADO ST AT BEVERLY BLVD, 90057",
        "IsESA": "",
        "DateIssued": "2023-03-30",
        "DateExpire": "04/13/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ALVARADO ST AT BEVERLY BLVD, 90057",
        "IsESA": "",
        "DateIssued": "2023-03-30",
        "DateExpire": "04/13/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ALVARADO ST AT BEVERLY BLVD, 90057",
        "IsESA": "",
        "DateIssued": "2023-03-30",
        "DateExpire": "04/13/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "CENTRAL AVE AT 1ST ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-03-29",
        "DateExpire": "04/12/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "CENTRAL AVE AT 1ST ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-03-29",
        "DateExpire": "04/12/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "CENTRAL AVE AT 1ST ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-03-29",
        "DateExpire": "04/12/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "DESCANSO DR AT MICHELTORENA ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-29",
        "DateExpire": "04/12/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "DESCANSO DR AT MICHELTORENA ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-29",
        "DateExpire": "04/12/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "DESCANSO DR AT MICHELTORENA ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-29",
        "DateExpire": "04/12/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "4185 E WILLIMET AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-03-29",
        "DateExpire": "04/12/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "4185 E WILLIMET AVE, 90039",
        "IsESA": "",
        "DateIssued": "2023-03-29",
        "DateExpire": "04/12/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1600 N GRIFFITH PARK BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-29",
        "DateExpire": "04/12/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE at MIDDLEBURY ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-03-29",
        "DateExpire": "04/12/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "WESTMORELAND AVE AT LEXINGTON AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-03-29",
        "DateExpire": "04/12/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ST LOUIS ST AT CESAR E CHAVEZ AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-03-22",
        "DateExpire": "04/05/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HAMILTON WAY AT MICHELTORENA ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-22",
        "DateExpire": "04/05/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HAMILTON WAY AT MICHELTORENA ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-22",
        "DateExpire": "04/05/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "BELLEVUE AVE AT LONDON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-22",
        "DateExpire": "04/05/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3630 W CARNATION AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-22",
        "DateExpire": "04/05/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SILVER LAKE BLVD AT DUANE ST, 90039",
        "IsESA": "",
        "DateIssued": "2023-03-22",
        "DateExpire": "04/05/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SILVER LAKE BLVD AT DUANE ST, 90039",
        "IsESA": "",
        "DateIssued": "2023-03-22",
        "DateExpire": "04/05/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HOLLYWOOD BLVD at HARVARD BLVD, 90027",
        "IsESA": "",
        "DateIssued": "2023-03-22",
        "DateExpire": "04/05/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "NEW HAMPSHIRE AVE at HOLLYWOOD BLVD, 90027",
        "IsESA": "",
        "DateIssued": "2023-03-16",
        "DateExpire": "03/30/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "DOUGLAS ST AT TOLUCA ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-15",
        "DateExpire": "03/29/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "DOUGLAS ST AT TOLUCA ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-15",
        "DateExpire": "03/29/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "DOUGLAS ST AT TOLUCA ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-15",
        "DateExpire": "03/29/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "DOUGLAS ST AT TOLUCA ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-15",
        "DateExpire": "03/29/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "5905 W WILSHIRE BLVD, 90036",
        "IsESA": "",
        "DateIssued": "2023-03-15",
        "DateExpire": "03/29/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ST LOUIS ST AT CESAR E CHAVEZ AVE, 90033",
        "IsESA": "",
        "DateIssued": "2023-03-15",
        "DateExpire": "03/29/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SCOTT AVE AT FAIRBANKS PL, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-15",
        "DateExpire": "03/29/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SCOTT AVE AT FAIRBANKS PL, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-15",
        "DateExpire": "03/29/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SCOTT AVE AT FAIRBANKS PL, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-15",
        "DateExpire": "03/29/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ALVARADO ST at SANTA YNEZ ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-15",
        "DateExpire": "03/29/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "TEMPLE ST AT BURLINGTON AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-08",
        "DateExpire": "03/22/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SANTA YNEZ ST at ALVARADO ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-08",
        "DateExpire": "03/22/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SUNSET BLVD AT HARVARD BLVD, 90027",
        "IsESA": "",
        "DateIssued": "2023-03-08",
        "DateExpire": "03/22/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HARVARD BLVD at HOLLYWOOD BLVD, 90027",
        "IsESA": "",
        "DateIssued": "2023-03-08",
        "DateExpire": "03/22/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FRANCIS AVE AT HOOVER ST, 90005",
        "IsESA": "",
        "DateIssued": "2023-03-08",
        "DateExpire": "03/22/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "COURT ST AT GLENDALE BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-08",
        "DateExpire": "03/22/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MADISON AVE AT MONROE ST, 90029",
        "IsESA": "",
        "DateIssued": "2023-03-08",
        "DateExpire": "03/22/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "TEMPLE ST AT PATTON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-08",
        "DateExpire": "03/22/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "TEMPLE ST AT PATTON ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-08",
        "DateExpire": "03/22/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MIRAMAR ST at WITMER ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-05",
        "DateExpire": "03/19/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MIRAMAR ST at WITMER ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-03-05",
        "DateExpire": "03/19/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LOS FELIZ BLVD AT RIVERSIDE DR, 90039",
        "IsESA": "",
        "DateIssued": "2023-03-03",
        "DateExpire": "03/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LOS FELIZ BLVD AT RIVERSIDE DR, 90039",
        "IsESA": "",
        "DateIssued": "2023-03-03",
        "DateExpire": "03/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LOS FELIZ BLVD AT RIVERSIDE DR, 90039",
        "IsESA": "",
        "DateIssued": "2023-03-03",
        "DateExpire": "03/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LOS FELIZ BLVD AT RIVERSIDE DR, 90039",
        "IsESA": "",
        "DateIssued": "2023-03-03",
        "DateExpire": "03/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LOS FELIZ BLVD AT RIVERSIDE DR, 90039",
        "IsESA": "",
        "DateIssued": "2023-03-03",
        "DateExpire": "03/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SAN MARINO ST AT DEWEY AVE, 90006",
        "IsESA": "",
        "DateIssued": "2023-03-03",
        "DateExpire": "03/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SAN MARINO ST AT DEWEY AVE, 90006",
        "IsESA": "",
        "DateIssued": "2023-03-03",
        "DateExpire": "03/17/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "EDGEMONT ST AT FOUNTAIN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-02-27",
        "DateExpire": "03/13/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "EDGEMONT ST AT FOUNTAIN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-02-27",
        "DateExpire": "03/13/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "EDGEMONT ST AT FOUNTAIN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-02-27",
        "DateExpire": "03/13/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "NORTH MAIN ST AT ALBION ST, 90031",
        "IsESA": "",
        "DateIssued": "2023-02-24",
        "DateExpire": "03/10/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-02-24",
        "DateExpire": "03/10/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-02-24",
        "DateExpire": "03/10/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-02-24",
        "DateExpire": "03/10/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-02-23",
        "DateExpire": "03/09/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "COUNCIL ST AT BELMONT AVE, 90026",
        "IsESA": "",
        "DateIssued": "2023-02-23",
        "DateExpire": "03/09/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SILVER LAKE BLVD AT DUANE ST, 90039",
        "IsESA": "",
        "DateIssued": "2023-02-23",
        "DateExpire": "03/09/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-02-23",
        "DateExpire": "03/09/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-02-23",
        "DateExpire": "03/09/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "BEVERLY BLVD at NORMANDIE AVE, 90004",
        "IsESA": "",
        "DateIssued": "2023-02-22",
        "DateExpire": "03/08/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "BEVERLY BLVD at NORMANDIE AVE, 90004",
        "IsESA": "",
        "DateIssued": "2023-02-22",
        "DateExpire": "03/08/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LOS FELIZ BLVD AT RIVERSIDE DR, 90039",
        "IsESA": "",
        "DateIssued": "2023-02-22",
        "DateExpire": "03/08/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "COURT ST at LAKE ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-02-22",
        "DateExpire": "03/08/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-02-22",
        "DateExpire": "03/08/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SANTA MONICA BLVD AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-02-22",
        "DateExpire": "03/08/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "226 N RAMPART BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-02-22",
        "DateExpire": "03/08/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "226 N RAMPART BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-02-22",
        "DateExpire": "03/08/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "226 N RAMPART BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-02-22",
        "DateExpire": "03/08/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "226 N RAMPART BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-02-22",
        "DateExpire": "03/08/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "226 N RAMPART BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2023-02-22",
        "DateExpire": "03/08/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VERMONT AVE at MONROE ST, 90029",
        "IsESA": "",
        "DateIssued": "2023-02-15",
        "DateExpire": "03/01/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VERMONT AVE at MONROE ST, 90029",
        "IsESA": "",
        "DateIssued": "2023-02-15",
        "DateExpire": "03/01/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2023-02-15",
        "DateExpire": "03/01/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MADISON AVE AT LEXINGTON AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-02-12",
        "DateExpire": "02/26/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MADISON AVE AT LEXINGTON AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-02-12",
        "DateExpire": "02/26/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MADISON AVE AT LEXINGTON AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-02-12",
        "DateExpire": "02/26/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HOBART BLVD AT DE LONGPRE AVE, 90027",
        "IsESA": "",
        "DateIssued": "2023-02-06",
        "DateExpire": "02/20/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HOBART BLVD AT DE LONGPRE AVE, 90027",
        "IsESA": "",
        "DateIssued": "2023-02-06",
        "DateExpire": "02/20/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HOBART BLVD AT DE LONGPRE AVE, 90027",
        "IsESA": "",
        "DateIssued": "2023-02-06",
        "DateExpire": "02/20/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FOUNTAIN AVE at SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-01-30",
        "DateExpire": "02/13/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FOUNTAIN AVE at SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-01-30",
        "DateExpire": "02/13/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FOUNTAIN AVE at SERRANO AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-01-30",
        "DateExpire": "02/13/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LOS FELIZ BLVD AT RIVERSIDE DR, 90039",
        "IsESA": "",
        "DateIssued": "2023-01-25",
        "DateExpire": "02/08/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LOS FELIZ BLVD AT RIVERSIDE DR, 90039",
        "IsESA": "",
        "DateIssued": "2023-01-25",
        "DateExpire": "02/08/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2ND ST AT SAN PEDRO ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-01-25",
        "DateExpire": "02/08/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2ND ST AT SAN PEDRO ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-01-25",
        "DateExpire": "02/08/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3000 N VERDUGO ROAD, 90065",
        "IsESA": "",
        "DateIssued": "2023-01-20",
        "DateExpire": "02/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SAN PEDRO ST AT 2ND ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-01-20",
        "DateExpire": "02/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SAN PEDRO ST AT 2ND ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-01-20",
        "DateExpire": "02/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SAN PEDRO ST AT 2ND ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-01-20",
        "DateExpire": "02/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SAN PEDRO ST AT 2ND ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-01-20",
        "DateExpire": "02/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SAN PEDRO ST AT 2ND ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-01-20",
        "DateExpire": "02/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SAN PEDRO ST AT 2ND ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-01-20",
        "DateExpire": "02/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SAN PEDRO ST AT 2ND ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-01-20",
        "DateExpire": "02/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SAN PEDRO ST AT 2ND ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-01-20",
        "DateExpire": "02/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SAN PEDRO ST AT 2ND ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-01-20",
        "DateExpire": "02/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SAN PEDRO ST AT 2ND ST, 90012",
        "IsESA": "",
        "DateIssued": "2023-01-20",
        "DateExpire": "02/03/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LOS FELIZ BLVD AT RIVERSIDE DR, 90039",
        "IsESA": "",
        "DateIssued": "2023-01-18",
        "DateExpire": "02/01/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LOS FELIZ BLVD AT RIVERSIDE DR, 90039",
        "IsESA": "",
        "DateIssued": "2023-01-18",
        "DateExpire": "02/01/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LOS FELIZ BLVD AT RIVERSIDE DR, 90039",
        "IsESA": "",
        "DateIssued": "2023-01-18",
        "DateExpire": "02/01/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LOS FELIZ BLVD AT RIVERSIDE DR, 90039",
        "IsESA": "",
        "DateIssued": "2023-01-18",
        "DateExpire": "02/01/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "COLUMBIA AVE at 2ND ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-01-11",
        "DateExpire": "01/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "COLUMBIA AVE at 2ND ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-01-11",
        "DateExpire": "01/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "4020 E BEMIS ST, 90039",
        "IsESA": "",
        "DateIssued": "2023-01-11",
        "DateExpire": "01/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "4020 E BEMIS ST, 90039",
        "IsESA": "",
        "DateIssued": "2023-01-11",
        "DateExpire": "01/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "EDGEMONT ST AT LEXINGTON AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-01-11",
        "DateExpire": "01/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "EDGEMONT ST AT LEXINGTON AVE, 90029",
        "IsESA": "",
        "DateIssued": "2023-01-11",
        "DateExpire": "01/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3000 N VERDUGO ROAD, 90065",
        "IsESA": "",
        "DateIssued": "2023-01-11",
        "DateExpire": "01/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3000 N VERDUGO ROAD, 90065",
        "IsESA": "",
        "DateIssued": "2023-01-11",
        "DateExpire": "01/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3000 N VERDUGO ROAD, 90065",
        "IsESA": "",
        "DateIssued": "2023-01-11",
        "DateExpire": "01/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3000 N VERDUGO ROAD, 90065",
        "IsESA": "",
        "DateIssued": "2023-01-11",
        "DateExpire": "01/25/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "GLENDALE BLVD AT COURT ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-01-09",
        "DateExpire": "01/23/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "GLENDALE BLVD AT COURT ST, 90026",
        "IsESA": "",
        "DateIssued": "2023-01-09",
        "DateExpire": "01/23/23",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LAKE ST AT SCOUT WAY, 90026",
        "IsESA": "",
        "DateIssued": "2022-12-14",
        "DateExpire": "12/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LAKE ST AT SCOUT WAY, 90026",
        "IsESA": "",
        "DateIssued": "2022-12-14",
        "DateExpire": "12/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LAKE ST AT SCOUT WAY, 90026",
        "IsESA": "",
        "DateIssued": "2022-12-14",
        "DateExpire": "12/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MARATHON ST AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-12-14",
        "DateExpire": "12/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-12-14",
        "DateExpire": "12/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-12-14",
        "DateExpire": "12/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-12-14",
        "DateExpire": "12/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "WEST EDGEWARE ROAD at BELLEVUE AVE, 90026",
        "IsESA": "",
        "DateIssued": "2022-12-14",
        "DateExpire": "12/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "906 N MANZANITA ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-12-14",
        "DateExpire": "12/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "906 N MANZANITA ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-12-14",
        "DateExpire": "12/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FRANKLIN AVE AT GARFIELD PL, 90028",
        "IsESA": "",
        "DateIssued": "2022-11-23",
        "DateExpire": "12/07/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MAPLE AVE AT 5TH ST, 90013",
        "IsESA": "",
        "DateIssued": "2022-11-23",
        "DateExpire": "12/07/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MAPLE AVE AT 5TH ST, 90013",
        "IsESA": "",
        "DateIssued": "2022-11-23",
        "DateExpire": "12/07/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MAPLE AVE AT 5TH ST, 90013",
        "IsESA": "",
        "DateIssued": "2022-11-23",
        "DateExpire": "12/07/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MAPLE AVE AT 5TH ST, 90013",
        "IsESA": "",
        "DateIssued": "2022-11-23",
        "DateExpire": "12/07/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-11-11",
        "DateExpire": "11/25/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-11-11",
        "DateExpire": "11/25/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-11-11",
        "DateExpire": "11/25/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "KINGSLEY DR at FOUNTAIN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-11-11",
        "DateExpire": "11/25/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "KINGSLEY DR at FOUNTAIN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-11-11",
        "DateExpire": "11/25/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "KINGSLEY DR at FOUNTAIN AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-11-11",
        "DateExpire": "11/25/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HOBART BLVD AT HOLLYWOOD BLVD, 90027",
        "IsESA": "",
        "DateIssued": "2022-11-11",
        "DateExpire": "11/25/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HOBART BLVD AT HOLLYWOOD BLVD, 90027",
        "IsESA": "",
        "DateIssued": "2022-11-11",
        "DateExpire": "11/25/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HOBART BLVD AT HOLLYWOOD BLVD, 90027",
        "IsESA": "",
        "DateIssued": "2022-11-11",
        "DateExpire": "11/25/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HOBART BLVD AT HOLLYWOOD BLVD, 90027",
        "IsESA": "",
        "DateIssued": "2022-11-11",
        "DateExpire": "11/25/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HOBART BLVD AT HOLLYWOOD BLVD, 90027",
        "IsESA": "",
        "DateIssued": "2022-11-11",
        "DateExpire": "11/25/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LEXINGTON AVE at WESTERN AVE, 90038",
        "IsESA": "",
        "DateIssued": "2022-11-11",
        "DateExpire": "11/25/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LEXINGTON AVE at WESTERN AVE, 90038",
        "IsESA": "",
        "DateIssued": "2022-11-11",
        "DateExpire": "11/25/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "DE LONGPRE AVE AT KINGSLEY DR, 90027",
        "IsESA": "",
        "DateIssued": "2022-11-11",
        "DateExpire": "11/25/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LAKE ST AT SCOUT WAY, 90026",
        "IsESA": "",
        "DateIssued": "2022-11-06",
        "DateExpire": "11/20/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LAKE ST AT SCOUT WAY, 90026",
        "IsESA": "",
        "DateIssued": "2022-11-06",
        "DateExpire": "11/20/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LAKE ST AT SCOUT WAY, 90026",
        "IsESA": "",
        "DateIssued": "2022-11-06",
        "DateExpire": "11/20/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LAKE ST AT SCOUT WAY, 90026",
        "IsESA": "",
        "DateIssued": "2022-11-06",
        "DateExpire": "11/20/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "UNION AVE at BEVERLY BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2022-11-02",
        "DateExpire": "11/16/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "BEAUDRY AVE at SUNSET BLVD, 90012",
        "IsESA": "",
        "DateIssued": "2022-11-02",
        "DateExpire": "11/16/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-11-02",
        "DateExpire": "11/16/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "12701 W MOORPARK ST, 91604",
        "IsESA": "",
        "DateIssued": "2022-11-02",
        "DateExpire": "11/16/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LYON ST AT CESAR E CHAVEZ AVE, 90012",
        "IsESA": "",
        "DateIssued": "2022-10-28",
        "DateExpire": "11/11/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MONROE ST at VERMONT AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-10-28",
        "DateExpire": "11/11/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MONROE ST at VERMONT AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-10-28",
        "DateExpire": "11/11/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "DESCANSO DR AT MICHELTORENA ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-10-28",
        "DateExpire": "11/11/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HILL ST AT 1ST ST, 90012",
        "IsESA": "",
        "DateIssued": "2022-10-28",
        "DateExpire": "11/11/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HILL ST AT 1ST ST, 90012",
        "IsESA": "",
        "DateIssued": "2022-10-28",
        "DateExpire": "11/11/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "ALLESANDRO ST AT RIVERSIDE DR, 90039",
        "IsESA": "",
        "DateIssued": "2022-10-28",
        "DateExpire": "11/11/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "BEAUDRY AVE at SUNSET BLVD, 90012",
        "IsESA": "",
        "DateIssued": "2022-10-28",
        "DateExpire": "11/11/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VERMONT AVE at MONROE ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-10-28",
        "DateExpire": "11/11/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VERMONT AVE at MONROE ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-10-28",
        "DateExpire": "11/11/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VERMONT AVE at MONROE ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-10-28",
        "DateExpire": "11/11/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT CLINTON ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-10-28",
        "DateExpire": "11/11/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT CLINTON ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-10-28",
        "DateExpire": "11/11/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT CLINTON ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-10-28",
        "DateExpire": "11/11/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VERMONT AVE AT NORMAL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-10-28",
        "DateExpire": "11/11/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VERMONT AVE AT NORMAL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-10-28",
        "DateExpire": "11/11/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VERMONT AVE AT NORMAL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-10-28",
        "DateExpire": "11/11/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "713 N EAST EDGEWARE ROAD, 90026",
        "IsESA": "",
        "DateIssued": "2022-10-28",
        "DateExpire": "11/11/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-10-26",
        "DateExpire": "11/09/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-10-26",
        "DateExpire": "11/09/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MONROE ST at VERMONT AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-10-26",
        "DateExpire": "11/09/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MONROE ST at VERMONT AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-10-26",
        "DateExpire": "11/09/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MONROE ST at VERMONT AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-10-26",
        "DateExpire": "11/09/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "CORONADO ST at KENT ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-10-26",
        "DateExpire": "11/09/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "DOUGLAS ST AT TOLUCA ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-10-26",
        "DateExpire": "11/09/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LEXINGTON AVE at BERENDO ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-10-24",
        "DateExpire": "11/07/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1146 N ALEXANDRIA AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-10-21",
        "DateExpire": "11/04/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2022-10-21",
        "DateExpire": "11/04/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "TEMPLE ST AT ROBINSON ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-10-19",
        "DateExpire": "11/02/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "3RD ST AT WESTLAKE AVE, 90057",
        "IsESA": "",
        "DateIssued": "2022-10-19",
        "DateExpire": "11/02/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-10-19",
        "DateExpire": "11/02/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-10-19",
        "DateExpire": "11/02/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-10-19",
        "DateExpire": "11/02/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MONROE ST at VERMONT AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-10-19",
        "DateExpire": "11/02/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MONROE ST at VERMONT AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-10-19",
        "DateExpire": "11/02/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MONROE ST at VERMONT AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-10-19",
        "DateExpire": "11/02/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LYON ST AT CESAR E CHAVEZ AVE, 90012",
        "IsESA": "",
        "DateIssued": "2022-10-14",
        "DateExpire": "10/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LYON ST AT CESAR E CHAVEZ AVE, 90012",
        "IsESA": "",
        "DateIssued": "2022-10-14",
        "DateExpire": "10/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "DOUGLAS ST AT TOLUCA ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-10-14",
        "DateExpire": "10/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "DOUGLAS ST AT TOLUCA ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-10-14",
        "DateExpire": "10/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "DOUGLAS ST AT TOLUCA ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-10-14",
        "DateExpire": "10/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MONROE ST at VERMONT AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-10-12",
        "DateExpire": "10/26/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MONROE ST at VERMONT AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-10-12",
        "DateExpire": "10/26/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-10-12",
        "DateExpire": "10/26/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-10-12",
        "DateExpire": "10/26/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "BOYLSTON ST AT COURT ST, 90012",
        "IsESA": "",
        "DateIssued": "2022-10-12",
        "DateExpire": "10/26/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "BOYLSTON ST AT COURT ST, 90012",
        "IsESA": "",
        "DateIssued": "2022-10-12",
        "DateExpire": "10/26/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HILL ST AT 1ST ST, 90012",
        "IsESA": "",
        "DateIssued": "2022-10-12",
        "DateExpire": "10/26/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HILL ST AT 1ST ST, 90012",
        "IsESA": "",
        "DateIssued": "2022-10-12",
        "DateExpire": "10/26/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "900 N NORTH BROADWAY, 90012",
        "IsESA": "",
        "DateIssued": "2022-10-07",
        "DateExpire": "10/21/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "GREGORY AVE AT GOWER ST, 90038",
        "IsESA": "",
        "DateIssued": "2022-10-07",
        "DateExpire": "10/21/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-10-05",
        "DateExpire": "10/19/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MIRAMAR ST at WITMER ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-10-05",
        "DateExpire": "10/19/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MIRAMAR ST at WITMER ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-10-05",
        "DateExpire": "10/19/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MIRAMAR ST at WITMER ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-10-05",
        "DateExpire": "10/19/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HOOVER ST AT BEVERLY BLVD, 90057",
        "IsESA": "",
        "DateIssued": "2022-09-28",
        "DateExpire": "10/12/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LAVETA TER AT TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-09-21",
        "DateExpire": "10/05/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LAVETA TER AT TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-09-21",
        "DateExpire": "10/05/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-09-21",
        "DateExpire": "10/05/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-09-21",
        "DateExpire": "10/05/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-09-21",
        "DateExpire": "10/05/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-09-21",
        "DateExpire": "10/05/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT 2ND ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-09-21",
        "DateExpire": "10/05/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SERRANO AVE AT FERNWOOD AVE, 90027",
        "IsESA": "",
        "DateIssued": "2022-09-18",
        "DateExpire": "10/02/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SERRANO AVE AT FERNWOOD AVE, 90027",
        "IsESA": "",
        "DateIssued": "2022-09-18",
        "DateExpire": "10/02/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT LEXINGTON AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-09-14",
        "DateExpire": "09/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE AT LEXINGTON AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-09-14",
        "DateExpire": "09/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MONROE ST AT VIRGIL AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-09-14",
        "DateExpire": "09/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MIRAMAR ST at LUCAS AVE, 90026",
        "IsESA": "",
        "DateIssued": "2022-09-14",
        "DateExpire": "09/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MIRAMAR ST at LUCAS AVE, 90026",
        "IsESA": "",
        "DateIssued": "2022-09-14",
        "DateExpire": "09/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MIRAMAR ST at LUCAS AVE, 90026",
        "IsESA": "",
        "DateIssued": "2022-09-14",
        "DateExpire": "09/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MIRAMAR ST at LUCAS AVE, 90026",
        "IsESA": "",
        "DateIssued": "2022-09-14",
        "DateExpire": "09/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MIRAMAR ST at LUCAS AVE, 90026",
        "IsESA": "",
        "DateIssued": "2022-09-14",
        "DateExpire": "09/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "MIRAMAR ST at LUCAS AVE, 90026",
        "IsESA": "",
        "DateIssued": "2022-09-14",
        "DateExpire": "09/28/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "DE LONGPRE AVE AT KINGSLEY DR, 90027",
        "IsESA": "",
        "DateIssued": "2022-08-24",
        "DateExpire": "09/07/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HOOVER ST AT MANZANITA ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-08-24",
        "DateExpire": "09/07/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HOOVER ST AT MANZANITA ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-08-24",
        "DateExpire": "09/07/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HOOVER ST AT MANZANITA ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-08-24",
        "DateExpire": "09/07/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2800 N ALLESANDRO ST, 90039",
        "IsESA": "",
        "DateIssued": "2022-08-24",
        "DateExpire": "09/30/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2800 N ALLESANDRO ST, 90039",
        "IsESA": "",
        "DateIssued": "2022-08-24",
        "DateExpire": "09/07/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "COLUMBIA PL at MIRAMAR ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-08-24",
        "DateExpire": "09/07/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "SUNFLOWER AVE AT ROSEBUD AVE, 90039",
        "IsESA": "",
        "DateIssued": "2022-08-24",
        "DateExpire": "09/07/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "KINGSLEY DR AT DE LONGPRE AVE, 90027",
        "IsESA": "",
        "DateIssued": "2022-08-19",
        "DateExpire": "09/02/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "DOUGLAS ST AT TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-08-17",
        "DateExpire": "08/31/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FERNWOOD AVE AT SERRANO AVE, 90027",
        "IsESA": "",
        "DateIssued": "2022-08-17",
        "DateExpire": "08/31/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FERNWOOD AVE AT SERRANO AVE, 90027",
        "IsESA": "",
        "DateIssued": "2022-08-17",
        "DateExpire": "08/31/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "FERNWOOD AVE AT SERRANO AVE, 90027",
        "IsESA": "",
        "DateIssued": "2022-08-17",
        "DateExpire": "08/31/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2022-08-13",
        "DateExpire": "09/30/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2022-08-13",
        "DateExpire": "09/30/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2800 N ALLESANDRO ST, 90039",
        "IsESA": "",
        "DateIssued": "2022-08-10",
        "DateExpire": "08/24/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2800 N ALLESANDRO ST, 90039",
        "IsESA": "",
        "DateIssued": "2022-08-10",
        "DateExpire": "08/24/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2800 N ALLESANDRO ST, 90039",
        "IsESA": "",
        "DateIssued": "2022-08-10",
        "DateExpire": "08/24/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2800 N ALLESANDRO ST, 90039",
        "IsESA": "",
        "DateIssued": "2022-08-10",
        "DateExpire": "08/24/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2800 N ALLESANDRO ST, 90039",
        "IsESA": "",
        "DateIssued": "2022-08-10",
        "DateExpire": "08/24/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE at TEMPLE ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-08-10",
        "DateExpire": "08/24/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VIRGIL AVE at TEMPLE ST, 90004",
        "IsESA": "",
        "DateIssued": "2022-08-10",
        "DateExpire": "08/24/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "CORONADO ST at TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-08-10",
        "DateExpire": "09/30/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "CORONADO ST at TEMPLE ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-08-10",
        "DateExpire": "08/24/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2022-08-05",
        "DateExpire": "08/19/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2022-08-05",
        "DateExpire": "08/19/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VENDOME ST AT BEVERLY BLVD, 90057",
        "IsESA": "",
        "DateIssued": "2022-08-03",
        "DateExpire": "08/17/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "VENDOME ST AT BEVERLY BLVD, 90057",
        "IsESA": "",
        "DateIssued": "2022-08-03",
        "DateExpire": "08/17/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2800 N ALLESANDRO ST, 90039",
        "IsESA": "",
        "DateIssued": "2022-08-03",
        "DateExpire": "09/30/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2800 N ALLESANDRO ST, 90039",
        "IsESA": "",
        "DateIssued": "2022-08-03",
        "DateExpire": "08/17/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2800 N ALLESANDRO ST, 90039",
        "IsESA": "",
        "DateIssued": "2022-08-03",
        "DateExpire": "08/17/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2800 N ALLESANDRO ST, 90039",
        "IsESA": "",
        "DateIssued": "2022-08-03",
        "DateExpire": "08/17/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2800 N ALLESANDRO ST, 90039",
        "IsESA": "",
        "DateIssued": "2022-08-03",
        "DateExpire": "08/17/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2800 N ALLESANDRO ST, 90039",
        "IsESA": "",
        "DateIssued": "2022-08-03",
        "DateExpire": "08/17/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2800 N ALLESANDRO ST, 90039",
        "IsESA": "",
        "DateIssued": "2022-08-03",
        "DateExpire": "08/17/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LAKE ST AT BEVERLY BLVD, 90057",
        "IsESA": "",
        "DateIssued": "2022-07-28",
        "DateExpire": "08/11/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "906 N MANZANITA ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-07-27",
        "DateExpire": "09/30/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "906 N MANZANITA ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-07-27",
        "DateExpire": "08/10/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2022-07-22",
        "DateExpire": "08/05/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "906 N MANZANITA ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-07-20",
        "DateExpire": "09/30/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "906 N MANZANITA ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-07-20",
        "DateExpire": "09/30/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "906 N MANZANITA ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-07-20",
        "DateExpire": "09/30/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "906 N MANZANITA ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-07-20",
        "DateExpire": "09/30/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2405 W 3RD ST, 90057",
        "IsESA": "",
        "DateIssued": "2022-07-20",
        "DateExpire": "09/30/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2405 W 3RD ST, 90057",
        "IsESA": "",
        "DateIssued": "2022-07-20",
        "DateExpire": "08/03/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2405 W 3RD ST, 90057",
        "IsESA": "",
        "DateIssued": "2022-07-20",
        "DateExpire": "08/03/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "2405 W 3RD ST, 90057",
        "IsESA": "",
        "DateIssued": "2022-07-20",
        "DateExpire": "08/03/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "601 N EAST EDGEWARE ROAD, 90026",
        "IsESA": "",
        "DateIssued": "2022-07-20",
        "DateExpire": "08/03/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1300 W 3RD ST, 90017",
        "IsESA": "",
        "DateIssued": "2022-07-20",
        "DateExpire": "08/03/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2022-07-20",
        "DateExpire": "08/03/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2022-07-20",
        "DateExpire": "08/03/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2022-07-20",
        "DateExpire": "08/03/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2022-07-20",
        "DateExpire": "08/03/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2022-07-20",
        "DateExpire": "08/03/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2022-07-20",
        "DateExpire": "08/03/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "906 N MANZANITA ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-07-13",
        "DateExpire": "07/27/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "906 N MANZANITA ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-07-13",
        "DateExpire": "07/27/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "906 N MANZANITA ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-07-13",
        "DateExpire": "07/27/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "906 N MANZANITA ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-07-13",
        "DateExpire": "07/27/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "906 N MANZANITA ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-07-13",
        "DateExpire": "07/27/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "906 N MANZANITA ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-07-13",
        "DateExpire": "07/27/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "906 N MANZANITA ST, 90029",
        "IsESA": "",
        "DateIssued": "2022-07-13",
        "DateExpire": "07/27/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1866 N GLENDALE BLVD, 90026",
        "IsESA": "",
        "DateIssued": "2022-07-06",
        "DateExpire": "07/20/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HOOVER ST at COUNCIL ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-07-06",
        "DateExpire": "07/20/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2022-07-06",
        "DateExpire": "09/30/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2022-07-06",
        "DateExpire": "09/30/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2022-07-06",
        "DateExpire": "07/20/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2022-07-06",
        "DateExpire": "07/20/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2022-07-06",
        "DateExpire": "07/20/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2022-07-06",
        "DateExpire": "07/20/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2022-07-06",
        "DateExpire": "07/20/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "1010 S MAIN ST, 90015",
        "IsESA": "",
        "DateIssued": "2022-07-06",
        "DateExpire": "07/20/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HOOVER ST at COUNCIL ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-07-06",
        "DateExpire": "07/20/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HOOVER ST at COUNCIL ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-07-06",
        "DateExpire": "07/20/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "HOOVER ST at COUNCIL ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-07-06",
        "DateExpire": "07/20/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "4255 W LOCKWOOD AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-06-30",
        "DateExpire": "07/14/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "4255 W LOCKWOOD AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-06-30",
        "DateExpire": "07/14/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "4255 W LOCKWOOD AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-06-30",
        "DateExpire": "07/14/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "4255 W LOCKWOOD AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-06-30",
        "DateExpire": "07/14/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "LEXINGTON AVE at NEW HAMPSHIRE AVE, 90029",
        "IsESA": "",
        "DateIssued": "2022-06-30",
        "DateExpire": "07/14/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "COUNCIL ST at HOOVER ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-06-30",
        "DateExpire": "07/14/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "COUNCIL ST at HOOVER ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-06-30",
        "DateExpire": "07/14/22",
        "Latitude": "",
        "Longitude": ""
      },
      {
        "ColonyLocation": "COUNCIL ST at HOOVER ST, 90026",
        "IsESA": "",
        "DateIssued": "2022-06-30",
        "DateExpire": "07/14/22",
        "Latitude": "",
        "Longitude": ""
      }
    ]

  }
}
