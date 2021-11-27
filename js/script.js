/******************************************
Treehouse FSJS Techdegree:
Gaurav Kumar
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: ` An eye for an eye only ends up making the whole world blind.`,
    source: `Mahatma Gandhi`,
    citation: `Gandhi`,
    year: `1982`,
    tag: `movie`
  },
  {
    quote: `The greatest glory in living lies not in never falling, but in rising every time we fall.`,
    source: `Nelson Mandela`,
    year: `1998`,
    tag: `politics`
  },
  {
    quote: `There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.`,
    source: `Albert Einstein`
  },
  {
    quote: `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking`,
    source: `Steve Jobs`
  },
  {
    quote: `Life is what happens when you're busy making other plans.`,
    source: `John Lennon`
  },
]


/* Declared variable noOfQuotes to store the total no of elements
in the array quotes,
to use it in getRandomFunction
*/
let noOfQuotes = quotes.length;


/***
 * `getRandomQuote` function
 * this function generates a random number, stored in variable randomNumber
 * value of randomNumber is used as index for quotes array and is returned
***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * noOfQuotes) ;
  // console.log(randomNumber);
  return quotes[randomNumber];
}


/***
 * `printQuote` function
 * a random quote is returned from getRandomQuote and stored in selectedQuote variable
 * all the properties of selectedQuote are shown in html elements on the page
***/
function printQuote() {
  let selectedQuote = getRandomQuote();
  let quote = `<p class="quote">${selectedQuote.quote}</p>`
  quote += `<p class="source">${selectedQuote.source}`
  if(selectedQuote.citation != undefined){
    quote += `<span class="citation">${selectedQuote.citation}</span>`
  }
  if(selectedQuote.year != undefined){
    quote += `<span class="year">${selectedQuote.year}</span>`
  }
  if(selectedQuote.tag != undefined){
    quote += `<span class="tag">, ${selectedQuote.tag}</span>`
  }
  //put the closing tag for p after the span elements(for better alignment)
  quote += `</p>`
  document.getElementById('quote-box').innerHTML = quote;
  document.body.style.background = getRandomColour();
}

/***
 * `getRandomColour` function. This method is adapted from https://css-tricks.com/snippets/javascript/random-hex-color/
 * this function generates a random hex colour value, converted to string 
***/
function getRandomColour(){
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
console.log(getRandomQuote())
document.getElementById('load-quote').addEventListener("click", printQuote, false);


//A timing function to print quote every 20 seconds
setInterval(printQuote, 20000)