function genReadme(answers) {
  return `# ${answers.title}

## Table of Contents:
[Descriptiom](https://github.com/whydidIchoosephysics/readme-generator#Description)
  
## Description:
${answers.description}
  
## Installation:
${answers.installation}
    `;
}

// module.exports = genReadme;
export default genReadme;
