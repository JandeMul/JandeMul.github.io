//opdracht 1
//sets number
const number = 647;
//calculates if the number is odd(output 1) or even(output 0)
const oddOrEven = number % 2;
//logs 0 or 1
console.log(oddOrEven);
// if output oddOrEven is 0 the number is even else the output is odd
if (oddOrEven == 0) {
    console.log('The number is even');
}
else {
    console.log('The number is odd');
}

//opdracht 2
// sets sting
const programmingIsCool = 'Programming is not so cool';
//remove not
console.log(programmingIsCool.replace('not',''));

//opdracht 3
//sets number
const compareNumber = 1400;
//sets string
const compareString = 'Ik woon in Naboo';
//a number will never be equal to a string so the output will always be false
console.log(compareNumber == compareString);