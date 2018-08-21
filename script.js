let quotes = [
  "Cogito ergo sum. (I think; therefore I am.)",
  "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
  "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
  "If you want to live a happy life, tie it to a goal, not to people or things.",
  "Always let your conscience be your guide!",
  "But it ain't about how hard you hit, it’s about how hard you can get hit and keep moving forward, how much can you take and keep moving forward.",
  "Choose a job you love, and you will never have to work a day in your life"
];

let authorNames = [
  "Rene Descartes",
  "Helen Keller",
  "Eleanor Roosevelt",
  "Albert Einstien",
  "The Blue Fairy, Pinocchio",
  "Rocky Balboa",
  "Confucius"
];

window.onload = function() {
  document.getElementById("btns").addEventListener("click", function() {
    let randomNum = Math.floor(Math.random() * quotes.length);
    document.getElementById("newQuote").innerHTML = quotes[randomNum];
    document.getElementById("authorName").innerHTML = authorNames[randomNum];
  });
};

let getQuote = document.getElementById("").innerHTML;

document
  .getElementById("tweet-this-post")
  .addEventListener("click", function(event) {
    event.preventDefault();

    let tweetedLink = window.location.href;

    window.open(
      "http://twitter.com/intent/tweet?url=" +
        tweetedLink +
        "&text=" +
        getPostTitle +
        "&via=kaidez&",
      "twitterwindow",
      "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0"
    );
  });
