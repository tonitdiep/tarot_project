class SuitsAdapter {
    constructor() {
        this.suitsUrl = 'http://localhost:3000/suits'
    }

    fetchSuits() {
        fetch(this.suitsUrl)
            .then(res => res.json())
            .then(data => data.data.forEach(element => {               
     debugger
                let suit = new Suit({name: element.attributes.name, id: element.id})
// debugger
                suit.attachToDom(element)
 
          
            })) 
                
    }
    




}