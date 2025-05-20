let emailInput = document.querySelector(".newsletter-email");
let subscribeBtn = document.querySelector(".newsletter-subscribe");

subscribeBtn.addEventListener("click", function(event) {
    event.preventDefault();
    let email = emailInput.value.trim();

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address with an '@' and a domain.");
        return;
    }

    alert("Thank you for subscribing to our newsletter!");

    emailInput.value = "";
});
