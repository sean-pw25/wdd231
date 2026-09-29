import data from '../data/data.mjs';

function displayCards(list) {
    data.forEach((item) => {
        const card = document.createElement('div');
        card.innerHTML = `<h2>${list.name}</h2><figure><img src=><></figure>`
    })
}

displayCards(data.places);