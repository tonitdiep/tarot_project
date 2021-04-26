class CardsAdapter {
    constructor() {
        this.cardsUrl = 'http://localhost:3000/cards'
    }

    fetchCards() {
        fetch(this.cardsUrl)
            .then(res => res.json())
            .then(data => data.data.forEach
                (element => {
                // debugger
                let card = new Card(element.attributes)
                card.attachToDom(element)
            }))
    }




    sendPatchRequest(cardId){
        const name = document.getElementById(`update-name-${cardId}`).value
        const meaning_upright = document.getElementById(`update-meaning-upright-${cardId}`).value
        const meaning_reverse = document.getElementById(`update-meaning-reverse-${cardId}`).value
    
        let cardObj = {
            name, 
            meaning_upright,
            meaning_reverse
        }
    
        let configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(cardObj)
        }
    
        fetch(this.cardUrl + `/${cardId}`, configObj)
        .then(res => res.json())
        .then(response => {
            debugger
            let card = Card.all.find(c => c.id == response.element.attributes.id)
            card.updateCardOnDom(response.element.attributes)
        })
        // remove form
    
        let form = document.getElementById(`update-form-${cardId}`)
        form.remove()
    }
    deleteCard(id){

        // remove from db
        let configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }
    
        fetch(this.cardsUrl + `/${id}`, configObj)
        .then(res => res.json())
        .then(json => {
            alert(json.message)
        })
        //remove from front end array
        Card.all = Card.all.filter(c => c.id != id)

        // remove from dom
        let card = document.getElementById(`card-${id}`)
        card.remove()
    }


    // cardForm.reset()
    // const newFormButton = document.getElementById('new-form-btn')        
    // const formContainer = document.getElementById('new-form-container')
    // formContainer.hidden = true
    // newFormButton.hidden = false
    // newFormButton.addEventListener('click', hideBtnLoadForm)

}
