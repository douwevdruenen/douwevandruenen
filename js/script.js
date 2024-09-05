// var userPreference = localStorage.getItem("darkMode");

// if (userPreference) {
//   var navLogo = document.getElementById("nav-logo");
//   var scrollDown = document.getElementById("scrolldown");
//   var footerLogo = document.getElementById("footer-logo"); // Add this line

//   if (userPreference === "true") {
//     document.getElementById("dark-mode-toggle").checked = true;
//     document.body.classList.add("dark-mode");
//     var isIndexPage;
//     if (navLogo) navLogo.src = "img/logo-met-naam-licht.svg";
//     if (scrollDown) scrollDown.src = "img/scrolldown-light.svg";
//     if (footerLogo) footerLogo.src = "img/footer-logo-light.svg"; // Add this line
//   } else {
//     document.getElementById("dark-mode-toggle").checked = false;
//     document.body.classList.remove("dark-mode");
//     if (navLogo) navLogo.src = "img/logo-met-naam.svg";
//     if (scrollDown) scrollDown.src = "img/scrolldown.svg";
//     if (footerLogo) footerLogo.src = "img/footer-logo.svg"; // Add this line
//   }
// } else if (
//   window.matchMedia &&
//   window.matchMedia("(prefers-color-scheme: dark)").matches
// ) {
//   document.getElementById("dark-mode-toggle").checked = true;
//   document.body.classList.add("dark-mode");
//   var navLogo = document.getElementById("nav-logo");
//   var scrollDown = document.getElementById("scrolldown");
//   var footerLogo = document.getElementById("footer-logo"); // Add this line
//   if (navLogo) navLogo.src = "img/logo-met-naam-licht.svg";
//   if (scrollDown) scrollDown.src = "img/scrolldown-light.svg";
//   if (footerLogo) footerLogo.src = "img/footer-logo-light.svg"; // Add this line
//   localStorage.setItem("darkMode", "true");
// }

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

function goToAnimation() {
  window.location.href = "animation.html";
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

// Check the current page and set the default mode
var pathname = window.location.pathname;
var darkModePages = ["/animation.html", "/art.html", "/cmd.html"];
var lightModePages = ["/", "/index.html"];
var darkModeToggle = document.getElementById("dark-mode-toggle");

if (darkModePages.includes(pathname)) {
  document.body.classList.add("dark-mode");
  var navLogo = document.getElementById("nav-logo");
  var scrollDown = document.getElementById("scrolldown");
  var footerLogo = document.getElementById("footer-logo");

  if (navLogo) navLogo.src = "img/logo-met-naam-licht.svg";
  if (scrollDown) scrollDown.src = "img/scrolldown-light.svg";
  if (footerLogo) footerLogo.src = "img/footer-logo-light.svg";
} else if (lightModePages.includes(pathname)) {
  document.body.classList.remove("dark-mode");
  var navLogo = document.getElementById("nav-logo");
  var scrollDown = document.getElementById("scrolldown");
  var footerLogo = document.getElementById("footer-logo");

  if (navLogo) navLogo.src = "img/logo-met-naam.svg";
  if (scrollDown) scrollDown.src = "img/scrolldown.svg";
  if (footerLogo) footerLogo.src = "img/footer-logo.svg";
}

if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
  if (darkModeToggle) darkModeToggle.checked = true;
} else if (darkModePages.includes(pathname)) {
  document.body.classList.add("dark-mode");
  if (darkModeToggle) darkModeToggle.checked = true;
} else if (lightModePages.includes(pathname)) {
  document.body.classList.remove("dark-mode");
  if (darkModeToggle) darkModeToggle.checked = false;
}

document
  .getElementById("dark-mode-toggle")
  .addEventListener("change", function () {
    var navLogo = document.getElementById("nav-logo");
    var scrollDown = document.getElementById("scrolldown");
    var footerLogo = document.getElementById("footer-logo");

    if (this.checked) {
      document.body.classList.add("dark-mode");
      if (navLogo) navLogo.src = "img/logo-met-naam-licht.svg";
      if (scrollDown) scrollDown.src = "img/scrolldown-light.svg";
      if (footerLogo) footerLogo.src = "img/footer-logo-light.svg";
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark-mode");
      if (navLogo) navLogo.src = "img/logo-met-naam.svg";
      if (scrollDown) scrollDown.src = "img/scrolldown.svg";
      if (footerLogo) footerLogo.src = "img/footer-logo.svg";
      localStorage.setItem("darkMode", "false");
    }
  });
