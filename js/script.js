/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array, contains objects with the following properties:
 * quote, source, citation, and year
***/
const quotes = [
  {
    quote: 'Every master was once a disaster.',
    source: 'T. Harv Eker',
    tags: 'Motivation'
  },
  {
    quote: 'Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.',
    source: 'Margaret Mead'
  },
  {
    quote: 'The young do not know enough to be prudent, and therefore they attempt the impossible - and achieve it, generation after generation.',
    source: 'Pearl S. Buck'
  },
  {
    quote: 'If you want to go fast, go alone. If you want to go far, go together.',
    source: 'African Proverb',
    tags: 'Wisdom'
  },
  {
    quote: `One of the toughest job for entrepreneur is realizing that they are entrepreneur, they are not doers. They should not be micro managing. It means finding delicate balance in leading, empowering, keeping in touch, giving feedback. It's much harder than doing it yourself. But you have to go for the harder one. Because the second, third and fourth, they'll begin to do it better than you. By concentrating on leadi​ng, I'm one of the better leaders of our company.`,
    source: 'Tom Phillips',
    tags: 'Business'
  },
  {
    quote: `Dream high... as high as the sky.\nIf you fall, you'll fall among the stars`,
    source: `Soekarno (Indonesia's 1st President)`
  },
  {
    quote: 'Big dreams often upset people with small minds.',
    source: 'Brad Sugars',
    citation: 'Facebook',
    year: '2019'
  },
  {
    quote: 'A sign of a good leader is not how many followers you have, but how many leaders you create.',
    source: 'Mahatma Gandhi'
  }
]


/**
 * generate random quotes from provided array of Quotes
 * @param {array} arrOfQuotes - array of quotes
 * @returns {object} - random quote object 
 */
function getRandomQuote(arrOfQuotes) {
  const quoteNo = Math.floor(Math.random() * arrOfQuotes.length) // will create quote index No., from 0 to (length-1)

  return arrOfQuotes[quoteNo]
}

function getRandomBackgroundColor() {
  let randomColor = []

  for (let i = 0; i < 3; i++) {

    randomColor.push(Math.floor(Math.random() * 255) + 1)
  }

  return `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`
}


/**
 * generate HTML that shows random quote
 */
function printQuote() {
  const quoteToShow = getRandomQuote(quotes) // --> object
  let quoteHtml = `
    <p class="quote">${quoteToShow.quote}</p>
    <p class="source">${quoteToShow.source}
  `

  if (quoteToShow.citation) {
    quoteHtml += `<span class="citation">${quoteToShow.citation}</span>`
  }

  if (quoteToShow.year) {
    quoteHtml += `<span class="year">${quoteToShow.year}</span>`
  }

  if (quoteToShow.tags) {
    quoteHtml += `<span class="tags">(${quoteToShow.tags})</span>`
  }

  // finish the quoteHtml by adding the closing </p>
  quoteHtml += `</p>`

  // change the background color
  document.querySelector('body').style.backgroundColor = getRandomBackgroundColor()

  document.getElementById('quote-box').innerHTML = quoteHtml
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

// auto-refresh quotes every 10 seconds
let autoRefresh = window.setInterval(printQuote, 10000)