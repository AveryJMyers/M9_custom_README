// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
// TODO: Create an array of questions for user input
const questions = [
    'What is your project title?', //0
    'Describe your project?', //1
    'How do you install your project?', //2
    'How do you use this project', //3
    'Do you need to credit anyone for this project?', //4
    'What license did you use for this project?',//5
    'What features does your project include?',//6
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            message: questions[0],
            name: 'title'
        },
        {
            message: questions[1],
            name: 'description'
        },
        {
            message: questions[2],
            name: 'installation'
        },
        {
            message: questions[3],
            name: 'usage'
        },
        {
            message: questions[4],
            name: 'credits'
        },
        {
            message: questions[5],
            name: 'license'
        },
        {
            message: questions[6],
            name: 'features'
        }, 

    ]).then((response) => {
        console.log(response)
})
}

// Function call to initialize app
init();
