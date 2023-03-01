import inquirer from "inquirer";
import * as fs from "fs";
import genReadme from "./generatorFunction.js";

//let initialisePrompt = function async() {
//inquirer.prompt(
let arrObj = [
  {
    type: "input",
    message: "What is your project's Title?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a short Description:",
    name: "description",
  },
  {
    type: "input",
    message: "Write any Installation Steps:",
    name: "installation",
  },
  {
    type: "input",
    message: "Quickly explain the Usage of the application:",
    name: "usage",
  },
  {
    type: "list",
    message: "Does your project have a License? What is it?",
    name: "license",
    choices: ["None", "MIT", "Mozilla"],
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "githubUsername",
  },
  {
    type: "input",
    message: "What is your emai address?",
    name: "email",
  },
];
//);

// .then((answers) => {
//   console.log("ANSWER: ", answers);
//   generateREADME(answers);
// })
// //.then(() => console.log("Successfully wrote to index.html"))
// .catch((error) => console.error(error));
//};

async function x() {
  let res = await inquirer.prompt(arrObj);
  generateREADME(res);
}

// Function to go in the .then part to add answers to the README file
let generateREADME = function (answers) {
  let license = "";
  switch (answers.license) {
    case "MIT":
      license =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla":
      license =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    default:
      break;
  }
  fs.writeFile("exampleREADME.md", genReadme(answers, license), (error) =>
    error ? console.log(error) : console.log("File created!")
  );
};
x();
// initialisePrompt();
