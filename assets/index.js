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
    type: "input",
    message: "Does your project have a License? What is it?",
    name: "license",
  },
  {
    type: "input",
    message: "Does your project have a License? What is it?",
    name: "license",
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
  console.log(res);
  generateREADME(res);
}

// Function to go in the .then part to add answers to the README file
let generateREADME = function (answers) {
  console.log("Hello: ", answers);
  fs.writeFile("createdREADME.md", genReadme(answers), (error) =>
    error ? console.log(error) : console.log("File created!")
  );
};
x();
// initialisePrompt();
