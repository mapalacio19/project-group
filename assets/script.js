
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

/*map*/
mapboxgl.accessToken = 'pk.eyJ1IjoiY2Zhcmlhczk1NiIsImEiOiJja3J5OHkydnMweHdzMnVyMGdxMmgycXBxIn0.44xrHxZ58mny-5RM8hn9ZQ'



navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

function successLocation(position) {
    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-97.73, 30.26])
}

function setupMap(center){
    const map = new mapboxgl.Map({
  container: 'googlemap',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: center,
  zoom: 12
})

const nav = new mapboxgl.NavigationControl();
map.addControl(nav, "bottom-right");

/*map search bar*/
var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
})
map.addControl(geocoder,"top-left")

/*directions search bar*/
var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });
  map.addControl(directions, 'top-right');
}
