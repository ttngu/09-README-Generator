// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ![GitHub License](https://img.shields.io/badge/License-${data.license.replace(" ","%20")}-blue)

  ## Description
  ${data.description}
  <br>
  <br>

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
 <br>
 <br>

  ## Installation
  To install dependencies, run the following commend:`
  +
  "\n```\n"
  +
  data.installCommand
  +
  "\n```\n"
  +
  `
  <br>
  <br>

  ## Usage
  ${data.usage}
  <br>
  <br>

  ## Contributing 
  ${data.contributing}
  <br>
  <br>

  ## Tests
  Run the following command to run tests:`
  +
  "\n```\n"
  +
  data.testCommand
  +
  "\n```\n"
  +
  `
  <br>
  <br>

  ## License
  This project is licensed under the ${data.license} license.
  <br>
  <br>

  ## Questions
  If you have any questions about the repo, open an issue, or please feel free to contact me directly at ${data.email}. 
  <br>
  <br>
  
  More of my work can be found on GitHub at: [${data.githubName}](https://github.com/${data.githubName.replace(" ","%20")}/).`;

    return template;
  }

module.exports = generateMarkdown;
