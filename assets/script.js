
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
// Get the modal
var modal = document.getElementById("myModal");
        
// Get the button that opens the modal s
var btn = document.getElementById("myBtn");
        
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
        
// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
        
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
        
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}

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

