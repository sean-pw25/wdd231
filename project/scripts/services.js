const quote = document.getElementById('quote');
const url = 'https://programming-quotesapi.vercel.app/api/random';


// Fetch and display quote from Programming Quotes API
async function displayQuote() {
    try {

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Http Error! Status: ${response.status}`);
        }
        const data = response.json();
        quote.innerHTML = `<blockquote><p>${data.quote}</p></blockquote><p><cite>${data.author}</cite></p>`;
    }
    catch (error) {
        console.error(`Unable to fetch data ${error.message}`);
    }
}

displayQuote();