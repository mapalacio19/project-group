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


const formToAddItemsID = document.getElementById('formToAddItemsID');
const listOfItemsID = document.getElementById('listOfItemsID');
const parsingLocalStorageItems = JSON.parse(localStorage.getItem('items')) || [];

function listItemsFn(e) {
     e.preventDefault();
     const itemText = (this.querySelector('[name=item]')).value;
     const item = {
          itemText,
          checkedOff: false,
          deleted: false
     };
    parsingLocalStorageItems.push(item);
     populateList(parsingLocalStorageItems, listOfItemsID);
     localStorage.setItem('items', JSON.stringify(parsingLocalStorageItems));
     this.reset();
}

function populateList(itemArray = [], itemList) {
     itemList.innerHTML = itemArray.map((item, i) => {
     return `
          <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${item.checkedOff ? 'checked' : ''} />
          <label for="item${i}">${item.itemText}</label><span data-index=${i} id="removed${i}" ${item.deleted ? true : false}>x</span>
          </li>
     `;
     }).join('');
}

function checkedOffFn(e) {
     if (!e.target.matches('input')) return;
     const el = e.target;
     const index = el.dataset.index;
     parsingLocalStorageItems[index].checkedOff = !parsingLocalStorageItems[index].checkedOff;
     localStorage.setItem('items', JSON.stringify(parsingLocalStorageItems));
     populateList(parsingLocalStorageItems, listOfItemsID);
}

function removeItemFn(e) {
    if (!e.target.matches('span')) return;
    const element = e.target;
    const ind = element.dataset.index;
    parsingLocalStorageItems[ind].deleted = !parsingLocalStorageItems[ind].deleted;
    console.log(parsingLocalStorageItems[ind].deleted);
    parsingLocalStorageItems.splice([ind],1);
    localStorage.setItem('items', JSON.stringify(parsingLocalStorageItems));
    populateList(parsingLocalStorageItems, listOfItemsID);
}

formToAddItemsID.addEventListener('submit', listItemsFn);
listOfItemsID.addEventListener('click', checkedOffFn);
listOfItemsID.addEventListener('click', removeItemFn);

populateList(parsingLocalStorageItems, listOfItemsID);

