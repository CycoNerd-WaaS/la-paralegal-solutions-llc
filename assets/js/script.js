/*****************************************************
 * LA Paralegal Solutions, LLC
 * Professional Paralegal Services Website
 * Copyright 2026, LA Paralegal Solutions, LLC
 * Responsive CSS - Mobile-first approach
 * Filename & relative path: /assets/js/script.js
 * Date Created: 2025-12-30
 * Last Modified: 2025-12-31 
 * Website Designer: Charley CycoNerd
 *****************************************************/

// Update footer year automatically
document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Simple form validation feedback (if contact form exists)
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            // For now, just prevent default since there's no backend
            // In production, this would connect to a form handling service
            e.preventDefault();
            
            // Show a simple confirmation
            const submitBtn = contactForm.querySelector(".btn-primary");
            const originalText = submitBtn.textContent;
            submitBtn.textContent = "Message Sent!";
            submitBtn.style.backgroundColor = "#2d5016";
            
            // Reset after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = "";
                contactForm.reset();
            }, 3000);
        });
    }

    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".main-nav a");
    
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});