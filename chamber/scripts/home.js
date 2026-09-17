// DOM elements
const temp = document.getElementById('temp');
const icon = document.getElementById('weather-icon');
const desc = document.getElementById('weather-desc');
const spotlight = document.getElementById('spotlight-members');
const forecastContainer = document.getElementById('forecast-cont');

// date variables
const today = new Date().toLocaleDateString('en-CA');

// fetch from openweathermap api
async function getWeatherData(type) {
    const lon = -86.01;
    const lat = 40.04;
    const units = 'imperial'
    const appid = 'fd9b92ae0130c4c02c7933a0af4eae11'
    const url = `//api.openweathermap.org/data/2.5/${type}?lon=${lon}&lat=${lat}&units=${units}&appid=${appid}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // for testing purposes
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.error(`Unable to fetch ${error.message}`);
    }
}

// display current weather
async function displayCurrentWeather() {
    const current = await getWeatherData('weather');
    const weatherDesc = current.weather[0].description;

    temp.innerHTML = `Temp: ${current.main.temp}&deg;F`;
    desc.textContent = `${weatherDesc}`;
    const iconSrc = `//openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;
    icon.setAttribute('src', iconSrc);
    icon.setAttribute('alt', desc)
}

// display forecasted weather
async function displayForecastWeather() {
    const forecast = await getWeatherData('forecast');
    const days = forecast.list.filter(day => {
        splitDt = day.dt_txt.split(' ');
        isToday = splitDt[0] === today;
        isTime = splitDt[1] === "12:00:00";
        return isTime && !isToday;
    }).slice(0, 3)

    days.forEach(day => {
        dayContainer = document.createElement('div');
        weatherImg = document.createElement('img');
        dailyTemp = document.createElement('p');
        weekDay = document.createElement('p');

        const iconSrc = `//openweathermap.org/img/wn/${day.weather[0].icon}.png`;
        const dateObj = new Date(day.dt * 1000);
        const weekdayShort = dateObj.toLocaleDateString('en-US', { weekday: 'short' });

        weekDay.textContent = `${weekdayShort}`;
        weatherImg.setAttribute('src', iconSrc);
        weatherImg.setAttribute('alt', day.weather[0].description);
        dailyTemp.innerHTML = `${day.main.temp_max}&deg;`;

        dayContainer.appendChild(weekDay);
        dayContainer.appendChild(weatherImg);
        dayContainer.appendChild(dailyTemp);
        forecastContainer.appendChild(dayContainer);
    })
    console.log(days);
}

async function getMemberData() {
    url = 'https://sean-pw25.github.io/wdd231/chamber/data/members.json';
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data.members;

    } catch (error) {
        console.error("Unable to fetch", error.message);
    }
}

async function displayMemberSpotlight() {
    const members = await getMemberData();
    const filteredMembers = filterMembers(members);
    filteredMembers.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let membershipLevel = document.createElement('p');
        let image = document.createElement('img');
        let phone = document.createElement('p');
        let email = document.createElement('p');
        let website = document.createElement('a');
        let address = document.createElement('p');
        let sectionBody = document.createElement('div');
        let infoContainer = document.createElement('div');

        name.textContent = member.company_name;
        phone.textContent = `Phone: ${member.company_phone_number}`;
        email.textContent = `Email: ${member.company_email_address}`;
        website.textContent = `View Website`;
        address.innerHTML = `Address:<br>${member.company_address}`

        image.setAttribute('src', member.image);
        image.setAttribute('alt', `${member.company_name} Logo`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('height', '100');
        image.setAttribute('width', '100');
        website.setAttribute('href', member.company_website_url);
        website.setAttribute('target', '_blank');
        website.setAttribute('rel', 'noopener');
        sectionBody.classList.add('body');
        infoContainer.classList.add('info-container');
        email.classList.add('email-list');
        website.classList.add('website-link');
        membershipLevel.textContent = 'Membership: '
        membershipLevel.classList.add('membership');
        address.classList.add('address')


        if (member.membership_level === 3) {
            membershipLevel.classList.add('gold');
        } else {
            membershipLevel.classList.add('silver');
        }


        card.appendChild(name);
        card.appendChild(membershipLevel)
        card.appendChild(sectionBody)
        sectionBody.appendChild(image);
        infoContainer.appendChild(phone);
        infoContainer.appendChild(email);
        infoContainer.appendChild(website);
        sectionBody.appendChild(infoContainer);
        sectionBody.appendChild(address);
        spotlight.appendChild(card);
    });
}

function filterMembers(array) {
    const premiumMembers = array.filter(member => member.membership_level >= 2);
    for (let i = premiumMembers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let k = premiumMembers[i];
        premiumMembers[i] = premiumMembers[j];
        premiumMembers[j] = k
    }
    return premiumMembers.slice(0, 3);
}

displayCurrentWeather();
displayForecastWeather();
displayMemberSpotlight();