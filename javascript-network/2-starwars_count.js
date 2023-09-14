#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, function (err, response, body) {
    if (!err) {
        const films = JSON.parse(body).results;
        let n = 0;
        for (const x of films) {
            const filmChars = x.characters;
            for (const z of filmChars) {
                if (z.includes('18')) {
                    n++
                }
            }
        }
        console.log(n);
    }
});
