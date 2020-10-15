//create map
const map = L.map('mapid').setView([-2.5319582,-44.2850512], 15);
//create and titleLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
//create icon
const icon=L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor:[29, 68],
    popupAnchor:[200, 2]

})
//popup da marcação/overlay
const popup = L.popup({
    closeButton:false,
    className:'map-popup',
    minWidth:270,
    minHeight:50
}).setContent('Casa Sonho De Criança<a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"></a>')


//create and add marker
L.marker([-2.5319582,-44.2850512],{icon})
    .addTo(map)
    .bindPopup(popup)
    
