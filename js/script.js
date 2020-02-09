/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * IIFE to not clutter the Global Object
***/
(function(){

/*** 
 * `quotes` array 
***/
const quotesArray = [
  {
    quote : "It's not what happens to us, but our response to what happens to us that hurts us",
    source : "Stephen R. Covey",
    citation : "The 7 Habits of Highly Effective People: powerful Lessons in Personal Change",
    year : 1989
  },
  {
    quote : "Start with the end in mind.",
    source : "Stephen R. Covey",
    citation : "The 7 Habits of Highly Effective People: powerful Lessons in Personal Change",
    year : 1989
  },
  {
    quote : "To change ourselves effectively, we first had to change our perceptions.",
    source : "Stephen R. Covey",
    citation : "The 7 Habits of Highly Effective People: powerful Lessons in Personal Change",
    year : 1989
  },
  {
    quote : "We see the world, not as it is, but as we are---or, as we are conditioned to see it.",
    source : "Stephen R. Covey",
    citation : "The 7 Habits of Highly Effective People: powerful Lessons in Personal Change",
    year : 1989
  },
  {
    quote : "Nothing is particularly hard if you divide it into small jobs.",
    source : "Henry Ford",
    tags: "Motivational"
  },
  {
    quote : "Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young.",
    source : "Henry Ford",
    tags: "Wisdom"
  },
  {
    quote : "The sign of intelligence is that you are constantly wondering. Idiots are always dead sure about everything they are doing in their life.",
    source : "Sadhguru Jaggi Vasudev",
    tags: "Wisdom"
  },
  {
    quote : "The fear is simply because you are not living with life, You are living in your mind.",
    source : "Sadhguru Jaggi Vasudev",
    tags: "Wisdom"
  },
  {
    quote : "Obstacles don't have to stop you. If you run into a wall, don't turn around and give up. Figure out how to climb it, go through it, or work around it.",
    source : "Michael Jordan",
    tags: ["Motivational", "success", "phraseOfTheDay"]
  },
  {
    quote : "Some people want it to happen, some wish it would happen, others make it happen.",
    source : "Michael Jordan",
    tags: ["Motivational", "success", "phraseOfTheDay"]
  },
  {
    quote : "Always turn a negative situation into a positive situation.",
    source : "Michael Jordan",
    tags: "Motivational"
  },
  {
    quote : "Talent wins games, but teamwork and intelligence wins championships.",
    source : "Michael Jordan",
    tags: "Wisdom"
  },
  {
    quote : "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    source : "Steve Jobs",
    tags: "Wisdom"
  },
  {
    quote : "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something-- your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.",
    source : "Steve Jobs",
    tags: "Motivational"
  },
  {
    quote : " At the center of bringing any dream into fruition is self-discipline.",
    source : "Will Smith",
    tags: "Motivational"
  }
];

/*** 
 * `colors` array 
***/
const colors = [
  "#2D3EC2", 
  "#1D2980",
  "#3B52FF",
  "#0F1440",
  "#3549E6",
  "#4EC23C",
  "#338028",
  "#67FF4F",
  "#1A4014",
  "#5CE648",
  "#C24138",
  "#802B25",
  "#FF564A",
  "#401612",
  "#E04B40"
];

/***
 * `getRandomNumber` function
 * returns a random number
 * @param {array} max - The array that needs the random number is used to calculate the maximun value
 * The number will vary between 0 and max - 1
***/
function getRandomNumber(max){
  return Math.floor(Math.random() * max.length);
}

/***
 * `getRandomQuote` function
 * returns an object with data containing quotes and color for the background
***/
function getRandomQuote(){
  return quotesArray[getRandomNumber(quotesArray)];
}

/***
 * `changeColor` function
 * Change the Body's background color based on a random number
***/
function changeColor(){
  const body = document.getElementsByTagName('BODY')[0];
  const color = colors[getRandomNumber(colors)];
  body.style.backgroundColor = color;
}

/***
 * `printQuote` function
 * Display the quote and its respective citation, year, tags if included in the object
***/
function printQuote(){
  let quoteObject = getRandomQuote();
  let quoteHtml= `<p class = "quote">${quoteObject.quote}</p>
                  <p class = "source">${quoteObject.source}`;
  
  if(quoteObject.citation){
    quoteHtml += `<span class = "citation">${quoteObject.citation}</span>`;
  }

  if(quoteObject.year){
    quoteHtml += `<span class = "year">${quoteObject.year}</span>`;
  }
 
  if(quoteObject.tags && Array.isArray(quoteObject.tags)){
    quoteHtml += `<span class = "full-width">`;
    quoteObject.tags.forEach(element => {
      quoteHtml += `<span class = "tag">${element}</span>`;
    });
    quoteHtml += `</span>`;
    
  } else if(quoteObject.tags){
    quoteHtml += `<span class = "tag full-width">${quoteObject.tags}</span>`;
  }

  quoteHtml += `</P>`;
  changeColor();
  return document.getElementById("quote-box").innerHTML = quoteHtml;
}

/***
 * Timer object that offers a reset feature
 * @param {function} fn callback function to execute after the time interval has been reached
 * @param {Number} t number to represent the time interval
 * code taken from https://stackoverflow.com/questions/8126466/how-do-i-reset-the-setinterval-timer
 * User jfriend00
***/
function Timer(fn, t) {
  let timerObj = setInterval(fn, t);

  this.stop = function() {
      if (timerObj) {
          clearInterval(timerObj);
          timerObj = null;
      }
      return this;
  }

  // start timer using current settings (if it's not already running)
  this.start = function() {
      if (!timerObj) {
          this.stop();
          timerObj = setInterval(fn, t);
      }
      return this;
  }

  // start with new or original interval, stop current interval
  this.reset = function(newT = t) {
      t = newT;
      return this.stop().start();
  }
}

/***
 * Change quote every 10s
 * 
***/
const timer = new Timer(printQuote, 10000);
timer.start();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", function(){
  printQuote();
  timer.reset();
}, false);

})();
