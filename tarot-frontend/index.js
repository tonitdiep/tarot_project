const cardsAdapter = new CardsAdapter
const suitsAdapter = new SuitsAdapter
const cardList = document.getElementById('card-list')
const cardForm = document.getElementById('card-form')



document.addEventListener('DOMContentLoaded', () => {  

    cardsAdapter.fetchCards();
    suitsAdapter.fetchSuits();

})


