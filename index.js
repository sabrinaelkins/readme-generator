// TODO: Include packages needed for this application
const fs = reqiure('fs');
const inquirer = require('inquirer');

const readmeGenerator = reqiure('./generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'email',
            message: 'Insert your email here',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please input your email here');
                    return false;
                }
            }
        }
    ]
    )
}
{
    type: 'list',
    name: 'license',
    message: '',
    choices: [''],
},

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();