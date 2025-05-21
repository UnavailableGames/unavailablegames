document.addEventListener("DOMContentLoaded", function () {
  const placeholder = document.getElementById("navbar-placeholder");
  if (!placeholder) return;

  fetch("nav.html")
    .then((res) => res.text())
    .then((data) => {
      placeholder.innerHTML = data;

      // Add mobile toggle function (if used)
      window.toggleMenu = function () {
        const navLinks = document.getElementById("navLinks");
        navLinks.classList.toggle("active");
      };
    });
});
