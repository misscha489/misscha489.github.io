document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector("#lang-toggle");
  const dropdown = document.querySelector("#lang-dropdown");

  // Get current language from the path
  const currentLang = window.location.pathname.split("/")[1];
  const supportedLangs = ["en", "es", "de"];

  // Set button label
  if (toggle && supportedLangs.includes(currentLang)) {
    toggle.innerHTML = `<i class="fas fa-language" aria-hidden="true"></i> ${currentLang.toUpperCase()}`;
  }

  // Dropdown toggle
  if (toggle && dropdown) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      dropdown.classList.toggle("show");
    });

    document.addEventListener("click", function (e) {
      if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("show");
      }
    });
  }

  // Redirect from root to preferred language
  document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname === "/") {
    const userLang = navigator.language.slice(0, 2).toLowerCase();
    const supportedLangs = ["en", "es", "de"];
    const redirectLang = supportedLangs.includes(userLang) ? userLang : "en";
    window.location.replace(`/${redirectLang}/`);
  }
});
});
