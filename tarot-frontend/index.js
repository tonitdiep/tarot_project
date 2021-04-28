const cardsAdapter = new CardsAdapter
const suitsAdapter = new SuitsAdapter
const cardList = document.getElementById('card-list')
const cardForm = document.getElementById('card-form')

const searchBtn = document.getElementById('search-btn')
const searchCards= document.getElementById("search-cards")
const clickBtn = document.getElementById("click-btn")

document.addEventListener('DOMContentLoaded', () => {  

    cardsAdapter.fetchCards();
    suitsAdapter.fetchSuits();
// add enter event listener / call function 17
    searchBtn.addEventListener('click', searchClick)
})

// call event listener 

// function  refereence CARD
 searchClick = (e) => {
    console.log(this)
    Card.all.map((card) => card.suit_id == this.id);
 

    document.getElementById('card-form').innerText=`${this.name}`
    // return this.searchBtn;

}