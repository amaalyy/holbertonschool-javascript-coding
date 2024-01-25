#!/usr/bin/node
const fs = require('fs');
const filePath = process.argv[2];
const fileConent = process.argv[3];

f.writeFile(filePath, fileConent, 'utf-8', (err) => {
  if (err) {
    console.log(err);
  }
});
