let firstCard=Math.ceil(16*Math.random());
let secondCard=Math.ceil(16*Math.random());
let freshCard=Math.ceil(16*Math.random());
let cards=[firstCard,secondCard];
let sum = firstCard+secondCard;
let hasBlackJack = false;
const messageEl=document.getElementById("message-el");
const sumEl=document.getElementById("sum-el");
const cardsEl=document.getElementById("cards-el");

function startGame(){
    renderGame();
}
function renderGame(){
    
   
    
    cardsEl.textContent="Cards:"+" "+cards[i];
    

    // for (let i=0; i>(cards.length-1); i++){
    //     console.log(cards[i]);

    // }
    sumEl.textContent="Sum:"+" "+sum;

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
    cards.push(freshCard);

    startGame();
}