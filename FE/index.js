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

submitBtn.addEventListener('click', postInfo);
async function postInfo(e) {
    e.preventDefault();
    
    const currentUser = new User(userName.value, userLatitude.value, userLongitude.value);

    const res = await fetch(`http://localhost:9329/user/:${currentUser.name}`,
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(currentUser)
    });
};