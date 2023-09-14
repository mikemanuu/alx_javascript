#!/usr/bin/node

const request = require('request');
const id = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${id}`;

request(url, function (error, response, body) {
    if (error) {
        console.log(error);
    }
    else if (response.statusCode === 200) {
        const characters = JSON.parse(body).characters;
    }
    else {
        console.log('error');
    }
});

function printName(arr) {
    for (let i = 0; i < arr.length; i++) {
        request(arr[i], function (error, response, body) {
            if (!error) {
                console.log(JSON.parse(body).name);
            }
        });
    }
}
