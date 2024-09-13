#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagentaBright("\n\t\t\t\t\t *****ATM MACHINE***** \t\t\t\t\t\n"));
let myBank = 100000; // Kuwaiti Dinar
let myPin = 78613;
const enteredPin = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.yellowBright("Enter your pin number:"),
        type: "number",
    },
]);
if (enteredPin.pin === myPin) {
    console.log(chalk.bold.greenBright("\n   Your pin code is correct. :)\n"));
    let atmQues = await inquirer.prompt([
        {
            name: "optionType",
            message: chalk.yellowBright("Please select your option:"),
            type: "list",
            choices: ["Withdrawl", "Check Balance", "Fast Cash"],
        },
    ]);
    if (atmQues.optionType === "Withdrawl") {
        let amountAns = await inquirer.prompt([
            {
                name: "withdrawl_amount",
                message: chalk.yellowBright("Enter your withdrawl amount."),
                type: "number",
            },
        ]);
        if (amountAns.withdrawl_amount >= myBank) {
            console.log(chalk.red("\nInsufficient Balance"));
        }
        else {
            myBank -= amountAns.withdrawl_amount;
            console.log(chalk.yellow(`\nYour remaining balance is: ${myBank}`));
        }
    }
    else if (atmQues.optionType === "Check Balance") {
        console.log(chalk.yellow(`\nYour current balance is: ${myBank}`));
    }
    else if (atmQues.optionType === "Fast Cash") {
        let fastAmountAns = await inquirer.prompt([
            {
                name: "fast_cash_amount",
                message: chalk.yellowBright("Enter your fast cash amount."),
                type: "list",
                choices: [7000, 15000, 20000, 35000, 50000],
            },
        ]);
        myBank -= fastAmountAns.fast_cash_amount;
        console.log(chalk.yellow(`\nYour remainning balance is ${myBank}.`));
        // *** Following this code is correct and it can also be run ***
        // if(fastAmountAns.fast_cash_amount >= myBank){
        //     console.log("Insufficient Balance")
        // }
        // else{
        //     myBank -= fastAmountAns.fast_cash_amount;
        //     console.log(`Your remaining balance is: ${myBank}`);
        // }
    }
}
else {
    console.log(chalk.red("\n   Incorrect pin code!"));
}
//  ********************************************  //
