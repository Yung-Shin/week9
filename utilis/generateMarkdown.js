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
  return `# ${data.title}
  [${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})

  ## Table of Contents:
  *  [Description](#description)
  *  [Installation](#installation)
  *  [Usage](#usage)
  *  [Contributing](#contributing)
  *  [Tests](#tests)
  *  [License](#license)
  *  [Questions](#questions)
  *  [Video Walkthrough](#Video-Walkthrough)


## Description:
${data.description}
## Installation:
${data.installation}
## Usage:
${data.usage}
## Contributing:
${data.contributing}
## Tests:
${data.tests}
## License
${renderLicenseSection(data.license)}
## Questions

  * If there are any questions, feel free to contact my email at: ${data.email}
  * You can also find me on GitHub at: [${data.github}](https://github.com/${
    data.github
  })
##  Video Walkthrough:
Please find the attached link of walkthrough video demonstrating the functionality of this application:
[Click here to watch the Demo](https://drive.google.com/file/d/1ojK4KgcgdU0YEWV2X6YKZOB_hRZFHw81/view)

`;
}

module.exports = generateMarkdown;
