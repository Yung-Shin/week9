const generateMarkdown = require("./utilis/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// Array of Questions
const questions = [
    {
      name: "title",
      message: "Your Project Title?",
      type: "input",
    },
    
    {
      name: "description",
      message: "Describe your project",
      type: "input",
    },
  
    {
      name: "installation",
      message: "Enter installation instructions for your project:",
      type: "input",
    },
   
    {
      name: "usage",
      message: "Enter usage information for your project:",
      type: "input",
    },
  
    {
      name: "contributing",
      message: "Enter your contribution guidelines for this project:",
      type: "input",
    },
  
    {
      name: "tests",
      message: "Enter your testing guidelines for this project:",
      type: "input",
    },
 
    {
      name: "license",
      message: "Choose a software license for this project:",
      type: "checkbox",
      choices: ["ISC", "MIT", "APACHE", "GPL"],
    },
  
    {
      name: "github",
      message: "Enter your github username:",
      type: "input",
    },
   
    {
      name: "email",
      message: "Enter your email address:",
      type: "input",
    },
  ];
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("README file has successfully created!");
      }
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
      console.log(data);
      writeToFile("README.md", generateMarkdown(data));
    });
  }

// Function call to initialize app
init();

