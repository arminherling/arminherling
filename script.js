const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");
const navToggle = document.querySelector(".nav-toggle");
const navContainer = document.querySelector(".nav-links");
const langButtons = document.querySelectorAll(".lang-btn");
const i18nElements = document.querySelectorAll("[data-i18n]");
const i18nAriaElements = document.querySelectorAll("[data-i18n-aria-label]");
const pageTitle = document.querySelector("#page-title");
const pageDescription = document.querySelector("#meta-description");
const projectPreviewButtons = document.querySelectorAll(".project-preview-btn");
const projectLightbox = document.querySelector("#project-lightbox");
const projectLightboxImage = document.querySelector(".image-lightbox-image");
const projectLightboxClose = document.querySelector(".image-lightbox-close");

const updateLanguageButtonState = (lang) => {
  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const SUPPORTED_LANGS = ["en", "de"];

const setLanguage = (lang) => {
  const locale = SUPPORTED_LANGS.includes(lang) ? lang : "en";

  i18nElements.forEach((element) => {
    const key = element.dataset.i18n;
    const text = translations[key]?.[locale];
    if (text) {
      element.textContent = text;
    }
  });

  i18nAriaElements.forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    const text = translations[key]?.[locale];
    if (text) {
      element.setAttribute("aria-label", text);
    }
  });

  const docTitle = translations["document.title"]?.[locale];
  if (pageTitle && docTitle) {
    pageTitle.textContent = docTitle;
  }

  const docDesc = translations["document.description"]?.[locale];
  if (pageDescription && docDesc) {
    pageDescription.setAttribute("content", docDesc);
  }

  document.documentElement.lang = locale;
  localStorage.setItem("portfolio-lang", locale);
  updateLanguageButtonState(locale);
};

const closeMobileMenu = () => {
  if (!navContainer || !navToggle) {
    return;
  }

  navContainer.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
};

const activateLink = (id) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("active", isActive);
  });
};

const updateActiveSection = () => {
  if (sections.length === 0) {
    return;
  }

  const topOffset = window.innerWidth <= 860 ? 120 : 80;
  let activeId = sections[0].id;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop - topOffset <= 0) {
      activeId = section.id;
    }
  });

  activateLink(activeId);
};

window.addEventListener("scroll", updateActiveSection, { passive: true });
window.addEventListener("resize", updateActiveSection);
updateActiveSection();

if (navToggle && navContainer) {
  navToggle.addEventListener("click", () => {
    const isOpen = navContainer.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 860) {
        closeMobileMenu();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) {
      closeMobileMenu();
    }
  });
}

if (langButtons.length > 0) {
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedLang = button.dataset.lang || "en";
      setLanguage(selectedLang);
    });
  });

  const savedLang = localStorage.getItem("portfolio-lang");
  const preferredLang = navigator.language.toLowerCase().startsWith("de") ? "de" : "en";
  setLanguage(savedLang || preferredLang);
}

const closeProjectLightbox = () => {
  if (!projectLightbox || !projectLightboxImage) {
    return;
  }

  projectLightbox.hidden = true;
  projectLightbox.setAttribute("aria-hidden", "true");
  projectLightboxImage.setAttribute("src", "");
  projectLightboxImage.setAttribute("alt", "");
};

if (projectPreviewButtons.length > 0 && projectLightbox && projectLightboxImage) {
  projectPreviewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const fullSrc = button.dataset.previewSrc;
      const previewAlt = button.dataset.previewAlt || "Project preview";

      if (!fullSrc) {
        return;
      }

      projectLightboxImage.setAttribute("src", fullSrc);
      projectLightboxImage.setAttribute("alt", previewAlt);
      projectLightbox.hidden = false;
      projectLightbox.setAttribute("aria-hidden", "false");
    });
  });

  if (projectLightboxClose) {
    projectLightboxClose.addEventListener("click", closeProjectLightbox);
  }

  projectLightbox.addEventListener("click", (event) => {
    if (event.target === projectLightbox) {
      closeProjectLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !projectLightbox.hidden) {
      closeProjectLightbox();
    }
  });
}
