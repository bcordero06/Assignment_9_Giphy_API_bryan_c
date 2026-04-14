console.log("script.js loaded");

function getDogFact() {
  fetch("https://api.giphy.com/v1/gifs/search?api_key=0I5w13WpmNUtuad2jUCwWJzoVanAdta8&q=dogs&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips")
    .then(response => response.json())  // Covert the response
    .then(data => { 
      // Update the DOM with the dog fact
      const fact = data.facts[0]; 
      const output = document.getElementById("fact-output"); 
      output.textContent = fact; 
    }) 
    .catch(error => { 
      // Message to print if there was an error
      console.error("Error fetching dog fact:", error); 
    });
}

