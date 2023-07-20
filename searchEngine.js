//PROJECT GOOGLE
// We're going to use the "axios" library to make HTTP requests
const axios = require('axios');
const readline = require('readline');

// Create readline interface for user input from command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user to enter a search topic
rl.question('Enter a topic: ', (topic) => {

  // Make a GET request to the Google Custom Search API
  axios.get('https://www.googleapis.com/customsearch/v1', {
    params: {
      key: 'AIzaSyDQR7YScYbdwf8DLOVMDXIiSq3r2ekDctM', // replace with your API key.
      cx: '06ae5a7c87eaa4a41', // replace with your Search Engine ID.
      q: topic
    }
  })
  .then((response) => {
    // The information we want is in response.data.items
    const results = response.data.items;
    console.log(`I found ${results.length} results about "${topic}":`);
    results.forEach((result, index) => {
      console.log(`\nResult ${index + 1}:`);
      console.log(result.title);
      console.log(result.link);
      console.log(result.snippet);
    });
  })
  .catch((error) => {
    console.error(`An error occurred: ${error.message}`);
  })
  .finally(() => {
    // Close readline interface
    rl.close();
  });

});
