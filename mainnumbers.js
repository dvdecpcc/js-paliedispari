const oddOrEven = prompt('choose: odd or even?');
const usersNumber = parseInt(prompt('enter a number: choose between 1 and 5'));
const minValue = 0;
const maxValue = 5;

let randomNumber = computersChoice(minValue, maxValue);
console.log('computer \'s choice is: ' + randomNumber);

function computersChoice (min, max){
    if(usersNumber >=1 && usersNumber<=5){
        let computerValue = Math.floor(Math.random() * 5 + 1);
        console.log(computerValue);
        return computerValue;
    }

    
}

const result = usersNumber + randomNumber;
console.log(result);


let checkOddEven = evenOrOdd(result);

function evenOrOdd(checkTheSum){
    let sum;
    if(checkTheSum%2 == 0){
        sum = 'even';
    } else{
        sum = 'odd';
    }
    return sum;
}

if(checkOddEven !== usersNumber){
    alert('you lost');
} else{
    alert('you won');
}