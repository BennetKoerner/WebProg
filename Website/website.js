

let addCarItemButtons = document.getElementsByClassName("btn-primary")
console.log(addCarItemButtons)


for (let i = 0; i < addCarItemButtons.length; i++) {
    let button = addCarItemButtons[i]
    button.addEventListener("click", function(event) {
        let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.add()
        updateCartTotal()
    })
}

function updateCartTotal() {
    let cardRowContainer = document.getElementsByClassName("row")[0]
    let cards = cartRowContainer.getElementsByClassName("card")
    let total = 0;
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i]
        let priceElement = card.getElementsByClassName("card-tex")[0]
        let price = parseFloat(priceElement.innerText.replace("€", ""))
        price = price.innerText.replace("Preis: ", " ")
    }
    document.getElementsByClassName("fw-semibold")[0].innerText = total + "€"
}

