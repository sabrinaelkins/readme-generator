// TODO: Include packages needed for this application
const fs = reqiure('fs');
const inquirer = require('inquirer');

// 
// const readmeGenerator = reqiure('./generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please input the title of your project here.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Insert description of your project here',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please input your project description.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Developer',
            message: 'Insert developers name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please input developer name here.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Installation instructions',
            message: 'Insert istallment instructions here',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please input your installment instructions here. ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Testing',
            message: 'Insert testing requirements',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please input your testing requirements here. ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Insert usage conditions here',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please input your usage conditions.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'Insert GitHub name here',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please input your GitHub name. ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Email',
            message: 'Insert email name here',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please input your email. ');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a License',
            choices: ['MIT','ISC','APACHE2.0', 'GID', 'none'],
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