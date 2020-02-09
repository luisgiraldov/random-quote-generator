/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


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
***/
function getRandomNumber(max){
  return Math.floor(Math.random() * max.length);
}
/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  return {
    data : quotesArray[getRandomNumber(quotesArray)],
    color : colors[getRandomNumber(colors)]
  }; 
  
}
/***
 * `printQuote` function
***/
function printQuote(){
  let quoteObject = getRandomQuote();
  let body = document.getElementsByTagName('BODY')[0];
  let quoteHtml= `<p class = "quote">${quoteObject.data.quote}</p>
                  <p class = "source">${quoteObject.data.source}`;
  
  if(quoteObject.data.citation){
    quoteHtml += `<span class = "citation">${quoteObject.data.citation}</span>`;
  }

  if(quoteObject.data.year){
    quoteHtml += `<span class = "year">${quoteObject.data.year}</span>`;
  }
 
  if(quoteObject.data.tags && Array.isArray(quoteObject.data.tags)){
    quoteHtml += `<span class = "full-width">`;
    quoteObject.data.tags.forEach(element => {
      quoteHtml += `<span class = "tag">${element}</span>`;
    });
    quoteHtml += `</span>`;
    
  } else if(quoteObject.data.tags){
    quoteHtml += `<span class = "tag full-width">${quoteObject.data.tags}</span>`;
  }

  quoteHtml += `</P>`;

  body.style.backgroundColor = quoteObject.color;
  document.getElementById("quote-box").innerHTML = quoteHtml;
  return "done";
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 * Change quote every 20s
 * 
***/
function changeQuote(){
  setInterval(printQuote, 10000);
}
changeQuote();
