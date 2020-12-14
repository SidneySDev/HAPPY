//create map
const map = L.map('mapid').setView([-2.5319582,-44.2850512], 15);
//create and titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);
//create icon
const icon=L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor:[29, 68]

})
let marker;
//create and marker
//get das marcações do map
map.on('click' , (event) => {
   const lat = event.latlng.lat;
   const lng = event.latlng.lng;
   document.querySelector('[name=lat]').value = lat;
   document.querySelector('[name=lng]').value = lng;
//remove marker
    marker && map.removeLayer(marker)
//add icon layer
   marker = L.marker([lat,lng],{icon}).addTo(map);
})