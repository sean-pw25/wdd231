const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');
const display = document.querySelector('#business-card-container');
const url = 'https://sean-pw25.github.io/wdd231/chamber/data/members.json';

async function getMemberData() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        displayMembers(data.members);

    } catch (error) {
        console.error("Unable to fetch", error.message);
    }
}

function displayMembers(data) {
    data.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let type = document.createElement('p');
        let image = document.createElement('img');
        let phone = document.createElement('p');
        let email = document.createElement('p');
        let website = document.createElement('a')

        name.textContent = `${member.company_name}`;
        type.textContent = `${member.company_type}`;
        phone.textContent = `${member.company_phone_number}`;
        email.textContent = `${member.company_phone_number}`;
        website.textContent = 'View Website';

        image.setAttribute('src', member.company_website_url);
        image.setAttribute('alt', `${member.company_name} Logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '100');
        image.setAttribute('height', '100');
        website.setAttribute('href', `${member.company_website_url}`);
        website.setAttribute('target', '_blank');

        card.appendChild(name);
        card.appendChild(type);
        card.appendChild(image);
        card.appendChild(phone);
        card.appendChild(email);
        card.appendChild(website);
    });
}

getMemberData();