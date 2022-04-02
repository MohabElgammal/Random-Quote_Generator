function randomQuote() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function( response ) {
          $("#random_quote").html("<p id='random_quote' class='lead text-center'>" +
            response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
         
            

            $("#tweet").attr("href", stringToClickToTweetURL('"' + response.quoteText + '" - ' + response.quoteAuthor));
           
            
       
        }


    });
  }
  
  function stringToClickToTweetURL(str) {
  
    // Convert to Click to Tweet URL
    var stringToConvert = str.split(" ").join("%20").split("@").join("%40").split("!").join("%21");
  
    // Put 'Click to Tweet' URL suffix at the begining
    var resultString = "https://twitter.com/intent/tweet?text=" + stringToConvert;
  
    // Return properly formatted "Click to Tweet URL"
    return resultString;
  }

  $(function() {
    randomQuote();
  });
  
  $("#btn").click(function(){
    randomQuote();
  });