function init(){
    const cardList=document.querySelectorAll('.card');
    const cardArray=Array.from(cardList);

    cardArray.forEach(card) =>
    card.addEventListener('click',function(event){
        cardClick(event.target.classList.contains('card--unread'))
    })
}

function cardClick(boolean){
    if(boolean===true){

    }
}

init()