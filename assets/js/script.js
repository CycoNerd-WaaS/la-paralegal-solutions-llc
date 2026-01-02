/*****************************************************
 * LA Paralegal Solutions, LLC
 * Professional Paralegal Services Website
 * Copyright 2026, LA Paralegal Solutions, LLC
 * Filename & relative path: /assets/js/script.js
 * Date Created: 2025-12-30
 * Last Modified: 2026-01-01
 * Website Designer: Charley CycoNerd
 *****************************************************/

document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Check for Formspree success redirect
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === '1') {
        const contactForm = document.querySelector(".contact-form");
        if (contactForm) {
            // Create success message
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success-message';
            successMessage.innerHTML = `
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We will respond within 1-2 business days.</p>
            `;
            
            // Replace form with success message
            if (contactForm.parentNode) {
                contactForm.parentNode.replaceChild(successMessage, contactForm);
            }

            
            // Clean up URL (remove ?success=1)
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }

    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]:not(.skip-link)').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Add active class to current nav item based on URL
    let currentPage = window.location.pathname.split("/").pop();
    if (!currentPage) currentPage = "index.html";

    const navLinks = document.querySelectorAll(".main-nav a");
    
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});