/* EVO — Concept 1: Confident Enterprise — shared behaviour */
(function () {
  "use strict";

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Pricing billing toggle (monthly / annual) */
  var billingButtons = document.querySelectorAll("[data-billing]");
  if (billingButtons.length) {
    billingButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var mode = btn.getAttribute("data-billing");
        billingButtons.forEach(function (b) {
          b.classList.toggle("active", b === btn);
        });
        document.querySelectorAll("[data-price-monthly]").forEach(function (el) {
          var value = mode === "annual" ? el.getAttribute("data-price-annual") : el.getAttribute("data-price-monthly");
          el.textContent = value;
        });
        document.querySelectorAll(".price-period-label").forEach(function (el) {
          el.textContent = mode === "annual" ? "/property/mo, billed annually" : "/property/mo, billed monthly";
        });
      });
    });
  }

  /* Contact form — static demo submit */
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var success = document.getElementById("form-success");
      if (success) {
        success.classList.add("show");
        success.setAttribute("role", "status");
      }
      contactForm.reset();
    });
  }

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
