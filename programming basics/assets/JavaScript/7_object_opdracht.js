//opdracht 1
let lapRounds = {
    round1: 55.99,
    round2: 63.00,
    round3: 63.01,
    round4: 54.01,
    round5: 62.79,
    round6: 52.88,
    round7: 53.10,
    round8: 54.12
};
//de namen (keys) zijn hier de round1 t/m round 8.

let array1 = ['a', 'b', 'c'];
array1.forEach(function (element) {
    console.log(element);
});



//opdracht 2 //opdracht 3
const teachers = [
    {
        name: 'Loek',
        profession: 'Teacher',
        brand: 'Linux',
        hoursPerWeek: 50,
        salary: 10000,
        salaryPerHour: Math.round (this.salary/this.hoursPerWeek)
    },
    {
        name: 'Daan',
        profession: 'Teacher',
        brand: 'Arduino',
        hoursPerWeek: 25,
        salary: 10000,
        salaryPerHour: Math.round (this.salary/this.hoursPerWeek)
    },
    {
        name: 'Rimmert',
        profession: 'Teacher',
        brand: 'Apple',
        hoursPerWeek: 5,
        salary: 10000,
        salaryPerHour: Math.round(this.salary/this.hoursPerWeek)
    }
]
teachers.forEach(function (element) {
    console.log(`I have a ${element.profession} named ${element.name} and he likes to work on a ${element.brand} computer. He earns €${element.salaryPerHour} per week.`);
});