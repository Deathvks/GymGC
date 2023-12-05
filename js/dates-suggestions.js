function getGymFromLocalStorage() {
    return JSON.parse(localStorage.getItem('gym'));
}

const gym = getGymFromLocalStorage();

const gymList = document.getElementById('gym-list');

for (const gymItem of gym) {
gymList.innerHTML += `<li>${gymItem.whatever}</li>`;

}
