
    let addCardItemButtons = document.getElementsByClassName("btn btn-primary")
    console.log(addCardItemButtons)
    for (let i = 0; i < addCardItemButtons.length; i++) {
        let button = addCardItemButtons[i]
        button.addEventListener("click", addCardItem)
    }


    function addCardItem(event) {
        let buttonClicked = event.target
        buttonClicked.get.add()
        updateCartTotal()
    }

    function updateCartTotal() {
        let cardRowContainer = document.getElementsByClassName("row")[0]
        let cards = cardRowContainer.getElementsByClassName("card")
        let total = 0;
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i]
            let priceElement = card.getElementsByClassName("card-tex")[0]
            let price = parseFloat(priceElement.innerText.replace("€", ""))
            price = price.innerText.replace("Preis: ", " ")
        }
        document.getElementsByClassName("fw-semibold")[0].innerText = total + "€"
    }



