/* Prints the number of movies where the character "Wedge Antilles" is present
 * Takes args, first of which is the URL to request (GET) using the module 'request'
 * Wedge Antilles is character ID 18 - use the ID to filter the results of the API
 */

const req = require("request"); // Import the 'request' module.
// Get the movie ID
const url = `${process.argv[2]}`; //Star Wars API endpoint

// Make a GET request to the API
req(url, (error, response, body) => {
  if (error) {
    return console.error(error);
  }

  const data = JSON.parse(body);
  const films = data.results;
  let count = 0;
  const characterId = "18"; // Character ID for Wedge Antilles

  for (const film in films) {
    const filmchars = films[film].characters;
    for (const charIndex in filmchars) {
      if (filmchars[charIndex].includes(characterId)) {
        count += 1;
      }
    }
  }

  console.log(count);
});