let me = {
    name: 'Jan de Mul',
    age: 17,
    previousDiploma: 'Havo',
    favorieteVervoersmiddel: {
        name: 'Bike',
        wheelsAmount: 2
    },
    familyNames: [
        'Mark',
        'Peter',
        'Jessy',
        'James'
    ]
};
console.log(me);
console.log(`Mijn favoriete vervoersmiddel is de ${me.favorieteVervoersmiddel.name} en die heeft ${me.favorieteVervoersmiddel.wheelsAmount} wielen.`);
for (let i = 0; i < me.familyNames.length; i++) {
    console.log(me.familyNames[i]);
}
me.familyNames.forEach(function (element) {
    console.log(element);
})

me.hobby = 'Volleybal';
console.log(me);

let test = {
    name: 'Jan',
    41: 18,
    17: 'age',
    true: false,
    trueorfalse: false,
    test: 18,
    'test': 17,
    dirk: 4 + 3,
    grof: {
        tafel: 'bruin',
        stoel: 'groen'
    }
};
console.log(test);
