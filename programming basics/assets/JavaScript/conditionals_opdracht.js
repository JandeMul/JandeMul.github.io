//opdracht 1
const cijfer = 8;
console.log(cijfer);

if (cijfer < 6) {
    console.log('YOU SHAL NOT PASS! (onvoldoende).');
}

else if (cijfer >= 6 && cijfer <= 7) {
    console.log('Voldoende.');
}

else if (cijfer >= 7 && cijfer <= 9) {
    console.log('Goed.');
}

else {
    console.log('Uitmuntend.');
}

//opdracht 2
const cijfer2 = 10
console.log(cijfer2);
switch (cijfer2) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('YOU SHAL NOT PASS! (onvoldoende).');
        break;
    case 5:
    case 6:
        console.log('Voldoende.');
        break;
    case 7:
    case 8:
    case 9:
        console.log('Goed.');
        break;
    default:
        console.log('Uitmuntend.');
}

//opdracht 3
purchasedBook = true;
job = 'teacher';
inTrain = true;

if (purchasedBook == true && inTrain == true && job == 'teacher') {
    console.log('Finally i can enjoy my book.');    
}

else {
    console.log('Helaas, misschien later?');
}

