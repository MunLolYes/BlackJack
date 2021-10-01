let isAlive = false;
let won = false;
let sum = 0;
let hasBlackJack = false;
//
let credits = 100;
let creditsElement = document.getElementById("credits");
creditsElement.textContent = "Credits: " + credits;
//

let nameElement = document.getElementById("name");

let Name = window.prompt("What name would you like to play as?");
if (Name.length < 10) {
    nameElement.textContent = `Name: ${Name}`
} else {
    nameElement.textContent = `longNamePerson`
}

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 10;
    } else {
        return randomNumber;
    }
}
//
let cardsMsg = document.querySelector('#cards');
let sumMsg = document.querySelector('#sum');
let readyMsg = document.querySelector('#readymsg')
let newCardsbtn = document.querySelector('#newCards-btn');
//
let cards = [];

function startGame() {
    let firstCard = getRandomNumber();
    let secondCard = getRandomNumber();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame();
    creditsElement.textContent = "Credits: " + credits;
}

function renderGame() {
    if (credits > 0) {
         cardsMsg.textContent = "Cards: "
        sumMsg.textContent = "Sum: " + sum
        
        for (let i = 0; i < cards.length; i++) {
           cardsMsg.textContent += cards[i] + " | "
        }
        
        if (sum < 20) {
            credits = credits - 5;
            console.log("Unlucky!");
        } else if ( sum === 21 ) {
            credits = credits + 50;
            console.log("BlackJack!");
            hasBlackJack = true;
        } else if (sum > 20 && sum !== 21) {
            console.log("You lost!");
            isAlive = false;
            credits = credits - 5;
        }  
        creditsElement.textContent = "Credits: " + credits;  
    }
}

function newCards() {
    
    if (isAlive === true && hasBlackJack === false && credits > 0) {
         let card = getRandomNumber();
        
        sum += card;
        cards.push(card);
        
        renderGame();   
        creditsElement.textContent = "Credits: " + credits;
    }
}
