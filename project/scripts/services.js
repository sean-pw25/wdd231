const siteBuilds = document.getElementById('siteBuilds');
const upgrades = document.getElementById('upgrades');
const other = document.getElementById('other');

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

async function displayServices() {
    const data = await fetchData();
    data[0].forEach(element => {
        console.log(element);
    });
}

displayServices();