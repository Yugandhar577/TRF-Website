// ========== Admin Login Redirect ==========
document.addEventListener('DOMContentLoaded', function() {
    // Admin form redirect
    const adminForm = document.getElementById('adminForm');
    if (adminForm) {
        adminForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // (Optional: Add validation/authentication logic here)
            window.location.href = "home.html";
        });
    }

    // ========== Newsletter Subscription ==========
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
            // For Bootstrap grid, add a new card dynamically
            const teamGrid = document.querySelector('.row.row-cols-1.row-cols-sm-2.row-cols-md-3.g-4');
            if (teamGrid) {
                const col = document.createElement('div');
                col.className = "col";
                col.innerHTML = `
                    <div class="card bg-secondary bg-opacity-10 border-0 h-100 text-center team-card">
                        <img src="https://raw.githubusercontent.com/The-Robotics-Forum/website-assets/main/team/default.jpg" class="card-img-top mx-auto rounded-circle mt-3" style="width:100px; height:100px; object-fit:cover;" alt="${name}">
                        <div class="card-body">
                            <h5 class="card-title mb-1">${name}</h5>
                            <p class="card-text">${role}</p>
                        </div>
                    </div>
                `;
                teamGrid.appendChild(col);
            }
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
    // 1. About page: Toggle paragraphs or ul on heading click
    $("#about-page .toggle-section h2").click(function () {
        var nextElem = $(this).next();
        if (nextElem.is("ul") || nextElem.is("p")) {
            nextElem.slideToggle();
        }
    });

    // 2. Contact page: FAQ accordion (if using custom, not Bootstrap's)
    $("#contact-page .faq-question").click(function () {
        const answer = $(this).next(".faq-answer");
        if (answer.is(":visible")) {
            answer.slideUp();
        } else {
            $(".faq-answer").slideUp();
            answer.slideDown();
        }
    });
});
