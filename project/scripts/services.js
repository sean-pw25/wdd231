const quote = document.getElementById('quote');
const apiEndpoint = 'https://programming-quotesapi.vercel.app/api/random';
const url = `https://corsproxy.io/?${encodeURIComponent(apiEndpoint)}`;


// Fetch and display quote from Programming Quotes API
async function displayQuote() {
    try {

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Accept": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`Http error. Status: ${response.status}`);
        }
        const data = await response.json();
        quote.innerHTML = `<blockquote><p>${data.quote}</p></blockquote><p><cite>${data.author}</cite></p>`;
    }
    catch (error) {
        console.error(`Fetch error: ${error.message}`);
    }
}

displayQuote();