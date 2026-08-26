/**
 * Impresa Edile La Martina — Interazioni e animazioni
 * Sostituisce Framer Motion con CSS + Intersection Observer (vanilla JS)
 */

(function () {
  "use strict";

  /* Hero entrance on load */
  function initHeroAnimations() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll(".animate-on-load");

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("is-loaded"));
      return;
    }

    requestAnimationFrame(() => {
      elements.forEach((el) => el.classList.add("is-loaded"));
    });
  }

  /* Scroll reveal */
  function initScrollReveal() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll(".reveal");

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
  }

  /* Services catalog filter */
  function initServicesFilter() {
    const catalog = document.querySelector(".services-catalog");
    if (!catalog) return;

    const tabs = catalog.querySelectorAll("[data-service-tab]");
    const panels = catalog.querySelectorAll("[data-service-panel]");
    const panelsWrap = catalog.querySelector(".services-catalog__panels");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function setActiveTab(activeTab) {
      const category = activeTab.dataset.serviceTab;
      const isAll = category === "all";

      tabs.forEach((tab) => {
        const isActive = tab === activeTab;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      panelsWrap?.classList.toggle("is-focus-view", !isAll);

      panels.forEach((panel) => {
        const categories = panel.dataset.servicePanel.split(/\s+/);
        const show = isAll || categories.includes(category);
        panel.classList.toggle("is-hidden", !show);
        if (show) {
          panel.classList.remove("is-filtered-in");
          void panel.offsetWidth;
          panel.classList.add("is-filtered-in");
        }
      });
    }

    function activateService(category, options = {}) {
      const { scroll = true, updateHash = true } = options;
      const tab = catalog.querySelector(`[data-service-tab="${category}"]`);
      if (!tab || category === "all") return;

      setActiveTab(tab);

      if (updateHash) {
        history.replaceState(null, "", `#servizi-${category}`);
      }

      if (scroll) {
        const target = document.getElementById(`servizi-${category}`);
        if (!target) return;

        requestAnimationFrame(() => {
          target.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
            block: "start",
          });
        });
      }
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const category = tab.dataset.serviceTab;
        if (category === "all") {
          setActiveTab(tab);
          history.replaceState(null, "", "#servizi");
          return;
        }
        activateService(category, { scroll: false, updateHash: true });
      });
    });

    document.querySelectorAll("[data-service-link]").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        activateService(link.dataset.serviceLink);
      });
    });

    function initFromHash() {
      const match = window.location.hash.match(/^#servizi-([a-z]+)$/);
      if (!match) return;
      activateService(match[1], { scroll: true, updateHash: false });
    }

    initFromHash();
    window.addEventListener("hashchange", initFromHash);
  }

  /* Contact form → Google Sheet (via Apps Script)
   * Dopo la distribuzione Apps Script, incolla qui l’URL /exec */
  const CONTACT_FORM_ENDPOINT =
    "https://script.google.com/macros/s/AKfycbzo09fvKU_s7aKQrAycUkCmB0F4d6ABSJeWXsgFgxNnLyDHARf4tLXc_Oa6mjdKtiUz/exec";

  function initContactForm() {
    const form = document.getElementById("contact-form");
    const successEl = document.getElementById("form-success");
    const errorEl = document.getElementById("form-error");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector(".btn-submit");
      const privacyCheckbox = form.querySelector("#privacy");
      const serviceSelect = form.querySelector("#service");

      successEl?.classList.remove("is-visible");
      errorEl?.classList.remove("is-visible");

      if (!privacyCheckbox?.checked) {
        privacyCheckbox?.focus();
        return;
      }

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      if (!CONTACT_FORM_ENDPOINT) {
        errorEl?.classList.add("is-visible");
        errorEl?.setAttribute("tabindex", "-1");
        errorEl?.focus();
        return;
      }

      const serviceLabel =
        serviceSelect?.selectedOptions?.[0]?.text?.trim() ||
        serviceSelect?.value ||
        "";

      const payload = new URLSearchParams({
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        company: form.company.value.trim(),
        service: serviceLabel,
        message: form.message.value.trim(),
      });

      submitBtn.classList.add("is-loading");
      submitBtn.disabled = true;

      try {
        await fetch(CONTACT_FORM_ENDPOINT, {
          method: "POST",
          body: payload,
          redirect: "follow",
        });

        form.reset();
        if (serviceSelect) {
          serviceSelect.value = "ristrutturazione";
        }
        successEl?.classList.add("is-visible");
        successEl?.setAttribute("tabindex", "-1");
        successEl?.focus();

        setTimeout(() => {
          successEl?.classList.remove("is-visible");
        }, 6000);
      } catch (err) {
        errorEl?.classList.add("is-visible");
        errorEl?.setAttribute("tabindex", "-1");
        errorEl?.focus();
      } finally {
        submitBtn.classList.remove("is-loading");
        submitBtn.disabled = false;
      }
    });
  }

  /* Init */
  document.addEventListener("DOMContentLoaded", () => {
    initHeroAnimations();
    initScrollReveal();
    initServicesFilter();
    initContactForm();
  });
})();
