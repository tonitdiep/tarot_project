// const cardDisplay = document.getElementById('card-display')
// main js where all happens. keep it skinny w/ the help of OOP
const cardsAdapter = new CardsAdapter
const suitsAdapter = new SuitsAdapter
// const cardList = document.getElementById('card-list')

document.addEventListener('DOMContentLoaded', () => {  
    // const accordionSelection = document.getElementsByClassName('accordionSelection')
    // accordionSelection.addEventListener('click', handleSelection)
    cardsAdapter.fetchCards();
    suitsAdapter.fetchSuits();
    
})

    // function handleSelection(event) {
    //     // this.cardsUrl
    //     console.log(event)
  
    // }


