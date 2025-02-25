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

// // opacity on scroll
// function adjustOverlayOpacity() {
//   var parallaxElements = document.querySelectorAll(".parallax");
//   parallaxElements.forEach(function (element) {
//     var rect = element.getBoundingClientRect();
//     var windowHeight = window.innerHeight;
//     var overlay = element.querySelector(".parallax-overlay");

//     if (rect.top >= 0 && rect.bottom <= windowHeight) {
//       // Element is completely in the viewport
//       overlay.style.opacity = 0;
//     } else if (rect.bottom < 0 || rect.top > windowHeight) {
//       // Element is completely out of the viewport
//       overlay.style.opacity = 1;
//     } else {
//       // Element is partially in the viewport
//       var visibleHeight =
//         Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
//       var visiblePercentage = (visibleHeight / rect.height) * 100;

//       // // Set opacity based on the visible percentage
//       // if (visiblePercentage >= 80) {
//       //   overlay.style.opacity = 0;
//       // } else if (visiblePercentage <= 50) {
//       //   overlay.style.opacity = 1;
//       // } else {
//       //   // Interpolate opacity between 1 and 0 for visible percentages between 20% and 80%
//       //   overlay.style.opacity = 1 - (visiblePercentage - 50) / 30;
//       // }
//     }
//   });
// }

// // Add event listeners for the home button hover
// var homeButton = document.querySelector(".home-button");
// if (homeButton) {
//   homeButton.addEventListener("mouseover", function () {
//     var overlays = document.querySelectorAll(".parallax-overlay");
//     overlays.forEach(function (overlay) {
//       overlay.style.opacity = 0;
//     });
//   });

//   homeButton.addEventListener("mouseout", function () {
//     adjustOverlayOpacity();
//   });
// }

// window.addEventListener("scroll", adjustOverlayOpacity);
// window.addEventListener("resize", adjustOverlayOpacity);
// document.addEventListener("DOMContentLoaded", adjustOverlayOpacity);

// opacity on scroll
function adjustOverlayOpacity() {
  var parallaxElements = document.querySelectorAll(".parallax");
  parallaxElements.forEach(function (element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight;
    var overlay = element.querySelector(".parallax-overlay");

    if (rect.top >= 0 && rect.bottom <= windowHeight) {
      // Element is completely in the viewport
      overlay.style.opacity = 0;
    } else if (rect.bottom < 0 || rect.top > windowHeight) {
      // Element is completely out of the viewport
      overlay.style.opacity = 1;
    } else {
      // Element is partially in the viewport
      overlay.style.opacity = 1;
    }
  });
}

// Add event listeners for the home button hover
var homeButtons = document.querySelectorAll(".home-button");
homeButtons.forEach(function (homeButton) {
  homeButton.addEventListener("mouseover", function () {
    var parentParallax = homeButton.closest(".parallax");
    if (parentParallax) {
      var overlay = parentParallax.querySelector(".parallax-overlay");
      if (overlay) {
        overlay.style.opacity = 0;
      }
    }
  });

  homeButton.addEventListener("mouseout", function () {
    var parentParallax = homeButton.closest(".parallax");
    if (parentParallax) {
      var overlay = parentParallax.querySelector(".parallax-overlay");
      if (overlay) {
        adjustOverlayOpacity();
      }
    }
  });
});

window.addEventListener("scroll", adjustOverlayOpacity);
window.addEventListener("resize", adjustOverlayOpacity);
document.addEventListener("DOMContentLoaded", adjustOverlayOpacity);

function toggleMenu() {
  var navMenu = document.querySelector(".nav-menu");
  navMenu.classList.toggle("active");
  var hamMenu = document.querySelector(".hamburger-menu");
  hamMenu.classList.toggle("active");
  var navBackdrop = document.querySelector(".nav-backdrop");
  navBackdrop.classList.toggle("active");
  var navControl = document.querySelector("nav");
  navControl.classList.toggle("active");
}

document.addEventListener("click", function (event) {
  var navMenu = document.querySelector(".nav-menu");
  var hamMenu = document.querySelector(".hamburger-menu");
  var navBackdrop = document.querySelector(".nav-backdrop");
  var navControl = document.querySelector("nav");

  if (
    !navMenu.contains(event.target) &&
    !hamMenu.contains(event.target) &&
    navMenu.classList.contains("active")
  ) {
    navMenu.classList.remove("active");
    hamMenu.classList.remove("active");
    navBackdrop.classList.remove("active");
    navControl.classList.remove("active");
  }
});
