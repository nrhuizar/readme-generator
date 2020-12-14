const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('Please enter your GitHub username!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the Title of you project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter a Title!');
                  return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmDescription',
            message: 'Would you like to enter some information about your project for the "Description" section?',
            default: true
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide some information about your project:',
            when: ({ confirmDescription }) => confirmDescription
        },
        {
            type: 'confirm',
            name: 'confirmInstallation',
            message: 'Would you like to enter some instructions under the "Installation" section?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide some installation instructions:',
            when: ({ confirmInstallation }) => confirmInstallation
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to enter some information about how to use your project in a "Usage" section?',
            default: true
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide some information about how to use your project:',
            when: ({ confirmUsage }) => confirmUsage
        },
        {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Would you like to enter some information about how to contribute in a "Contributing" section?',
            default: true
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide some information about how to contribute:',
            when: ({ confirmContributing }) => confirmContributing
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Would you like to enter some information about tests on your project in a "Tests" section?',
            default: true
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide some information about your tests:',
            when: ({ confirmTests }) => confirmTests
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'What licenses did you use for your project? (Check all that apply)',
            choices: ['MIT', 'GNU GPLv3', 'Mozilla', 'Apache', 'Boost', 'Unlicense']
        },
    ]);
};

// function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/README.md', fileContent, err => {
        if (err) {
          reject(err);
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
// function init();

// const readmeMd = generateMarkdown();

// function call to initialize program
questions()
    .then(data => {
        return generateMarkdown(data);
    })
    .then(readmeMd => {
        return writeFile(readmeMd);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
