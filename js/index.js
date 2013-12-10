(function(){
  "use strict";
  
  var scrollToContent;

  $(document).ready(function(){
    $(".header_btn").click(scrollToContent);
  });

  scrollToContent = function(){
    $("body").animate({
      scrollTop: $(".container").position().top - 50
    }, 650);
  };
}());
