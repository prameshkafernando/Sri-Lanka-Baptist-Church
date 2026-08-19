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
   ACTIVE NAVIGATION  –  Fixed
=============================== */
(function () {
    'use strict';

    const rawSegment =
        window.location.pathname
            .split('/')
            .filter(Boolean)
            .pop() || 'index';

    const currentPage = rawSegment.replace(/\.html$/i, '').toLowerCase();

    /* ── Helper: normalise an href the same way ───────────────────── */
    function normHref(href) {
        if (!href || href === '#' || /^(https?:|mailto:)/.test(href)) return null;
        const seg = href.split('/').filter(Boolean).pop() || 'index';
        return seg.replace(/\.html$/i, '').toLowerCase();
    }

    /* ── Remove all active states ────────────────────────────────── */
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

    /* ── Highlight the matching direct link ───────────────────────── */
    document.querySelectorAll('.nav-links a').forEach(a => {
        if (normHref(a.getAttribute('href')) === currentPage) {
            a.classList.add('active');
        }
    });

    /* ── Helper: find a nav link whose normalised href matches ─────── */
    /* Netlify's Pretty URLs post-processing rewrites hrefs like       */
    /* "about.html" to "/about", so we can't match on the raw href     */
    /* string — normHref() already collapses both forms identically.  */
    function findTrigger(name) {
        let found = null;
        document.querySelectorAll('.nav-links a').forEach(a => {
            if (!found && normHref(a.getAttribute('href')) === name) found = a;
        });
        return found;
    }

    /* ── About Us group ───────────────────────────────────────────── */
    const aboutGroup = ['about', 'history', 'careycollege'];
    if (aboutGroup.includes(currentPage)) {
        const aboutTrigger = findTrigger('about');
        if (aboutTrigger) aboutTrigger.classList.add('active');
    }

    /* ── Churches group ───────────────────────────────────────────── */
    const churchesGroup = ['churches', 'church-profile'];
    if (churchesGroup.includes(currentPage)) {
        const churchesTrigger = findTrigger('churches');
        if (churchesTrigger) churchesTrigger.classList.add('active');
    }

    /* ── Mission Points group ─────────────────────────────────────── */
    const missionPointsGroup = ['mission-points', 'mission-point-profile'];
    if (missionPointsGroup.includes(currentPage)) {
        const missionPointsTrigger = findTrigger('mission-points');
        if (missionPointsTrigger) missionPointsTrigger.classList.add('active');
    }

    /* ── Ministries group ─────────────────────────────────────────── */
    const ministryGroup = ['slbs', 'bypa', 'bwl', 'bmf'];
    if (ministryGroup.includes(currentPage)) {
        // Find the trigger by text content — immune to DOM-order changes
        document.querySelectorAll('.nav-links .dropdown > a').forEach(a => {
            if (a.textContent.trim().toLowerCase().startsWith('ministr')) {
                a.classList.add('active');
            }
        });
    }

})();

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

/* -------- CONTACT FORM -------- */
(function () {
    'use strict';

    /* -------- Donation Amount Preset Buttons -------- */
    const amountBtns  = document.querySelectorAll('.amount-btn');
    const amountInput = document.getElementById('d-amount');

    amountBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            amountBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const val = btn.dataset.amount;
            if (val === 'custom') {
                amountInput.value = '';
                amountInput.focus();
            } else {
                amountInput.value = val;
            }
        });
    });

    /* Allow typing in the amount field to deselect presets */
    amountInput?.addEventListener('input', () => {
        const typed = parseInt(amountInput.value, 10);
        amountBtns.forEach(btn => {
            const preset = parseInt(btn.dataset.amount, 10);
            btn.classList.toggle('active', preset === typed);
        });
    });

    /* -------- General Inquiry Form -------- */
    const generalForm = document.getElementById('generalForm');
    const generalMsg  = document.getElementById('generalMsg');

    generalForm?.addEventListener('submit', (e) => {
        e.preventDefault();

        const name    = document.getElementById('g-name').value.trim();
        const email   = document.getElementById('g-email').value.trim();
        const subject = document.getElementById('g-subject').value;
        const message = document.getElementById('g-message').value.trim();

        if (!name || !email || !subject || !message) {
            showMsg(generalMsg, 'error', 'Please fill in all required fields.');
            return;
        }
        if (!isValidEmail(email)) {
            showMsg(generalMsg, 'error', 'Please enter a valid email address.');
            return;
        }

        /* Replace this block with your backend / FormSubmit / EmailJS call */
        const btn = generalForm.querySelector('.cf-submit');
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
        generalForm.submit();
        setTimeout(() => {
            showMsg(generalMsg, 'success', '✓ Thank you! Your message has been sent. We will be in touch soon.');
            generalForm.reset();
            btn.disabled = false;
            btn.innerHTML = 'Send Message &nbsp;<i class="fas fa-paper-plane"></i>';
        }, 1400);
    });

    /* -------- Donation Form -------- */
    const donationForm = document.getElementById('donationForm');
    const donationMsg  = document.getElementById('donationMsg');

    donationForm?.addEventListener('submit', (e) => {
        e.preventDefault();

        const name    = document.getElementById('d-name').value.trim();
        const email   = document.getElementById('d-email').value.trim();
        const purpose = document.getElementById('d-purpose').value;
        const amount  = document.getElementById('d-amount').value;
        const method  = document.getElementById('d-method').value;

        if (!name || !email || !purpose || !amount || !method) {
            showMsg(donationMsg, 'error', 'Please fill in all required fields.');
            return;
        }
        if (!isValidEmail(email)) {
            showMsg(donationMsg, 'error', 'Please enter a valid email address.');
            return;
        }
        if (parseFloat(amount) <= 0) {
            showMsg(donationMsg, 'error', 'Please enter a valid donation amount.');
            return;
        }

        /* Replace this block with your backend / FormSubmit / EmailJS call */
        const btn = donationForm.querySelector('.cf-submit');
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting…';

        setTimeout(() => {
            showMsg(donationMsg, 'success', '✓ Thank you for your generous support! A confirmation has been sent to your email.');
            donationForm.reset();
            amountBtns.forEach(b => b.classList.remove('active'));
            btn.disabled = false;
            btn.innerHTML = 'Submit Donation <i class="fas fa-heart"></i>';
        }, 1400);
    });

    /* -------- Helpers -------- */
    function showMsg(el, type, text) {
        if (!el) return;
        el.className = 'cf-msg ' + type;
        el.textContent = text;
        setTimeout(() => { el.textContent = ''; el.className = 'cf-msg'; }, 6000);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

})();