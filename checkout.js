// =====================================
// 💳 MEDO BOOK STORE - CHECKOUT
// =====================================

const checkoutForm = document.querySelector(".checkout-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const cardInput = document.querySelector("#card");
const expiryInput = document.querySelector("#expiry");
const cvvInput = document.querySelector("#cvv");


// =====================================
// 💳 Card Number Formatting
// =====================================

cardInput.addEventListener("input", function () {

    let value = this.value.replace(/\D/g, "");

    // الحد الأقصى 16 رقم
    value = value.substring(0, 16);

    // تقسيم الرقم كل 4 أرقام
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");

    this.value = value;
});


// =====================================
// 📅 Expiry Date
// =====================================

expiryInput.addEventListener("input", function () {

    let value = this.value.replace(/\D/g, "");

    value = value.substring(0, 4);

    if (value.length >= 3) {
        value = value.substring(0, 2) + "/" + value.substring(2);
    }

    this.value = value;
});


// =====================================
// 🔢 CVV
// =====================================

cvvInput.addEventListener("input", function () {

    this.value = this.value
        .replace(/\D/g, "")
        .substring(0, 3);

});


// =====================================
// 📝 Form Submit
// =====================================

checkoutForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const address = addressInput.value.trim();
    const city = cityInput.value.trim();
    const card = cardInput.value.replace(/\s/g, "");
    const expiry = expiryInput.value;
    const cvv = cvvInput.value;


    // =================================
    // Check Card
    // =================================

    if (card.length !== 16) {

        alert("Please enter a valid 16-digit card number.");

        cardInput.focus();

        return;
    }


    // =================================
    // Check Expiry
    // =================================

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {

        alert("Please enter the expiry date like MM/YY.");

        expiryInput.focus();

        return;
    }


    // =================================
    // Check CVV
    // =================================

    if (cvv.length !== 3) {

        alert("Please enter a valid 3-digit CVV.");

        cvvInput.focus();

        return;
    }


    // =================================
    // Order Success
    // =================================

    alert(
        `🎉 Order Confirmed!\n\n` +
        `Thank you, ${name}!\n` +
        `Your order has been placed successfully.`
    );


    // تنظيف البيانات
    checkoutForm.reset();


    // الرجوع للمتجر
    window.location.href = "index1.html";

});
