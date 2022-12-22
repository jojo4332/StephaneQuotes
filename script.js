const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote-button');

function getQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quoteText.innerText = data.content;
        });
}

newQuoteButton.addEventListener('click', getQuote);

getQuote();