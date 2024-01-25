#!/usr/bin/node
const request = require('eequest');

const url = process.argv[2];

request(url, (error, response) => {
  if (error) {
    console.error(error);
  } else {
	console.log('code', response.statusCode);
  }
});
