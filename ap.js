//camara
const photo = document.querySelector('#photo');
const camera = document.querySelector('#camera');
camera.addEventListener('change', function (e) {
    photo.src = URL.createObjectURL(e.target.files[0]);
});

//detectar la perdida de conexion
function updateIndicator() {
    console.log(window.navigator.onLine);
}
window.addEventListener('online', updateIndicator);
window.addEventListener('offline', updateIndicator);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }

    function showPosition(position) {
        console.log("Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude);
    }

    function showPosition(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const mapsUrl = `https://www.google.es/maps/@-10.2937454,-68.0431863,7z=${lat},${lng}`;
        window.open(mapsUrl, '_blank');
    }
    
}


//mensaje
var a = document.createElement('a');
var h = a.setAttribute('href', "tel:917515477");
a.click();