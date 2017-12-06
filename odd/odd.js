var numberString = window.prompt("Enter a number");
var number = Number(numberString);


if (number % 2 !== 0 && number % 1 !== 0) {
    window.prompt("That is not a number")
} else if (number % 2 === 0) {
    window.prompt("That number is even")
} else if (number % 2 !== 0 ){
    window.prompt("That number is odd")
} 