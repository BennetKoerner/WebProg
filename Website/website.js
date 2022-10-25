window.addEventListener("load", () => {

    //get the delete buttons
    let deleteCardItemButtons = document.getElementsByClassName("btn-success")
    console.log(deleteCardItemButtons)
    for (let i = 0; i < deleteCardItemButtons.length; i++) {
        let button = deleteCardItemButtons[i]
        button.addEventListener("click", deleteCardItem)
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


})





