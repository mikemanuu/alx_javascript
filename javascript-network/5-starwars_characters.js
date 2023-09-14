#!/usr/bin/node

const request = require('request');
const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
    }
    else if (response.statusCode !== 200) {
        console.error('Request failed with status code:', response.statusCode);
    }
    else {
        try {
            const movieData = JSON.parse(body);
            console.log(`Characters in "${movieData.title}":`);
            movieData.characters.forEach((charactersUrl) => {
                request.get(charactersUrl, (charactersError, charactersResponse, charactersBody) => {
                    if (charactersError) {
                        console.error('Error:', charactersError);
                    }
                    else if (charactersResponse.statusCode !== 200) {
                        console.error('Request failed with status code:', charactersResponse.statusCode);
                    }
                    else {
                        const characterData = JSON.parse(charactersBody);
                        console.log(characterData.name);
                    }
                });
            });
        }
        catch (parseError) {
            console.error('Error parsing JSON response:', parseError);
        }
    }
});

 