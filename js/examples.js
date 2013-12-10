/*global cards*/
(function(){
  "use strict";

  // functions
  var addCard;

  $(document).ready(function(){
    for (var i = 0; i < cards.length; i++){
      var cardUrl = cards[i].url;
      if (cardUrl.length > 30){
        cardUrl = cardUrl.substring(0, 30) + "...";
      }
      var card = $("<div class='card'>" +
                    "<img src='" + cards[i].logo + "' width='200px' class='img-responsive' />" +
                    "<p class='card-title'>" + cards[i].title + "</p>" +
                    "<p>" + cards[i].descp + "</p>" +
                    "<p class='url'><a href='" + cards[i].url + "'>" + cardUrl + "</a></p" +
                    "</div>");
      addCard(card);
    }
  });

  addCard = function(card){
    var container;
    if ($(".card").length % 4 === 0){
      container = $("<div class='row'></div>");
      $(".cards-container").append(container);
    } else {
      var containers = $(".cards-container .row");
      container      = $(containers[containers.length - 1]);
    }
    var wrapper = $("<div class='col-md-3'></div>");
    wrapper.append(card);
    container.append(wrapper);
  };
}());
