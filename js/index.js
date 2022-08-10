let firstCard=Math.ceil(16*Math.random());
let secondCard=Math.ceil(16*Math.random());
let freshCard=Math.ceil(16*Math.random());
let cards=[firstCard,secondCard,freshCard];
let sum = firstCard+secondCard;
let hasBlackJack = false;
const messageEl=document.getElementById("message-el");
const sumEl=document.getElementById("sum-el");
const cardsEl=document.getElementById("cards-el");

function startGame(){
    renderGame();
}
function renderGame(){
    
   
    sumEl.textContent="Sum:"+" "+sum;
    cardsEl.textContent="Cards:" + " " + cards[0] + " , " + cards[1];
    
    
    
    if(sum <=20){
        message ="Do you want to draw a new card?";
    }
    else if(sum === 21){
        message = "You have a Blackjack";
        hasBlackJack=true;
    }
    else{
        message="you loose and are out of the game";
        hasBlackJack=false;
    }

    messageEl.textContent=message;
}

function newCard(){
    console.log("new card");
    sum+=freshCard;

    startGame();
}