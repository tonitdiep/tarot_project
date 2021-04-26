class CardsAdapter {
    constructor() {
        this.cardsUrl = 'http://localhost:3000/cards'
    }

    fetchCards() {
        fetch(this.cardsUrl)
            .then(res => res.json())
            .then(data => data.data.forEach
                (element => {
            
                let card = new Card(element.attributes)
                card.attachToDom(element)
            }))
    }


    deleteCard(id){
  
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
        });
   
        Card.all = Card.all.filter(c => c.id != id);

     
        let card = document.getElementById(`card-${id}`);
        card.remove();
    }


  

}
