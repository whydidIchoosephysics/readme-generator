import inquirer from "inquirer";
import * as fs from "fs";

let initialisePrompt = function () {
  inquirer
    .prompt([
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
    ])
    .then((answers) => generateREADME(answers))
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((error) => console.error(error));
};

// Function to go in the .then part to add answers to the README file
let generateREADME = function (answers) {
  console.log(`Hello, ${answers.title}!`);
  fs.writeFile("file.md", `${answers.title}`, (error) =>
    error ? console.log(error) : console.log("Success!")
  );
};

initialisePrompt();
