const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote-button');

function getQuotes() {
    // Set up the API request using fetch
    const settings = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'x-apikey': '63a4db7bf43a573dae0956c0',
            'cache-control': 'no-cache',
        },
    };
    fetch('https://stephanequotes-b38a.restdb.io/rest/quotes', settings)
        .then(response => response.json())
        .then(data => {
            // Clear the existing quotes from the page
            quoteContainer.innerHTML = '';

            // Loop through the quotes and create a new quote element for each one
            data.forEach(quote => {
                const quoteElement = document.createElement('div');
                quoteElement.innerHTML = `
            <p class="quote">${quote.text}</p>
          `;
                quoteContainer.appendChild(quoteElement);
            });
        });
}

getQuotes();