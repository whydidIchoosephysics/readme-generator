function genReadme(answers, license) {
  return `# ${answers.title}

${license}

## Description:
${answers.description}<br>


## Table of Contents:

**[Installation](#Installation)**<br>
**[Usage](#Usage)**<br>
**[License](#Description)**<br>
**[Questions](#Questions)**<br>
  

  
## Installation:
${answers.installation}<br>

## Usage:
${answers.usage}<br>

## License:
${answers.license}<br>


## Questions:

For any questions find me on:
- Github: [**@${answers.githubUsername}**](https://github.com/${answers.githubUsername})<br>
- Email: **${answers.email}**<br>
    `;
}

// module.exports = genReadme;
export default genReadme;
