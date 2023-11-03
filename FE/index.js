const submitBtn = document.getElementById('Submit');
const userName = document.getElementById('fname');
const userLatitude = document.getElementById('latitude');
const userLongitude = document.getElementById('longitude');

class User {
    constructor(name, lat, lng) {
        this.name = name
        this.lat = lat
        this.lng = lng
    }
}

// post data to server.js
submitBtn.addEventListener('click', postInfo);
async function postInfo(e) {
    e.preventDefault();
    
    const currentUser = new User(userName.value, userLatitude.value, userLongitude.value);

    const res = await fetch(
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(currentUser)
    });
};

// Initialize and add the map
let map;
async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const map = new Map(document.getElementById("map"), {
        zoom: 4,
        center: { lat: 49.2827, lng: -123.1207 },
        mapId: "DEMO_MAP_ID",
    });

    const markers = []; // list of user objects
    // add markers
    async function renderMarkers(listOfMarkers) {
        for (let i = 0; i < markers.length; i++) {
            const marker = new AdvancedMarkerElement({
                map: map,
                position: {lat: Number(markers[i].lat), lng: Number(markers[i].lng)},
                title: markers[i].name
            });
        };
    };
    renderMarkers(markers);
};
initMap();
