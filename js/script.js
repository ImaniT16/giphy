// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  fetch('https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC') 
  .then((response)=>{ 
      return response.json(); 
    }) 
  .then((data)=>{ 
      console.log(data); 
    });
  
//  
  temp1.data[0].images.original.url
  
});

