const cardsAdapter = new CardsAdapter
const suitsAdapter = new SuitsAdapter
const cardList = document.getElementById('card-list')
const cardForm = document.getElementById('card-form')

const searchContainer = document.getElementById('search-container')
// const searchInput= document.getElementById("searchInput")

document.addEventListener('DOMContentLoaded', () => {  
    cardsAdapter.fetchCards();
    suitsAdapter.fetchSuits();
// add enter event listener / call function 17
   const searchInput = document.getElementById("searchSubmit") 
   searchInput.addEventListener('click', this.searchClick)
    debugger

 
})



// call event listener & function  reference CARD
 searchClick = (e) => {
//need Card.all and .attachToDom()
    let search = document.getElementById('searchInput').value
    const filteredCards = Card.all.filter(c => c.name === search)
    debugger
    
//    c.name === searchInput.value
    filteredCards.innerHTML = ""
    return filteredCards.forEach(card => {
        card.attachToDom();
    })


}