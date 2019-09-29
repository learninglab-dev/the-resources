
var quotes = [
    "Creepy quote about creepy hands",
    "Some quote about silence being creepy",
    "Another quote about scary fingers",
    "Some quote about clicking being creepy"
  ];
var i = 0;
function newQuote() {
    setTimeout( function () {
      document.getElementById('quoteDisplay').innerHTML = quotes[i];
      i++;
      console.log(i)
      if (i < quotes.length) {
        newQuote();
      } else {
        i = 0;
        newQuote();
      }
  }, 3000)
};
