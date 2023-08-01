// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'projectDescription',
    message: 'Enter a brief description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions for your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information for your project:',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter contribution guidelines for your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions for your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache', 'GPL', 'ISC', 'None'],
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

// Create a function to generate README content based on user input
function generateReadmeContent(answers) {
  return `
# ${answers.projectTitle}

## Description
${answers.projectDescription}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered under the ${answers.license} license.

## Contributing
${answers.contribution}

## Tests
${answers.tests}

## Questions
If you have any questions, feel free to reach out via GitHub or email:
- GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
- Email: ${answers.email}
`;
}

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing README file:', err);
    } else {
      console.log('README file has been created successfully!');
    }
  });
}

// Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = generateReadmeContent(answers);
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => console.error('Error with inquirer:', error));
}

// Function call to initialize app
init();
