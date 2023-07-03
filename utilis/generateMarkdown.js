// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)
    `;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `https://opensource.org/licenses/${license}`;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return " ";
  } else {
    return `This project is under [${license}](${renderLicenseLink(
      license
    )}) license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}
  [${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})

## Description:
${data.description}

## Table of Contents:
*  [Description](#description)
*  [Installation](#installation)
*  [Usage](#usage)
*  [Contributing](#contributing)
*  [Test](#test)
*  [License](#license)
*  [Questions](#questions)
*  [Video Walkthrough](#Video-Walkthrough)

## Installation:
${data.installation}

## Usage:
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing:
${data.contributing}

## Test:
${data.test}

## Questions

* If you have any questions, please contact me via email: ${data.email}
* Link to my github page: [${data.github}](https://github.com/${data.github})

##  Walkthrough Video:
Please watch the video demonstration if you need help using the application: (https://drive.google.com/file/d/1ojK4KgcgdU0YEWV2X6YKZOB_hRZFHw81/view)

`;
}

module.exports = generateMarkdown;
