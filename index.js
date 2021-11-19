// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// 
// const readmeGenerator = reqiure('./generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
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
            name: 'Installation',
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
            type: 'input',
            name: 'Credits',
            message: 'Insert credits here.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please input credits.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'License',
            message: 'Choose a License',
            choices: ['MIT', 'ISC', 'APACHE2.0', 'GID', 'none'],
        }
    ]
    ).then(function({Title,Description,Developer,Credits,Installation,Testing,Usage,GitHub,Email,License}){
            var content = `
# ${Title}
##  Description
${Description}
## Table Of Contents
----------------------
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Developer](#developer)
* [GitHub](#github)
* [Testing](#testing)
* [Email](#email)
* [License](#license)
* [Contact](#contact)

## Installation
${Installation}

## Usage
${Usage}

## Credits
${Credits}

## Developer
${Developer}

## GitHub
[Profile](https://github.com/${GitHub})

## License
![GitHub License](https://img.shields.io/badge/license-${License}-blue.svg)


`
console.log(content)
    })
}
// TODO: Create a function to write README file
questions()