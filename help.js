// ================================
// 🆘 MEDO BOOK STORE - HELP
// ================================

// FAQ Items
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector("h3");
    const answer = item.querySelector("p");

    // نخفي الإجابة في البداية
    answer.style.display = "none";

    question.style.cursor = "pointer";

    question.addEventListener("click", () => {

        if (answer.style.display === "none") {

            answer.style.display = "block";

        } else {

            answer.style.display = "none";

        }

    });

});


// =================================
// 📩 Contact Form
// =================================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event) {

    // يمنع الصفحة من الانتقال لـ 1.html مباشرة
    event.preventDefault();

    const name = contactForm
        .querySelector('input[type="text"]')
        .value.trim();

    const email = contactForm
        .querySelector('input[type="email"]')
        .value.trim();

    const message = contactForm
        .querySelector("textarea")
        .value.trim();


    if (!name || !email || !message) {

        alert("Please fill in all fields.");

        return;
    }


    // رسالة نجاح
    alert(
        `Thank you, ${name}! 📚\n\nYour message has been sent successfully.`
    );


    // تفريغ الفورم
    contactForm.reset();

});