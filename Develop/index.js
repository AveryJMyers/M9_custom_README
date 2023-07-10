// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input

// Creates an array of necessary questions for the README
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

// Creates a readme file with the user's input
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
        }else {
            console.log('Success!')
        }
    })
}

// TODO: Create a function to initialize app

// Initializes the app and prompts the user with the questions array. Then writes the user's input to the README file.
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
            type: 'list',
            message: questions[5],
            name: 'license',
            choices: ['NONE','Apache 2.0', 'Boost 1.0', 'BSD 3-Clause', 'BSD 2-Clause', 'CC0', 'Eclipse', 'GNU GPL v3', 'MIT', 'Mozilla']
        },
        {
            message: questions[6],
            name: 'features'
        }, 

    ]).then((response) => {
        console.log(response)
        writeToFile('READMEoutput.md', generateMarkdown(response));
})
}

// Function call to initialize app
init()
