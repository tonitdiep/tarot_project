// js classes like backend classes (replication)
class Suit {
    static all = []
    constructor({id, name}) {
           //setting the properites of each item
        this.name = name
        this.id = id
     
        Suit.all.push(this)
    }

     
}