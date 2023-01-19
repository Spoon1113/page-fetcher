const request = require("request");
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(`${url}`, (error, response, body) => {
  if (error) {
    console.log("error", error);
  }
  fs.writeFile(`${filePath}`, body, err => {
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`)
  })
});

