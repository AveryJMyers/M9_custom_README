// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


// Gets badges for the user's license choice
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }else if (license === 'Boost 1.0'){
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  }else if (license=== 'BSD 3-Clause'){
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }else if (license === 'BSD 2-Clause'){
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  }else if (license === 'CC0'){
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
  }else if (license === 'Eclipse'){
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  }else if (license === 'GNU GPL v3'){
    return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }else if (license === 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }else if (license === 'Mozilla'){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// Gets the link for the user's license choice
function renderLicenseLink(license) {
  if (license === 'Apache 2.0') {
    return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'Boost 1.0') {
    return '[Boost 1.0](https://www.boost.org/LICENSE_1_0.txt)';
  } else if (license === 'BSD 3-Clause') {
    return '[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'BSD 2-Clause') {
    return '[BSD 2-Clause](https://opensource.org/licenses/BSD-2-Clause)';
  } else if (license === 'CC0') {
    return '[CC0](http://creativecommons.org/publicdomain/zero/1.0/)';
  } else if (license === 'Eclipse') {
    return '[EPL 1.0](https://opensource.org/licenses/EPL-1.0)';
  } else if (license === 'GNU GPL v3') {
    return '[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)';
  } else if (license === 'Mozilla') {
    return '[Mozilla](https://opensource.org/licenses/MPL-2.0)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License\n\nThis project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.\n`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README

// Generates the markdown for the user's README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}\n
## Description\n${data.description}\n
## Table of Contents \n * [Installation](#installation) \n * [Usage](#usage) \n * [Credits](#credits) \n * [License](#license) \n * [Features](#features) \n
## Installation\n${data.installation}\n
## Usage\n${data.usage}\n
## Credits\n${data.credits}\n
${licenseSection}
## License\n${licenseBadge}\n
## Features\n${data.features}\n`;
}


module.exports = generateMarkdown;
