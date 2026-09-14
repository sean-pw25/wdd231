const temp = document.querySelector('#current-temp');
const icon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');
const url = '//api.openweathermap.org/data/2.5/weather?lon=49.75&lat=6.64&units=imperial&appid=fd9b92ae0130c4c02c7933a0af4eae11';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error('Unable to fetch', error.message)
    }
}

function displayResults(data) {
    temp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `//openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherDesc = data.weather[0].description;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', weatherDesc);
    caption.textContent = weatherDesc;
}

apiFetch();