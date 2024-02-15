function scrollToBottom() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function goToArt() {
  window.location.href = "art.html";
}

function goToHome() {
  window.location.href = "/";
}

function goToDesign() {
  window.location.href = "design.html";
}

function goToCmd() {
  window.location.href = "cmd.html";
}

var lastScrollTop = 0;
$(window).scroll(function () {
  var currentScrollTop = $(this).scrollTop();
  if (currentScrollTop > lastScrollTop) {
    $("nav").addClass("scroll-up");
  } else {
    $("nav").removeClass("scroll-up");
  }
  lastScrollTop = currentScrollTop;
});

if (localStorage.getItem("darkMode")) {
  document.body.classList.add("dark-mode");
}

document
  .getElementById("dark-mode-toggle")
  .addEventListener("change", function () {
    var homeFoto = document.getElementById("home-foto");
    var navLogo = document.getElementById("nav-logo");
    var scrollDown = document.getElementById("scrolldown");
    var footerLogo = document.getElementById("footer-logo"); // Add this line

    if (this.checked) {
      document.body.classList.add("dark-mode");
      if (homeFoto) homeFoto.src = "img/foto-home-white.svg";
      if (navLogo) navLogo.src = "img/logo-met-naam-licht.svg";
      if (scrollDown) scrollDown.src = "img/scrolldown-light.svg";
      if (footerLogo) footerLogo.src = "img/footer-logo-light.svg"; // Add this line
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      if (homeFoto) homeFoto.src = "img/foto-home.svg";
      if (navLogo) navLogo.src = "img/logo-met-naam.svg";
      if (scrollDown) scrollDown.src = "img/scrolldown.svg";
      if (footerLogo) footerLogo.src = "img/footer-logo.svg"; // Add this line
      localStorage.setItem("darkMode", "false");
    }
  });

var userPreference = localStorage.getItem("darkMode");

if (userPreference) {
  var navLogo = document.getElementById("nav-logo");
  var scrollDown = document.getElementById("scrolldown");
  var footerLogo = document.getElementById("footer-logo"); // Add this line

  if (userPreference === "true") {
    document.getElementById("dark-mode-toggle").checked = true;
    document.body.classList.add("dark-mode");
    var homeFoto = document.getElementById("home-foto");
    var isIndexPage;
    if (homeFoto) homeFoto.src = "img/foto-home-white.svg";
    if (navLogo) navLogo.src = "img/logo-met-naam-licht.svg";
    if (scrollDown) scrollDown.src = "img/scrolldown-light.svg";
    if (footerLogo) footerLogo.src = "img/footer-logo-light.svg"; // Add this line
  } else {
    document.getElementById("dark-mode-toggle").checked = false;
    document.body.classList.remove("dark-mode");
    if (navLogo) navLogo.src = "img/logo-met-naam.svg";
    if (scrollDown) scrollDown.src = "img/scrolldown.svg";
    if (footerLogo) footerLogo.src = "img/footer-logo.svg"; // Add this line
  }
} else if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.getElementById("dark-mode-toggle").checked = true;
  document.body.classList.add("dark-mode");
  document.getElementById("home-foto").src = "img/foto-home-white.svg";
  var navLogo = document.getElementById("nav-logo");
  var scrollDown = document.getElementById("scrolldown");
  var footerLogo = document.getElementById("footer-logo"); // Add this line
  if (navLogo) navLogo.src = "img/logo-met-naam-licht.svg";
  if (scrollDown) scrollDown.src = "img/scrolldown-light.svg";
  if (footerLogo) footerLogo.src = "img/footer-logo-light.svg"; // Add this line
  localStorage.setItem("darkMode", "true");
}
