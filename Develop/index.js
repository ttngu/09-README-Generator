const inquirer = require("inquirer");
const fs = require("fs");
let generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = [
        {
            type: "input",
            name: "githubName",
            message: "What is your GitHub Name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "title",
            message: "What is the project title?"
        },
        {
            type: "input",
            name: "description",
            message: "Enter a short project description:"
        },
        {
            type: "list",
            name: "license",
            message: "Choose License type:",
            choices: [
                "MIT",
                "APACHE 2.0",
                "GPL 3.0",
                "BSD 3",
                "None"
            ],
        },
        {
            type: "input",
            name: "installCommand",
            message: "What command should be run to install dependencies?",
            default: 'npm i',
        },
        {
            type: "input",
            name: "testcommand",
            message: "What command should be run to test?",
            default: `npm test`,
        },
        {
            type: "input",
            name: "usage",
            message: "Enter Usage info:"
        },
        {
            type: "input",
            name: "contributing",
            message: "What does the user need to know about contributing to this repo?"
        },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, function (err) {
        if (err) {
            console.log(err);
            throw err;
        }
    });
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(function(data) {
        console.log("Success!");
        writeToFile("README.md", generateMarkdown(data));
        console.log("Generating README")
    })
}

// function call to initialize program
init();
