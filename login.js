let fname = document.querySelector("#fname");
let fmessage = document.querySelector(".fmessage");

fname.addEventListener("input", () => {
    let value = fname.value;
    let wordRegex = /^[A-Z][a-z]{2,10}\s[A-Za-z]{2,10}$/;

    if (wordRegex.test(value)) {
        fmessage.innerHTML = `<span class="valid"><i class="fa-regular fa-circle-check"></i> Valid Name</span>`;
    } else {
        fmessage.innerHTML = `
            <span class="noValid"><i class="fa-regular fa-circle-xmark"></i> Must start with capital letter</span><br>
            <span class="noValid"><i class="fa-regular fa-circle-xmark"></i> Only letters</span><br>
            <span class="noValid"><i class="fa-regular fa-circle-xmark"></i> More than 2 letters</span>
        `;
    }
});


let phone = document.querySelector("#phone");
let phoneMsg = document.querySelector(".phonenum");

phone.addEventListener("input", () => {
    let regex = /^(01)[0125]\d{8}$/;

    if (regex.test(phone.value)) {
        phoneMsg.innerHTML = `<span class="valid"><i class="fa-regular fa-circle-check"></i> Valid phone number</span>`;
    } else {
        phoneMsg.innerHTML = `<span class="noValid"><i class="fa-regular fa-circle-xmark"></i> Phone must be 11 digits and start with 010/011/012/015</span>`;
    }
});



let email = document.querySelector("#email");
let emailMsg = document.querySelector(".email");

email.addEventListener("input", () => {
    let regex = /^[a-z]\w{2,30}@gmail\.com$/;

    if (regex.test(email.value)) {
        emailMsg.innerHTML = `<span class="valid"><i class="fa-regular fa-circle-check"></i> Valid email</span>`;
    } else {
        emailMsg.innerHTML = `<span class="noValid"><i class="fa-regular fa-circle-xmark"></i> Email must be gmail and start with small letter</span>`;
    }
});

let password = document.querySelector("#password");
let passMsg = document.querySelector(".pass");

password.addEventListener("input", () => {
    let passRegex = /^[A-Za-z\d]{8,}$/;

    if (passRegex.test(password.value)) {
        passMsg.innerHTML = `<span class="valid"><i class="fa-regular fa-circle-check"></i> Strong password</span>`;
    } else {
        passMsg.innerHTML = `<span class="noValid"><i class="fa-regular fa-circle-xmark"></i>more than 7</span>`;
    }
});

let confirm = document.querySelector("#confirm");
let confirmMsg = document.querySelector(".confpass");

confirm.addEventListener("input", () => {
    if (confirm.value === password.value && confirm.value !== "") {
        confirmMsg.innerHTML = `<span class="valid"><i class="fa-regular fa-circle-check"></i> Password matched</span>`;
    } else {
        confirmMsg.innerHTML = `<span class="noValid"><i class="fa-regular fa-circle-xmark"></i> not matched</span>`;
    }
});


let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let fnameValid = /^[A-Z][a-z]{2,10}$/.test(fname.value);
    let lnameValid = /^[A-Z][a-z]{2,10}$/.test(lname.value);
    let phoneValid = /^(01)[0125]\d{8}$/.test(phone.value);
    let emailValid = /^[a-z]\w{2,30}@gmail\.com$/.test(email.value);
    let passwordValid = /^[A-Za-z\d]{8}$/.test(password.value);
    let birthValid = birth.value !== "";
    let confirmValid = confirm.value === password.value && confirm.value !== "";

    if (
        fnameValid &&
        lnameValid &&
        phoneValid &&
        emailValid &&
        passwordValid &&
        birthValid &&
        confirmValid
    ) {
        window.location.href = "./index.html";
    }
});