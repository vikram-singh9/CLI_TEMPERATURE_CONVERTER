import inquirer from "inquirer";
import chalk from "chalk";
function CelsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}
console.log(chalk.bgGray("Welcome to the Temperature Converter by Vikram!"));
console.log(chalk.bgGray("it converts your °C temperature to °F."));
async function convertTemperature() {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "fahrenheit",
            message: "Enter the temperature in celcuis:",
            validate: (input) => !isNaN(parseFloat(input)) || chalk.red("Please enter a valid number"),
        },
    ]);
    const fahrenheit = parseFloat(answers.fahrenheit);
    const celsius = CelsiusToFahrenheit(fahrenheit);
    console.log(chalk.green(`${fahrenheit.toFixed(2)}°C is equivalent to ${celsius}°F `));
}
convertTemperature();
