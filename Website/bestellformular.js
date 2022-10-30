window.addEventListener("load", () => {

    let orderConfirm = document.getElementsByClassName("btn")[0]
    orderConfirm.addEventListener("click", orderConfirmed)

    function orderConfirmed (event) {

        //get the delivery data
        let deliveryData = document.getElementsByClassName("inputBox")[0]
        console.log(deliveryData.getElementsByTagName("input")[0])

        //open order overview
        window.open("Website.html")

    }

})