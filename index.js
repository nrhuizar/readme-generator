const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [

];

// function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
};

// function to initialize program
function init() {

}

// function call to initialize program
init();
