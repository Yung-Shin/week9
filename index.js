const generateMarkdown = require("./utilis/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// Array of Questions for the prompt
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
      message: "What do you need to install to use this application?",
      type: "input",
    },
   
    {
      name: "usage",
      message: "How do I use your application?",
      type: "input",
    },
  
    {
      name: "license",
      message: "Which license are you using under?",
      type: "checkbox",
      choices: ["APACHE", "GPL", "ISC", "MIT"],
      },

    {
      name: "contributing",
      message: "How does this app contributing to the community?",
      type: "input",
    },
  
    {
      name: "test",
      message: "Any testing guideline?",
      type: "input",
    },
       
    {
      name: "github",
      message: "Please share your github",
      type: "input",
    },
   
    {
      name: "email",
      message: "Please share you email address",
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

