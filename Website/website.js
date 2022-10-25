window.addEventListener("load", () => {

    //get the delete item buttons
    let deleteCardItemButtons = document.getElementsByClassName("btn-success")
    console.log(deleteCardItemButtons)
    for (let i = 0; i < deleteCardItemButtons.length; i++) {
        let deleteItemButton = deleteCardItemButtons[i]
        deleteItemButton.addEventListener("click", deleteCardItem)
    }

    //get the add item buttons
    let addCardItemButtons = document.getElementsByClassName("btn")
    console.log(addCardItemButtons)
    for (let i = 0; i < addCardItemButtons.length; i++) {
        let addItemButton = addCardItemButtons[i]
        addItemButton.addEventListener("click", addCardItem)
    }


    function deleteCardItem(event) {
        //get the total of the card
        let getTotal = document.getElementsByClassName("sum")[0]
        let total = parseFloat(getTotal.innerText.replace("Gesamtsumme:", ""))
        //get the item which should be deleted
        let buttonClicked = event.target
        let price = parseFloat(buttonClicked.parentElement.innerText.replace("Preis:", ""))
        console.log(price)
        //update the total
        total = total - price
        document.getElementsByClassName("sum")[0].innerText = "Gesamtsumme: " + total + "€"
        //delete the clicked item from the card
        buttonClicked.parentElement.parentElement.remove()
    }



    function addCardItem(event) {
        //get the total of the card
        let getTotal = document.getElementsByClassName("sum")[0]
        let total = parseFloat(getTotal.innerText.replace("Gesamtsumme:", ""))
        //get the item which should be added
        let buttonClicked = event.target
        let shopItem = buttonClicked.parentElement
        let title = shopItem.getElementsByClassName("card-title")[0].innerText
        let price = shopItem.getElementsByClassName("card-text")[0].innerText
        console.log(title, price)
        //add the chosen item
        let listItem = document.createElement("a")
        let cardItems = document.getElementsByClassName("list-group")[0]
        let listItemContent =`
            <a href="#" class="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true">
                <div class="d-flex w-100 align-items-center justify-content-between">
                    <strong class="mb-1">${title}</strong>
                    <small>Wed</small>
                </div>
                <div class="col-10 mb-1 small">${price} &ensp;
                    <button class="btn-success">Löschen</button>
                </div>
            </a>`
        listItem.innerHTML = listItemContent
        cardItems.append(listItem)
        //update the total
        let priceFloat = parseFloat(price.replace("Preis:", ""))
        total = total + priceFloat
        document.getElementsByClassName("sum")[0].innerText = "Gesamtsumme: " + total + "€"
        //NEED TO BE FIXED!!!
        let deleteCardItemButtons = document.getElementsByClassName("btn-success")
        console.log(deleteCardItemButtons)
        for (let i = 0; i < deleteCardItemButtons.length; i++) {
            let deleteItemButton = deleteCardItemButtons[i]
            deleteItemButton.addEventListener("click", deleteCardItem)
        }


    }


})





