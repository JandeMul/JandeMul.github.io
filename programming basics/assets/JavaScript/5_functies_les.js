//opdracht 1
function giveMeSomeNiceName(gender) {
    let myNewName = '';
    if (gender == 'male') {
        myNewName = 'Jonny';
    }
    else if (gender == 'female') {
        myNewName = 'Anna';
    }
    else {
        myNewName = 'Geval appart';
    }
    return myNewName;
}
const myName = giveMeSomeNiceName('haaa');
console.log('my new name is:', myName);

//opdracht 2
let pigs = '';
function pig(numberOfPigs) {
    while (numberOfPigs > 0) {
        pigs = pigs + '\u{1F437}';
        numberOfPigs --;
    }
    return pigs;
}

const amountOfPigs = pig(10);
console.log('You have', amountOfPigs, 'pigs.',);

//opdracht 3
var inputNumber = +prompt('number'),
    value = inputNumber,
    total = inputNumber;
while (--value) {
    total *= value;
}
console.log(inputNumber + '! =' + total);

//opdracht 4
function writeASound(animal) {
    let newSound = '';
    if (animal == 'dog') {
        newSound = 'Woof';
    }
    else if (animal == 'fish') {
        newSound = 'Blub';
    }
    else if (animal == 'cat') {
        newSound = 'Meow'
    }
    else {
        newSound = 'This animal is not supported.'
    }
    return newSound;
}
const myAnimal = writeASound('dog');
console.log('This animal makes the following sound:', myAnimal);