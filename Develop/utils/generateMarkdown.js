// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![GitHub License](https://img.shields.io/badge/License-${data.license.replace(" ","%20")}-blue)

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
 
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
  ## Usage
  ${data.usage}

  ## Contributing 
  ${data.contributing}
  
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
  ## License
  ${data.license}
  This project is licensed under the ${data.license} license.

  ## Questions
  If you have any questions about the repo, open an issue, or please feel free to contact me directly at ${data.email}. 
  <br>
  <br>
  More of my work can be found on GitHub at: [${data.githubName}](https://github.com/${data.githubName.replace(" ","%20")}/).`;

    return template;
  }

module.exports = generateMarkdown;
