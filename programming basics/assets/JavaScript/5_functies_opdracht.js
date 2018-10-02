//opdracht 1
function fibonacci() {
    var i = 0;
    var firstNumber = 1;
    var secondNumber = 0;

    while (i <= 10) {
        var totalNumber = firstNumber + secondNumber;
        var firstNumber = secondNumber;
        var secondNumber = totalNumber;

        console.log(totalNumber);
        i++
    }

}

fibonacci();

//opdracht 2
function countdown() {
    for (let index = 10; index >= 0; index--) {
        console.log(index);
    }
    let date = new Date();
    let year = date.getFullYear();
    console.log(`Happy ${year}`);
}

countdown();

//opdracht 3
//???
