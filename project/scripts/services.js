// create images for each service (go basic for sake of time)
// consider creating an animation for all of them to 724192slide up into place one after the other
// style page




// select DOM elements
const siteBuilds = document.getElementById('siteBuilds');
const upgrades = document.getElementById('upgrades');
const other = document.getElementById('other');
const infoModal = document.getElementById('infoModal');

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

function displayInfoModal(service) {
    // reset modal content
    infoModal.innerHTML = ``;

    // create description and price for modal
    modalImg = document.createElement('img');
    modalHeader = document.createElement('h2');
    modalDescription = document.createElement('p');
    modalPrice = document.createElement('p');

    // set content of modal to selected service
    modalHeader.textContent = `${service.name}`;
    modalDescription.textContent = `${service.description}`;
    modalPrice.textContent = `${service.price}`;
    modalImg.setAttribute('src', `${service.img}`);
    modalImg.setAttribute('loading', 'lazy');
    modalImg.setAttribute('alt', `Image for ${service.name}`);
    modalImg.setAttribute('width', '100');
    modalImg.setAttribute('height', '100');

    // create close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => infoModal.close());

    // allow user to close modal by clicking anywhere outside of it
    infoModal.addEventListener('click', (event) => {
        if (event.target === infoModal) {
            infoModal.close();
        }
    })

    // display the modal
    infoModal.appendChild(modalImg);
    infoModal.appendChild(modalHeader);
    infoModal.appendChild(modalDescription);
    infoModal.appendChild(modalPrice);
    infoModal.appendChild(closeButton);
    infoModal.showModal();

}

// display services in corresponding section
function displayServices(array, element) {
    array.forEach(service => {
        // create dom elements
        const card = document.createElement('div');
        const name = document.createElement('h4');
        const img = document.createElement('img');
        const button = document.createElement('button');

        // update dom element properties
        card.classList.add('card');
        card.classList.add('service-item');
        name.textContent = service.name;
        img.setAttribute('src', `${service.img}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('alt', `Image for ${service.name}`);
        img.setAttribute('width', '100');
        img.setAttribute('height', '100');
        button.textContent = 'Show More';
        button.setAttribute('aria-label', 'Show More');


        // append elements to card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(button);

        // add 'Show More' button to open modal with information about service
        button.addEventListener('click', () => displayInfoModal(service));

        // append card to document
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