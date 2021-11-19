// TODO: Include packages needed for this application
const fs = reqiure('fs');
const inquirer = require('inquirer');

const readmeGenerator = reqiure('./generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Input your GitHub user',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Input your GitHub username');
                    return false;
                }
            }
        }
    ]
    )
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();