//opdracht 1
let number = 1;
while (number <= 10) {
    if (number % 4 === 0) {
        console.log(`${number} is divisible by 4.`);
    }
    else {
        console.log(`${number} is not divisible by 4.`);

    }
    number = number + 1;
}

//opdracht 2
var i = 0;
var firstNumber = 1;
var secondNumber = 0;

while (i <=  10) {
    var totalNumber = firstNumber + secondNumber;
    var firstNumber = secondNumber;
    var secondNumber = totalNumber;

    console.log(totalNumber);
    i++
}

//opdracht 3
let total = 0;
const numberArray = [2, 4, 8, 9, 12, 13];
for (let index = 0; index < numberArray.length; index++) {
    total += numberArray[index];
}
console.log(total);
