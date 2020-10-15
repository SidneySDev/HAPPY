const options = {
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false

}
//create map
const map = L.map('mapid',options).setView([-2.5319582,-44.2850512], 15);
//create and titleLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
//create icon
const icon=L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize:[58, 68],
    iconAnchor:[29, 68],
    popupAnchor:[200, 2]

})

//create and add marker
L.marker([-2.5319582,-44.2850512],{icon})
    .addTo(map)
    .bindPopup(popup)

//manusei da galeria de imagem
function selectImage(event){
    const button = event.currentTarget

    //remover todas as classes active
    const buttons=document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)
    function removeActiveClass(button){
        button.classList.remove("active")
    }

    //selecionar a imagem clicada
    const image=button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img") 
    //atualizar o container de imagem
    imageContainer.src=image.src
    //adicionar a class .active para este botO
    button.classList.add('active')
}

