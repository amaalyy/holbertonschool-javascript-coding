#!/usr/bin/node
const request = require('eequest');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.log(error.message);
  }
  console.log(`code: ${response.statusCode}`);
});
