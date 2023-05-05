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

//geolocalizacion
navigator.geolocation.getCurrentPosition((data) => console.table(data), (err) => console.error(err))

//Gravar video
// Declare global variables.
const globalStream = null;

// Active permisions of navigator for record video with audio.
navigator.mediaDevices
    .getUserMedia({ audio: true, video: true })
    .then((stream) => {
        globalStream = stream;
    });


// Declare array empty for save chunks.
let recordedChunks = [];

// Event for save data recorered into array chunks.
mediaRecorder.addEventListener('dataavailable', (e) => {
    if (e.data.size > 0) {
        recordedChunks.push(e.data);
    }
});

// Event stop where you can execute custom actions.
mediaRecorder.addEventListener('stop', function () {
    console.log('addEventListener stop');

    // Create object url from blob.
    const objectRef = URL.createObjectURL(new Blob(recordedChunks));
});

//mensaje
var a = document.createElement('a');
var h = a.setAttribute('href', "tel:917515477");
a.click();