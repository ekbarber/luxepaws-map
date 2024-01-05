import * as L from 'leaflet'
import data from './data.json'
// Initialize the map
const map = L.map('map').setView([0, 0], 2); // Set initial view and zoom level

// Add a tile layer (you can choose a different tile provider if needed)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const bounds: L.LatLngBounds = new L.LatLngBounds(undefined as unknown as L.LatLngBoundsLiteral)
data.forEach(item => {
    if(item.Latitude === 'Error' || item.Latitude === ""){
        return
    }
    var marker = L.marker([Number(item.Latitude), Number(item.Longitude)]).addTo(map);
    try{
        bounds.extend(marker.getLatLng())
    }catch(err){
        console.warn(err)
    }
    // You can customize the marker popup content if needed
    marker.bindPopup(`<b>${item.ColonyLocation}</b><br>${item.DateIssued}`);
});
map.fitBounds(bounds, { padding: [20, 20] });

