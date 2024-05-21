#! /usr/bin/env node  
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your frist No:",
        type: "number",
        name: "firstnumber"
    },
    { message: "Enter your Second No:",
        type: "number",
        name: "Secondnumber" },
    {
        message: "Select one of the operator:",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Divison"],
    },
]);
console.log(answer);
// Condition statment
if (answer.Operator === "Addition") {
    console.log(answer.firstnumber + answer.Secondnumber);
}
else if (answer.Operator === "Subtraction") {
    console.log(answer.firstnumber - answer.Secondnumber);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.firstnumber * answer.Secondnumber);
}
else if (answer.Operator === "Divison") {
    console.log(answer.firstnumber / answer.Secondnumber);
}
else {
    console.log("Please select valid operator");
}
