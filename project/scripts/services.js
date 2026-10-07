
// select DOM elements
const siteBuilds = document.getElementById('siteBuilds');
const upgrades = document.getElementById('upgrades');
const other = document.getElementById('other');

// fetch data for services page
async function fetchData() {
    const url = 'https://sean-pw25.github.io/wdd231/project/data/services.json';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error. Status: ${response.status}`)
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Fetch Error', error.message);
    }
}

// display services in corresponding section
function displayServices(array, element) {
    array.forEach(service => {
        const card = document.createElement('div');
        card.classList.add('card');
        const name = document.createElement('h3');
        name.textContent = service.name;

        card.appendChild(name);
        element.appendChild(card);
    });
}

async function run() {
    data = await fetchData();
    displayServices(data.siteBuilds, siteBuilds);
    displayServices(data.upgrades, upgrades);
    displayServices(data.other, other);
}

run();