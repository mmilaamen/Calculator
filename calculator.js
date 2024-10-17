
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculator() {
    rl.question ("Enter a mathematical expression (e.g., 2 + 3 * 5): ", function(expression) {
        try {
            const result = eval(expression);
            if (isFinite(result)) {
                console.log(`Result: ${result}`);
            } else {
                console.error("Error: Invalid mathematical expression.");
            }
        } catch (error) {
            console.error("Error: Invalid input. Please enter a valid expression.");
        }
        rl.close();
    });
}

calculator();
