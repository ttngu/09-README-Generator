const inquirer = require("inquirer");
const fs = require("fs");
let generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = new Promise(function (resolve, reject){
    resolve(inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is project title?"
        },
        {
            type: "input",
            name: "description",
            message: "Enter a Description:"
        },
        {
            type: "input",
            name: "table of contents",
            message: "Enter the Table of Contents"
        },
        {
            type: "input",
            name: "installation",
            message: "Enter Installation instrcutions:"
        },
        {
            type: "input",
            name: "usage",
            message: "Enter Usage:"
        },
        {
            type: "checklist",
            name: "license",
            message: "Choose License type:"
        },
        {
            type: "input",
            name: "contributing",
            message: "Who contributed to this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Enter Tests:"
        },
        {
            type: "input",
            name: "questions",
            message: "Enter Questions:"
        }
    ]))
});

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('fileName', data, function (err) {
        if (err) {
            return console.log(err);
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
