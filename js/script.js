const form = $("form");
const formParElements = $(".form-input-container").children("p");
const formImgElements = $(".form-input-container").children("img");
const formInputElements = $(".form-input-container").children("input");
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const fName = $("#form-fname");
const lName = $("#form-lname");
const eMail = $("#form-email");
const pWord = $("#form-password");

function errorMessageFunction(num) {
    formInputElements[num].classList.add("border-red");
    formImgElements[num].classList.add("inline-block");
    formParElements[num].classList.add("inline-block");
    formParElements[num].parentElement.classList.add("space");
}

function successMessageFunction(num) {
    formInputElements[num].classList.remove("border-red");
    formImgElements[num].classList.remove("inline-block");
    formParElements[num].classList.remove("inline-block");
    formParElements[num].parentElement.classList.remove("space");
}

form.submit(function (event) {
    event.preventDefault();
    let fNameVal = fName.val();
    let lNameVal = lName.val();
    let eMailVal = eMail.val();
    let pWordVal = pWord.val();
    let formValArray = [fNameVal, lNameVal, eMailVal, pWordVal];
    for (let i = 0; i < formValArray.length; i++) {
        if (formValArray[i].length === 0 || formValArray[i].length === 0 && !eMailVal.match(mailFormat)) {
            errorMessageFunction(i);
        } else if (formValArray[i].length > 0 || formValArray[i].length > 0 && eMailVal.match(mailFormat)) {
            successMessageFunction(i)
        }
        if (!eMailVal.match(mailFormat)) {
            errorMessageFunction(2);
            eMail.css("color", "red");
        } else if (eMailVal.match(mailFormat)) {
            successMessageFunction(2);
            eMail.css("color", "black");
        }
        if (i === 3 && fNameVal.length > 0 && lNameVal.length > 0 && eMailVal.match(mailFormat) && pWordVal.length > 0) {
            setTimeout(function () {
                alert("Your information has been successfully submitted!");
                location.reload();
            }, 500);
        }
    }
});