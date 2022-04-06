const form = $("form");
const formParElements = $(".form-input-container").children("p");
const formImgElements = $(".form-input-container").children("img");
const formInputElements = $(".form-input-container").children("input");
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const fName = $("#form-fname");
const lName = $("#form-lname");
const eMail = $("#form-email");
const pWord = $("#form-password");
const formArray = [fName, lName, eMail, pWord];

function errorMessageFunction(num) {
    event.preventDefault();
    formInputElements[num].classList.add("border-red");
    formImgElements[num].classList.add("inline-block");
    formParElements[num].classList.add("inline-block");
    formParElements[num].parentElement.classList.add("space");
}

form.submit(function () {
    let fNameVal = $("#form-fname").val();
    let lNameVal = $("#form-lname").val();
    let eMailVal = $("#form-email").val();
    let pWordVal = $("#form-password").val();
    let formValArray = [fNameVal, lNameVal, eMailVal, pWordVal];
    for(let i=0; i<formArray.length; i++) {
        if(formValArray[i].length === 0 || formValArray[i].length === 0 && !eMailVal.match(mailFormat)) {
            errorMessageFunction(i);
        }
    }
    if(!eMailVal.match(mailFormat)) {
        errorMessageFunction(2);
        eMail.css("color", "red");
    }
});