const generateDescription = descriptionText => {
  if (!descriptionText) {
    return '';
  }

  return `
## Description

${descriptionText}`;
};

const generateInstallation = installationText => {
  if (!installationText) {
    return '';
  }

  return `
## Installation

${installationText}`;
};

const generateUsage = usageText => {
  if (!usageText) {
    return '';
  }

  return `
## Usage

${usageText}`;
};

const generateContributors = contributorsText => {
  if (!contributorsText) {
    return '';
  }

  return `
## Contributors

${contributorsText}`;
};

const generateTests = testsText => {
  if (!testsText) {
    return '';
  }

  return `
## Tests

${testsText}`;
};

const generateMIT = mit => {
  if (!'MIT') {

  }
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${generateMIT(data.mit)}
${generateDescription(data.description)}

## Table of Contents
* [Installation](#installation)
* [Questions](#questions)

${generateInstallation(data.installation)}

${generateUsage(data.usage)}

${generateContributors(data.contributors)}

${generateTests(data.tests)}

## Licenses

${data.licenses}

## Questions  

Feel free to checkout my other projects https://github.com/${data.github}
Or you can reach me @ ${data.email}
`;
}

module.exports = generateMarkdown;
