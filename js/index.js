let firstCard=randomNo();
let secondCard=randomNo();
let cards=[];
let sum = 0;
let hasBlackJack = false;
let isAlive=false;
let info={
    playerName:"Per",
    playerChips:145
}

const messageEl=document.getElementById("message-el");
const sumEl=document.getElementById("sum-el");
const cardsEl=document.getElementById("cards-el");
const playerEl=document.getElementById("player-el");

playerEl.textContent=info.playerName + ": $" + info.playerChips;

function startGame(){
    isAlive=true;
    cards=[firstCard,secondCard]; 
    sum=firstCard+secondCard;
     
    if(cards==[]){
    renderGame();
    }
 
}

function randomNo(){
    let randomNumber=Math.ceil(16*Math.random());

    if (randomNumber>10){
        return 10;
    }
    else if(randomNumber===1){
        return 11;
    }
    else{
        return randomNumber;
    }
}

function renderGame(){
   
    cardsEl.textContent="Cards:";
    

    for (let i=0; i<(cards.length); i++){
         cardsEl.textContent+=cards[i]+" ";
     }
    
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
        isAlive=false;
    }

    messageEl.textContent=message;
}

function newCard(){

    if (isAlive===true && hasBlackJack===false){
    let freshCard=randomNo();
    console.log("new card");
    sum+=freshCard;
    cards.push(freshCard);

    renderGame();
    }
}