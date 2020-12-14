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




const generateBadge = licenses => {
  if (!licenses) {
      return '';
    }
 
    for (let i = 0; i < licenses.length; i++) {
      console.log(licenses);
    return`
    ![license](https://img.shields.io/badge/License-${licenses.split(' ').join('%20')}-blue?style=for-the-badge)`;
    }
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${generateBadge(data.licenses)}
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


// console.log(licenses)
// if (licenses === 'MIT') {
//   return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
// } else if (licenses === 'GNU GPLv3') {
//   return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
// } else if (licenses === 'Mozilla') {
//   return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
// } else if (licenses === 'Apache') {
//   return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
// } else if (licenses === 'Boost') {
//   return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
// } else if (licenses === 'Unlicense') {
//   return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
// } else {
//   return '';
// }