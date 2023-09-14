#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, function (error, response, body) {
    if (error) {
        console.log(error);
    }
    else if (response.statusCode === 200) {
        const data = {};
        const tasks = JSON.parse(body);
        for (const task of tasks) {
            if (task.completed === true) {
                if (data[task.userId] === undefined) {
                    data[task.userId] = 1;
                }
                else {
                    data[task.userId]++;
                }
            }
        }
        console.log(data);
    }
    else {
        console.log('error');
    }
})
