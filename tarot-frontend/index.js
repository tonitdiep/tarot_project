const cardDisplay = document.getElementById('card-display')

function fetchCards() {
    fetch('http://localhost:3000')
    .then(res => res.json())
    .then(data => console.log(data))
}

document.addEventListener('DOMContentLoaded', () => {
    fetchCards()
})

