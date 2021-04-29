const cardsAdapter = new CardsAdapter
const suitsAdapter = new SuitsAdapter
const cardList = document.getElementById('card-list')
const cardForm = document.getElementById('card-form')

const searchContainer = document.getElementById('search-container')
const searchInput= document.getElementById("searchInput")

document.addEventListener('DOMContentLoaded', () => {  
    cardsAdapter.fetchCards();
    suitsAdapter.fetchSuits();
// add enter event listener / call function 17
    searchInput.addEventListener('click', this.searchClick)
})



// call event listener & function  reference CARD
 searchClick = (e) => {
//need Card.all and .attachToDom();
    console.log(this)
    Card.all.append(this.searchClick)
    Card = []
    Card.all
    Card.attachToDom() 
    // Card.all.find((card) => card.id == id);

    // const cardList = document.getElementById('card-list')
    // const searchContainer = document.getElementById('search-container')
    // const searchInput= document.getElementById("searchInput")

    // Card.all.filter  
    // this.cardList
        //return this.searchCards
        // return this.searchBtn;

}