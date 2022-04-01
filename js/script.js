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

form.submit(function (event) {
    let fNameVal = $("#form-fname").val();
    let lNameVal = $("#form-lname").val();
    let eMailVal = $("#form-email").val();
    let pWordVal = $("#form-password").val();
    let formValArray = [fNameVal, lNameVal, eMailVal, pWordVal];
    for(i=0; i<formArray.length; i++) {
        if(formValArray[i].length === 0 || formValArray[i].length === 0 && !eMailVal.match(mailFormat)) {
            event.preventDefault();
            formInputElements[i].classList.add("border-red");
            formInputElements[i].classList.add("text-red");
            formImgElements[i].classList.add("inline-block");
            formParElements[i].classList.add("inline-block");
            formParElements[i].parentElement.classList.add("space");
        }
    } 
});