let currentAction = 'The greatest evaaaah!';

if (typeof currentAction == 'number') {
    console.log(currentAction + 50);
    console.log(currentAction - 50);
    console.log(currentAction * 50);
    console.log(currentAction / 50);
}

else if (typeof currentAction == 'string') {
    console.log(currentAction.toUpperCase());
    console.log(currentAction.length);
    console.log(currentAction.match(/a/g));
    console.log(currentAction.substring(7, 10));
    console.log(currentAction.charAt(0));
}

else if (typeof currentAction == 'boolean') {
    if (currentAction == true) {
        console.log('TRUTH!');
    }
    else {
        console.log('WRONG!');
    }
}

else {
    console.log('Current action not recognized.');
};

const gewicht = 70;
const lengte = 1.90;
const bmi = Math.round(gewicht / (lengte * lengte)*100)/100;
console.log('Uw BMI is', bmi, '.');

if (bmi < 18.5) {
    console.log('ondergewicht');
    console.log('Laag risico, maar verhoogd risico op andere aandoeningen.');
    alert('You skinny motherfucker!');
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log('normaal gewicht');
    console.log('Gemiddeld risico.');
    alert('BORING!')
}
else if (bmi >= 25 && bmi <= 29.9) {
    console.log('overgewicht');
    console.log('Verhoogd risico.');
    alert('You mildly fat fuck!')
}
else {
    console.log('obesitas');
    console.log('Duidelijk verhoogd risico.');
    alert('You fat fuck!');
};



