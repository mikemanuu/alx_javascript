#!/usr/bin/node

const r = request('request');

const url = process.argv[2];
r(url, function (err, response) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('code: ' + response.statusCode);
    }
});
