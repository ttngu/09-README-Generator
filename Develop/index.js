var inquirer = require("inquirer");
var fs = require("fs");


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
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
