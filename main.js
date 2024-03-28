import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1214;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code :"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Login successful .");
    let answerOptions = await inquirer.prompt([{
            name: "options",
            type: "list",
            message: "Chose one of any to perform operation",
            choices: ["withdraw", "check balance", "fast cash"]
        }]);
    if (answerOptions.options === "withdraw") {
        let cashOut = await inquirer.prompt([{
                name: "withdrawMoney",
                type: "number",
                message: "Enter amount for transaction :"
            }]);
        myBalance -= cashOut.withdrawMoney;
        console.log("Your remainig balance is :", +myBalance);
    }
    else if (answerOptions.options === "check balance") {
        console.log("your current balance is:", +myBalance);
    }
    else if (answerOptions.options === "fast cash") {
        let cashOut = await inquirer.prompt([{
                name: "fastCash",
                type: "list",
                message: "Enter your amount for quick cash",
                choices: ["1000", "2000", "5000", "10000"]
            }]);
        myBalance -= cashOut.fastCash;
        console.log("you have successfully cashout:", +myBalance);
    }
}
else {
    console.log("invalid pin code .!!!");
}
