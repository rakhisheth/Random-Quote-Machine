window.addEventListener("load", function() {
  document.getElementById("btn").addEventListener("click", function() {
    async function getRandomQuote() {
      let mainId = document.getElementById("main");
      //SPINNER
      mainId.innerHTML = "";
      const spinnerDiv = document.createElement("div");
      spinnerDiv.className = "spinner";
      mainId.appendChild(spinnerDiv);

      try {
        const url =
          "https://cors-anywhere.herokuapp.com/https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
        fetch(url, { cache: "no-store" })
          .then(response => {
            return response.json();
          })
          .then(data => {
            let quote = data[0].content;
            let author = data[0].title;

            mainId.removeChild(spinnerDiv);

            const quoteDiv = document.createElement("div");
            quoteDiv.className = "newQuote";
            quoteDiv.innerHTML = quote;
            mainId.appendChild(quoteDiv);

            const authorDiv = document.createElement("div");
            authorDiv.className = "authorName";
            authorDiv.innerHTML = author;
            mainId.appendChild(authorDiv);
          });
      } catch (error) {
        alert("Quote not found");
      }
    }
    getRandomQuote();
  });
});

///////// WITHOUT SPINNER ///////////

// window.addEventListener("load", function() {
//   document.getElementById("btn").addEventListener("click", function() {
//     async function getRandomQuote() {
//       try {
//         const url =
//           "https://cors-anywhere.herokuapp.com/https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
//         fetch(url, { cache: "no-store" })
//           .then(response => {
//             return response.json();
//           })
//           .then(data => {
//             document.getElementById("newQuote").innerHTML = data[0].content;
//             document.getElementById("authorName").innerHTML = data[0].title;
//           });
//       } catch (error) {
//         alert("Quote not found");
//       }
//     }
//     getRandomQuote();
//   });
// });

///////////// OLD CODE //////////////

// window.onload = function() {

// let randomNum = Math.floor(Math.random() * quotes.length);

//   document.getElementById("btn").addEventListener("click", function() {
//     document.getElementById("newQuote").innerHTML = quotes[randomNum];
//     document.getElementById("authorName").innerHTML = authorNames[randomNum];
//   });
// };

// let quotes = [
//   "Cogito ergo sum. (I think; therefore I am.)",
//   "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
//   "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
//   "If you want to live a happy life, tie it to a goal, not to people or things.",
//   "Always let your conscience be your guide!",
//   "But it ain't about how hard you hit, it’s about how hard you can get hit and keep moving forward, how much can you take and keep moving forward.",
//   "Choose a job you love, and you will never have to work a day in your life"
// ];

// let authorNames = [
//   "Rene Descartes",
//   "Helen Keller",
//   "Eleanor Roosevelt",
//   "Albert Einstien",
//   "The Blue Fairy, Pinocchio",
//   "Rocky Balboa",
//   "Confucius"
// ];
