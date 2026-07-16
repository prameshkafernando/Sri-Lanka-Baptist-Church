/* ===========================================
   Sri Lanka Baptist Church
   script.js
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       MOBILE MENU
    =============================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("active");

        });

    }


    /* ===============================
       CLOSE MENU WHEN LINK CLICKED
    =============================== */

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            if (navLinks) {

                navLinks.classList.remove("active");

            }

        });

    });


    /* ===============================
       HERO SWIPER
    =============================== */

    if (document.querySelector(".heroSwiper")) {

        new Swiper(".heroSwiper", {
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false
            },
            effect: "fade",
            fadeEffect: {
                crossFade: true
            }
        });

    }


    /* ===============================
       AOS
    =============================== */

    if (typeof AOS !== "undefined") {

        AOS.init({

            duration: 1000,

            once: true,

            offset: 100

        });

    }


    /* ===============================
       BACK TO TOP BUTTON
    =============================== */

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (!topBtn) return;

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /* ===============================
       ACTIVE NAVIGATION
    =============================== */

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(link => {

        const href = link.getAttribute("href");

        link.classList.remove("active");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });

    // Highlight Ministries when on a ministry page

    const ministryPages = [
        "SLBS.html",
        "BYPA.html",
        "BWL.html",
        "BMF.html"
    ];

    if (ministryPages.includes(currentPage)) {

        const ministryLink = document.querySelector(".dropdown > a");

        if (ministryLink) {

            ministryLink.classList.add("active");

        }

    }

    /* ===============================
       CHURCH SEARCH
    =============================== */

    const churchSearch = document.getElementById("churchSearch");

    if (churchSearch) {

        churchSearch.addEventListener("keyup", function () {

            const value = this.value.toLowerCase();

            const churches = document.querySelectorAll(".church-card");

            churches.forEach(card => {

                if (card.innerText.toLowerCase().includes(value)) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }


    /* ===============================
       GALLERY HOVER
    =============================== */

    document.querySelectorAll(".gallery-grid img").forEach(image => {

        image.addEventListener("mouseenter", () => {

            image.style.transform = "scale(1.04)";

        });

        image.addEventListener("mouseleave", () => {

            image.style.transform = "scale(1)";

        });

    });


    /* ===============================
       CARD HOVER EFFECT
    =============================== */

    const cards = document.querySelectorAll(
        ".member-card, .project-card, .timeline-box, .event-card, .newsletter-card"
    );

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";

            card.style.transition = ".3s";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });


    /* ===============================
       BUTTON RIPPLE EFFECT
    =============================== */

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("click", function (e) {

            const circle = document.createElement("span");

            const diameter = Math.max(this.clientWidth, this.clientHeight);

            circle.style.width = circle.style.height = diameter + "px";

            circle.style.left = e.offsetX - diameter / 2 + "px";

            circle.style.top = e.offsetY - diameter / 2 + "px";

            circle.classList.add("ripple");

            const ripple = this.getElementsByClassName("ripple")[0];

            if (ripple) {

                ripple.remove();

            }

            this.appendChild(circle);

        });

    });

});