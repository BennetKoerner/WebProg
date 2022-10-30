window.addEventListener("load", () => {

    //get all the relevant buttons after loading
    getAddCardItemButtons()
    getTheDeleteItemButtons()
    getQuantityInputs()
    getOrderButton()

    function getAddCardItemButtons() {
        let addCardItemButtons = document.getElementsByClassName("btn")
        console.log(addCardItemButtons)
        for (let i = 0; i < addCardItemButtons.length; i++) {
            let addItemButton = addCardItemButtons[i]
            addItemButton.addEventListener("click", addCardItem)
        }
    }

    function getTheDeleteItemButtons() {
        let deleteCardItemButtons = document.getElementsByClassName("btn-success")
        console.log(deleteCardItemButtons)
        for (let i = 0; i < deleteCardItemButtons.length; i++) {
            let deleteItemButton = deleteCardItemButtons[i]
            deleteItemButton.addEventListener("click", deleteCardItem)
        }
    }

    function getQuantityInputs() {
        let quantityInputs = document.getElementsByClassName("cart-quantity-input")
        for (let i = 0; i < quantityInputs.length; i++) {
            let inputNumber = quantityInputs[i]
            inputNumber.addEventListener("change", quantityChanged)
        }
    }
    
    function getOrderButton() {
        let orderButton = document.getElementsByClassName("order-now")[0]
        console.log(orderButton.innerText)
        orderButton.addEventListener("click", orderButtonClicked)
    }


    function deleteCardItem(event) {
        //get the item which should be deleted
        let buttonClicked = event.target
        //delete the clicked item from the card
        buttonClicked.parentElement.parentElement.parentElement.remove()
        //update the total of the card
        updateTotal()
    }


    function addCardItem(event) {
        //get the item which should be added
        let buttonClicked = event.target
        let shopItem = buttonClicked.parentElement
        let title = shopItem.getElementsByClassName("card-title")[0].innerText
        let price = shopItem.getElementsByClassName("card-text")[0].innerText
        //check if the item typ is already in the card
        let cardItems = document.getElementsByClassName("list-group")[0]
        let cardItemNames = cardItems.getElementsByClassName("d-flex")
        for (let l = 0; l < cardItemNames.length; l++) {
            if (cardItemNames[l].innerText == title) {
                alert("Der Artikel " + title + " ist bereits im Warenkorb.\nDie gewünschte Menge kann im Warenkorb angepasst werden.")
                return
            }
        }
        //add the chosen item in card if it does not exist already
        let listItem = document.createElement("a")
        let listItemContent = `
            <a href="#" class="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
                <div class="d-flex w-100 align-items-center justify-content-between">
                    <strong class="mb-1">${title}</strong>
                </div>
                <div class="col-10 mb-1 small">
                      ${price}&ensp;&nbsp;&nbsp; Menge: &ensp;
                     <input class="cart-quantity-input" type="number" value="1">
                     <div>
                        <button class="btn-success">Löschen</button>
                    </div>
                </div>
            </a>`
        listItem.innerHTML = listItemContent
        cardItems.append(listItem)
        //update the total
        updateTotal()
        //update relevant buttons
        getTheDeleteItemButtons()
        getQuantityInputs()
    }

    function quantityChanged(event) {
        let newInput = event.target
        let price = parseFloat(newInput.parentElement.innerText.replace("Preis:", ""))
        //check input
        if (isNaN(newInput.value) || newInput.value < 1) {
            newInput.value = 1;
        }
        //update the total of the card
        updateTotal()
    }

    function updateTotal() {
        //get the items of the card
        let cardItems = document.getElementsByClassName("list-group")[0]
        //get the price and quantity of the items
        let cardPrices = cardItems.getElementsByClassName("col-10")
        let cardQuantities = cardItems.getElementsByClassName("cart-quantity-input")
        //calculate the total of the card
        let total = 0;
        for (let i = 0; i < cardPrices.length; i++) {
            let price = parseFloat(cardPrices[i].innerText.replace("Preis:", ""))
            let quantity = cardQuantities[i].value
            total += price * quantity
        }
        //set the total of the card
        if (total == 0) {
            document.getElementsByClassName("sum")[0].innerText = "Der Warenkorb ist leer!"
        } 
        else {
            document.getElementsByClassName("sum")[0].innerText = "Gesamtsumme: " + total + "€"
        }

    }
    
    function orderButtonClicked(event) {
        //open delivery data
        window.open("orderForm.html")
    }

    function orderButtonClickedText() {
        //get the order
        let cardItems = document.getElementsByClassName("list-group")[0]
        //get the details of the ordered items
        let cardPrices = cardItems.getElementsByClassName("col-10")
        let cardQuantities = cardItems.getElementsByClassName("cart-quantity-input")
        let cardNames = cardItems.getElementsByClassName("mb-1")
        //create order view
        let order = document.createElement("div")
        let orderContent =`
            <div class="col-4">
                <div class="container">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h1>Bestellung</h1>
                            </div>
                            <div class="flip-card-back">
                                <h1>Order</h1>`
        console.log(cardNames, cardQuantities, cardPrices)
        for (let i = 0; cardPrices.length; i++) {
            orderContent = `orderContent` +  `<p>${cardNames[i]}, Menge:${cardQuantities[i]}</p>`
        }
        orderContent = `orderContent` +
            `<a href="#" class="btn btn-primary">Zubereitung Abgeschlossen</a>
                        </div>
                    </div>
                </div>
            </div>
       </div>`
        //set the order view
        order.innerHTML = orderContent
        let viewOrders = document.getElementsByClassName("row-order")[0]
        viewOrders.append(order)
        //open order view
        window.open("Website.html")
    }


})