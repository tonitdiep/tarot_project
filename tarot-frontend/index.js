// const cardDisplay = document.getElementById('card-display')
// main js where all happens. keep it skinny w/ the help of OOP
const cardsAdapter = new CardsAdapter
const suitsAdapter = new SuitsAdapter
const cardList = document.getElementById('card-list')

document.addEventListener('DOMContentLoaded', () => {  
    // const accordionSelection = document.getElementsByClassName('accordionSelection')
    // accordionSelection.addEventListener('click', handleSelection)
    cardsAdapter.fetchCards();
    
})

    // function handleSelection(event) {
    //     // this.cardsUrl
    //     console.log(event)
  
    // }
// function fetchCards() {
//     fetch('http://127.0.0.1:3000/cards')
//     // fetch('http://localhost:3000/')
//         .then(res => res.json())
//         .then(data)
//             // => console.log(data))
// }


