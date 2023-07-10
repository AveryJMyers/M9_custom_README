// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input

// Creates an array of necessary questions for the README
const questions = [
    'What is your project title?', //title 0
    'Describe your project?', //description 1
    'How do you install your project?', // installation 2
    'How do you use this project', // usage 3
    'What license did you use for this project?',// license 4
    'Do you need to credit anyone for this project?', // credits 5
    'What features does your project include?',// features 6
    'What tests are included in this project?',// tests 7
    'What is your GitHub username?',// github 8
    'What is your email address?'// email 9

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
            type: 'list',
            message: questions[4],
            name: 'license',
            choices: ['NONE','Apache 2.0', 'Boost 1.0', 'BSD 3-Clause', 'BSD 2-Clause', 'CC0', 'Eclipse', 'GNU GPL v3', 'MIT', 'Mozilla']
        },
        {
            message: questions[5],
            name: 'credits'
        },
        {
            message: questions[6],
            name: 'features'
        }, 
        {
            message: questions[7],
            name: 'tests'
        },
        {
            message: questions[8],
            name: 'github'
        },
        {
            message: questions[9],
            name: 'email'
        }

    ]).then((response) => {
        console.log(response)
        writeToFile('READMEoutput.md', generateMarkdown(response));
})
}

// Function call to initialize app
init()
