
// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// input: array
// utput: true if the array has duplicates
function hasDuplicates(arr) {
    return arr.some(x => arr.indexOf(x) !== arr.lastIndexOf(x));
}

// input: array of numbers
// output: a string with the numbers list
function printListOfNumbers(arrayOfNumbers) {

    let stringListNumbers = "";

    for (let i = 0; i < arrayOfNumbers.length; i++) {
    
        stringListNumbers += `${arrayOfNumbers[i]}`;
    
        if ( i != (arrayOfNumbers.length - 1) ) {
            stringListNumbers += ` - `;
        }
    }
    
    return stringListNumbers;
}



let listNumbers = [];

// add 5 random numbers to the list
while ( listNumbers.length < 5 ) {
    let num = Math.floor(Math.random() * 100) + 1;

    if ( !listNumbers.includes(num) ) {
        listNumbers.push(num);
    }
}

alert(printListOfNumbers(listNumbers));


let listUserNumbers = [];

setTimeout( 
    function() {
        let scoreCount = [];

        // save the 5 numbers of the user
        for (let i = 0; i < listNumbers.length; i++) {
            listUserNumbers.push( parseInt(prompt(`inserisci uno alla volta i numeri che hai visto`)) );

            if ( listNumbers.includes(listUserNumbers[i]) ) {
                scoreCount.push(listUserNumbers[i]);
            }
        }

        // check if the user has add a number twice
        if ( hasDuplicates(scoreCount) ) {
            alert(`Errore, hai inserito più volte lo stesso numero`);
            return;
        } 

        // print the score 
        if ( scoreCount.length == listNumbers.length ) {
            alert(`Bravo!!, hai indovinato tutti i numeri`);

        } else if ( scoreCount.length == 0 ) {
            alert(`Non hai indovinato nessun numero :(`);

        } else {
            alert(`hai indovinato ${scoreCount.length} numeri: ( ${printListOfNumbers(scoreCount)} )`);
        }
    }
,1000 * 0 );

