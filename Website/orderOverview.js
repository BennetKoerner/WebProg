window.addEventListener("load", () => {

        //get delivery data out of the local storage
        let firstName = localStorage.getItem("ls_firstName")
        let lastName = localStorage.getItem("ls_lastName")
        let mobileNumber = localStorage.getItem("ls_mobileNumber")
        let city = localStorage.getItem("ls_city")
        let street = localStorage.getItem("ls_street")
        let postCode = localStorage.getItem("ls_postCode")
        let extraNote = localStorage.getItem("ls_extraNote")
        console.log(firstName, lastName, mobileNumber, city, street, postCode, extraNote)

        //create new orderOverview Element
        let rowOrder = document.getElementsByClassName("row-order")[0]
        let orderAmount = rowOrder.getElementsByClassName("col-4").length
        let order = document.createElement("div")

        //create start of order element
        let orderContentStart = `
                        <div class="col-4">
                            <div class="container">
                                <div class="flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <h1>Bestellung</h1>
                                            <div class="deliveryDate">
                                                <p>Name: ${firstName} ${lastName}</p>
                                                <p>Adresse: ${city} ${postCode}, ${street}</p>
                                                <p>Telefon: ${mobileNumber}</p>
                                                <p>Hinweise: ${extraNote}</p>
                                                <p>Zahlungsmethode: Paypal</p>
                                            </div>
                                        </div>
                                    <div class="flip-card-back">
                                        <h1>Bestellung</h1>
                                        `

        //add order details to order element
        let amountOfDifferentItemsString = localStorage.getItem("ls_amountOfDifferentItems")
        let amountOfDifferentItems = parseFloat(amountOfDifferentItemsString)
        console.log(amountOfDifferentItems)
        let orderContent = ""
        let contentStorage = ""
        for (let i = 0; i < amountOfDifferentItems; i++) {
            let itemName = localStorage.getItem("ls_name" + [i])
            let quantity = localStorage.getItem(("ls_quantity" + [i]))
            console.log(itemName, quantity)
            let orderDetails = `
                                        <p>${itemName}, Menge: ${quantity}</p>
                                     `
            if (i == 0) {
                contentStorage = orderDetails
            } else {
                orderContent = contentStorage.concat(orderDetails)
                contentStorage = orderContent
            }
            if (amountOfDifferentItems == 1) {
                orderContent = contentStorage
            }
        }
        let orderView = orderContentStart.concat(orderContent)

        //create end of order element
        let sum = localStorage.getItem("ls_sum")
        let orderContentEnd = `            
                                        <p><b>${sum}</b></p>      
                                        <a href="#" class="btn btn-primary">Zubereitung Abgeschlossen</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`

        //creat final order element
        let finalContent = orderView.concat(orderContentEnd)

        //set the order view
        order.innerHTML = finalContent
        let viewOrders = document.getElementsByClassName("row-order")[0]
        viewOrders.append(order)

        //delete local storage
        localStorage.clear()




    })