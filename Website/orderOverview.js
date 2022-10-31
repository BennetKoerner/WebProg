window.addEventListener("load", () => {

    //import  getDeliveryData  from "./bestellformular.js";
    //getDeliveryData()
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


})