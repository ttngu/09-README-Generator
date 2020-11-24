const inquirer = require("inquirer");
const fs = require("fs");
let generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = new Promise(function (resolve, reject){
    resolve(inquirer.prompt([
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
        // {
        //     type: "input",
        //     name: "table of contents",
        //     message: "Enter the Table of Contents"
        // },
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
            name: "contributing",
            message: "What does the user need to know about contributing to this repo?"
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


// questions.then((response))
//     fs.writeFile('README.md', `# ${response.title}
    
    
//     #Description
//     *${response.description}

//     #Table of Contents
//     *${response.contents}

//     #Installation 
//     *${response.installation}

//     #Project Usage
//     *${response.usage}

//     #Contributers
//     *${response.contributing}

//     #Tests
//     *${response.tests}`
    
    
//     , (err) =>
//         err ? console.error(err) : console.log(''))

//     ;
    //     });
// })