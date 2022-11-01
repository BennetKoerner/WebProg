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
    let order = document.createElement("div")
    let orderContent =`
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
                            <p>Zahlungsmethode:</p>
                        </div>
                    </div>
                    <div class="flip-card-back">
                        <h1>Order</h1>
                        <p>Hamburger, Menge: 12</p>
                        <p>Cheeseburger, Menge: 2</p>
                        <a href="#" class="btn btn-primary">Zubereitung Abgeschlossen</a>
                    </div>
                </div>
            </div>
        </div>
    </div>`

    //set the order view
    order.innerHTML = orderContent
    let viewOrders = document.getElementsByClassName("row-order")[0]
    viewOrders.append(order)

    //delete local storage
    localStorage.clear()


})