var cardDecks = [];
var cardSuits = ["clubs", "diamonds", "hearts", "spades"];
var cardRanks = ["ace",2,3,4,5,6,7,8,9,10,"jack","queen","king"];

var cardCreator = function(start, end) {
  cardSuits.forEach(function(suit){
    cardRanks.forEach(function(rank) {
      cardDecks.push(rank + " of " + suit);
    });
    cardDecks.push("<p class=\"separator\"></p>");
  });
};

$(function() {
  $("body").append("<div class=\"container\"></div>")
  $(".container").append("<h1 class=\"jumbotron\">Look at the page source!</h1>");
  $(".container").append("<button class=\"btn\" id=\"light\">Light Theme</button><button class=\"btn\" id=\"dark\">Dark Theme</button><button class=\"btn\" id=\"rotator\">Rotate</button>");
  $("body").addClass("light");

  cardCreator();

  $(".container").append("<div class=\"results\"></div>");
  $(".results").append("<ul></ul>");

  cardDecks.forEach(function(card) {
    $("ul").append("<li>"+card+"</li>");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light");
  });
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark");
  });
  $("button#rotator").click(function() {
    $("body").toggleClass("rotator");
  });
});
