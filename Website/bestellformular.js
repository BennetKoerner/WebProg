window.addEventListener("load", () => {

    let orderConfirm = document.getElementsByClassName("btn")[0]
    orderConfirm.addEventListener("click", orderConfirmed)

    function getDeliveryData() {
        //get the delivery data
        let firstName = document.getElementById("firstName").value
        let lastName = document.getElementById("lastName").value
        let mobileNumber = document.getElementById("mobile").value
        let city = document.getElementById("city").value
        let street = document.getElementById("street").value
        let postCode = document.getElementById("postCode").value
        let extraNote = document.getElementById("extraNote").value
        //BEZAHLMETHODE MUSS NOCH ERGÄNZT WERDEN!!!
        console.log(firstName, lastName, mobileNumber, city, street, extraNote, postCode,)
    }

    function orderConfirmed (event) {
        //open order overview
        window.open("Website.html")

    }



})