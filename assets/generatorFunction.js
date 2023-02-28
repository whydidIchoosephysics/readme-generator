function genReadme(answers) {
  return `## ${answers.title}
  
      # Description:
      -  ${answers.description}
  
      # Installation:
      -  ${answers.installation}
    `;
}

// module.exports = genReadme;
export default genReadme;
