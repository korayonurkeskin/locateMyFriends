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

async function postInfo(e) {
    e.preventDefault();
    
    const currentUser = new User(userName.value, userLatitude.value, userLongitude.value);

    console.log(currentUser);
};

submitBtn.addEventListener('click', postInfo);