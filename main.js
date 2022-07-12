let word = prompt('inserisci una parola: ');

function palindrome (word){
    const myWord = word.length;
    let check = true;

    for(let x=0; x<myWord/2; x++){
        if(word[x] !== word[myWord - x -1]){
            check = false;
        }
    }
    return check;
}

const result = palindrome(word);
console.log(result);