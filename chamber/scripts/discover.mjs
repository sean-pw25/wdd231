import { places } from '../data/data.mjs';

const placesDisplay = document.querySelector('#placesDisplay');
let visitMessage = document.querySelector('#visitMessage')

function displayCards(list) {
    list.forEach((item) => {

        const card = document.createElement('div');

        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = `images/discover/${item.image}`
        img.alt = item.name;
        figure.appendChild(img);
        card.appendChild(figure);

        const title = document.createElement('h2');
        title.innerText = item.name;
        card.appendChild(title);

        const address = document.createElement('address');
        address.innerText = item.address;
        card.appendChild(address);

        const desc = document.createElement('p');
        desc.innerText = item.description;
        card.appendChild(desc);

        const learnButton = document.createElement('button');
        learnButton.ariaLabel = 'Learn More';
        learnButton.textContent = 'Learn More';
        learnButton.setAttribute('onclick', `window.open('${item.url}', 'blank');`);
        card.appendChild(learnButton);

        placesDisplay.appendChild(card);
    })
}

function displayVisitMessage() {
    let lastVisit = Number(localStorage.getItem("lastVisit"));
    const currentVisit = Date.now();
    const daysSinceLastVisit = Math.floor((currentVisit - lastVisit) / 86400000);

    if (lastVisit === 0) {
        visitMessage.textContent = 'Welcome! Let us know if you have any questions.';
    } else {
        switch (true) {
            case daysSinceLastVisit < 1:
                visitMessage.textContent = 'Back so soon! Awesome!';
                break;
            case daysSinceLastVisit >= 1 && daysSinceLastVisit < 2:
                visitMessage.textContent = 'You last visited 1 day ago.';
                break;
            case daysSinceLastVisit >= 2:
                visitMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
        }
    }
    localStorage.setItem('lastVisit', currentVisit);
}

displayCards(places);
displayVisitMessage();

