// admin.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('adminForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // (Optional: Add validation/authentication logic here)
        window.location.href = "home.html";
    });
});


// ========== Newsletter Subscription ==========

document.addEventListener("DOMContentLoaded", function () {
    // Newsletter form validation and submission
    const emailInput = document.querySelector(".newsletter-email");
    const subscribeBtn = document.querySelector(".newsletter-subscribe");

    if (subscribeBtn && emailInput) {
        subscribeBtn.addEventListener("click", function (event) {
            event.preventDefault();
            const email = emailInput.value.trim();

            if (!email.includes("@") || !email.includes(".")) {
                alert("Please enter a valid email address with an '@' and a domain.");
                return;
            }

            alert("Thank you for subscribing to our newsletter!");
            emailInput.value = "";
            const nameInput = document.getElementById("newsletter-username");
            if (nameInput) nameInput.value = "";
        });
    }

    // ========== Add Member (Team Page) ==========
    window.addMember = function () {
        const name = document.getElementById('member-name').value.trim();
        const role = document.getElementById('member-role').value.trim();
        if (name && role) {
            const table = document.getElementById('members-table').getElementsByTagName('tbody')[0];
            const newRow = table.insertRow();
            newRow.insertCell(0).innerText = name;
            newRow.insertCell(1).innerText = role;
            document.getElementById('member-name').value = '';
            document.getElementById('member-role').value = '';
        } else {
            alert('Please enter both name and role.');
        }
    };

    // ========== Inquiry Form ==========
    const inquiryForm = document.getElementById("inquiry-form");
    if (inquiryForm) {
        inquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = "robotics.forum@vit.edu";
            const subject = encodeURIComponent(document.getElementById("inquiry-subject").value);
            const body = encodeURIComponent(document.getElementById("inquiry-body").value);
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
            window.open(gmailUrl, "_blank");
        });
    }
});

// ========== jQuery Features ==========
$(document).ready(function () {
    // 1. About page: Toggle paragraphs on heading click
    $("#about-page .toggle-section h2").click(function () {
    var nextElem = $(this).next();
    if (nextElem.is("ul") || nextElem.is("p")) {
        nextElem.slideToggle();
    }
    });

    // 2. Contact page: FAQ accordion
    $("#contact-page .faq-question").click(function () {
        const answer = $(this).next(".faq-answer");
        if (answer.is(":visible")) {
            answer.slideUp();
        } else {
            // Close others
            $(".faq-answer").slideUp();
            answer.slideDown();
        }
    });
});
