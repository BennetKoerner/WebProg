window.addEventListener("load", () => {


    let orderConfirm = document.getElementsByClassName("btn")[0]
    orderConfirm.addEventListener("click", orderConfirmed)

    function orderConfirmed (event) {

        //get the delivery data
        let firstName = document.getElementById("firstName").value
        let lastName = document.getElementById("lastName").value
        let mobileNumber = document.getElementById("mobile").value
        let city = document.getElementById("city").value
        let street = document.getElementById("street").value
        let postCode = document.getElementById("postCode").value
        let extraNote = document.getElementById("extraNote").value

        //get selected radio button
        let radioButtons = document.querySelectorAll('input[name="flexRadioDefault"]')
        let radioLabel = document.getElementsByClassName("form-check-label")
        let payment
        let index=-1
        for (const radioButton of radioButtons) {
            index++
            if (radioButton.checked) {
                payment = radioLabel[index].innerHTML
                localStorage.setItem("ls_payment", payment)
                break
                }
            }

        //safe delivery data in local storage
        localStorage.setItem("ls_firstName", firstName)
        localStorage.setItem("ls_lastName", lastName)
        localStorage.setItem("ls_mobileNumber", mobileNumber)
        localStorage.setItem("ls_city", city)
        localStorage.setItem("ls_street", street)
        localStorage.setItem("ls_postCode", postCode)
        localStorage.setItem("ls_extraNote", extraNote)

        //open order overview
        window.open("Website.html")

        }

    })


