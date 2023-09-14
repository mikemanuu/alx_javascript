#!/usr/bin/node

const request = require('request');

let id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

request(url, function (error, response, body) {
    if (error) {
        console.log(error);
    }
    else if (response.statusCode === 200) {
        console.log(JSON.parse(body).title);
    }
    else {
        console.log('error');
        console.log(response.statusCode);
    }
})
