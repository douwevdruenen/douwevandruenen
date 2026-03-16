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

const buttonRights = document.querySelectorAll('.scroll-right');
const buttonLefts = document.querySelectorAll('.scroll-left');

buttonRights.forEach(button => {
  button.onclick = function () {
    const container = button.parentElement;
    const box = container.querySelector('.extra-img-box');
    box.scrollBy({ left: window.innerWidth * 1, behavior: 'smooth' });
  };
});

buttonLefts.forEach(button => {
  button.onclick = function () {
    const container = button.parentElement;
    const box = container.querySelector('.extra-img-box');
    box.scrollBy({ left: -window.innerWidth * 1, behavior: 'smooth' });
  };
});

function updateButtons(container) {
  const box = container.querySelector('.extra-img-box');
  const leftBtn = container.querySelector('.scroll-left');
  const rightBtn = container.querySelector('.scroll-right');
  const hasOverflow = box.scrollWidth > box.clientWidth;
  const atStart = box.scrollLeft <= 0;
  const atEnd = box.scrollLeft + box.clientWidth >= box.scrollWidth - 1;
  leftBtn.style.display = hasOverflow && !atStart ? 'block' : 'none';
  rightBtn.style.display = hasOverflow && !atEnd ? 'block' : 'none';
}

const containers = document.querySelectorAll('.extra-img-container');
containers.forEach(container => {
  const box = container.querySelector('.extra-img-box');
  box.addEventListener('scroll', () => updateButtons(container));
});

function checkOverflow() {
  containers.forEach(container => {
    updateButtons(container);
  });
}

window.addEventListener('load', checkOverflow);
window.addEventListener('resize', checkOverflow);

// Scroll-to-top button visibility
const scrollTopBtn = document.getElementById('scroll-top');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollTopBtn.style.transform = 'translateY(0)';
    } else {
      scrollTopBtn.style.transform = 'translateY(100px)';
    }
  });
}

function goToArt() {
  window.location.href = "digital-art.html";
}

function goToHome() {
  window.location.href = "/";
}

function goToProject1() {
  window.location.href = "royal-in-motion.html";
}

function goToProject2() {
  window.location.href = "had-je-maar.html";
}

function goToProject3() {
  window.location.href = "knip-musical.html";
}

function goToProject4() {
  window.location.href = "echoes-in-the-sand.html";
}

function goToProject5() {
  window.location.href = "cbs-internship.html";
}

function goToAbout() {
  window.location.href = "about.html";
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

// // Check the current page and set the default mode
// var pathname = window.location.pathname;
// var darkModePages = ["/animation.html", "/art.html", "/cmd.html"];
// var lightModePages = ["/", "/index.html"];
// var darkModeToggle = document.getElementById("dark-mode-toggle");

// if (darkModePages.includes(pathname)) {
//   document.body.classList.add("dark-mode");
//   var navLogo = document.getElementById("nav-logo");
//   var scrollDown = document.getElementById("scrolldown");
//   var footerLogo = document.getElementById("footer-logo");

//   if (navLogo) navLogo.src = "img/logo-met-naam-licht.svg";
//   if (scrollDown) scrollDown.src = "img/scrolldown-light.svg";
//   if (footerLogo) footerLogo.src = "img/footer-logo-light.svg";
// } else if (lightModePages.includes(pathname)) {
//   document.body.classList.remove("dark-mode");
//   var navLogo = document.getElementById("nav-logo");
//   var scrollDown = document.getElementById("scrolldown");
//   var footerLogo = document.getElementById("footer-logo");

//   if (navLogo) navLogo.src = "img/logo-met-naam.svg";
//   if (scrollDown) scrollDown.src = "img/scrolldown.svg";
//   if (footerLogo) footerLogo.src = "img/footer-logo.svg";
// }

// if (localStorage.getItem("darkMode") === "true") {
//   document.body.classList.add("dark-mode");
//   if (darkModeToggle) darkModeToggle.checked = true;
// } else if (darkModePages.includes(pathname)) {
//   document.body.classList.add("dark-mode");
//   if (darkModeToggle) darkModeToggle.checked = true;
// } else if (lightModePages.includes(pathname)) {
//   document.body.classList.remove("dark-mode");
//   if (darkModeToggle) darkModeToggle.checked = false;
// }

// document
//   .getElementById("dark-mode-toggle")
//   .addEventListener("change", function () {
//     var navLogo = document.getElementById("nav-logo");
//     var scrollDown = document.getElementById("scrolldown");
//     var footerLogo = document.getElementById("footer-logo");

//     if (this.checked) {
//       document.body.classList.add("dark-mode");
//       if (navLogo) navLogo.src = "img/logo-met-naam-licht.svg";
//       if (scrollDown) scrollDown.src = "img/scrolldown-light.svg";
//       if (footerLogo) footerLogo.src = "img/footer-logo-light.svg";
//       localStorage.setItem("darkMode", "true");
//     } else {
//       document.body.classList.remove("dark-mode");
//       if (navLogo) navLogo.src = "img/logo-met-naam.svg";
//       if (scrollDown) scrollDown.src = "img/scrolldown.svg";
//       if (footerLogo) footerLogo.src = "img/footer-logo.svg";
//       localStorage.setItem("darkMode", "false");
//     }
//   });

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

function checkExtraImgBoxWidth() {
  var extraImgBoxes = document.querySelectorAll(".extra-img-box");

  extraImgBoxes.forEach(function (box) {
    // Temporarily set to flex-start to measure overflow
    const originalJustify = box.style.justifyContent;
    box.style.justifyContent = "flex-start";

    // Now measure
    if (box.scrollWidth > box.clientWidth) {
      box.classList.add("extra-img-box-full");
    } else {
      box.classList.remove("extra-img-box-full");
    }

    // Restore original justify-content if needed
    box.style.justifyContent = originalJustify;
  });
}

window.addEventListener("load", checkExtraImgBoxWidth);
window.addEventListener("resize", checkExtraImgBoxWidth);

document.querySelectorAll(".extra-img-box").forEach((box) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  box.addEventListener("mousedown", (e) => {
    isDown = true;
    box.classList.add("dragging");
    startX = e.pageX - box.offsetLeft;
    scrollLeft = box.scrollLeft;
    e.preventDefault();
  });

  box.addEventListener("mouseleave", () => {
    isDown = false;
    box.classList.remove("dragging");
  });

  box.addEventListener("mouseup", () => {
    isDown = false;
    box.classList.remove("dragging");
  });

  box.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - box.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed
    box.scrollLeft = scrollLeft - walk;
  });
});

document.querySelectorAll(".extra-img").forEach((el) => {
  el.addEventListener("click", function (e) {
    e.stopPropagation();
    const overlay = document.getElementById("img-overlay");
    const overlayImg = document.getElementById("img-overlay-img");
    const overlayVideo = document.getElementById("img-overlay-video");
    overlay.style.display = "flex";

    if (el.tagName.toLowerCase() === "img") {
      overlayImg.src = el.src;
      overlayImg.style.display = "block";
      overlayVideo.style.display = "none";
      overlayVideo.pause();
      overlayVideo.src = "";
    } else if (el.tagName.toLowerCase() === "video") {
      overlayVideo.src = el.currentSrc || el.src;
      overlayVideo.style.display = "block";
      overlayImg.style.display = "none";
      overlayVideo.play();
    }
    overlayVideo.removeAttribute("controls");
  });
});

// Hide overlay on click
document.getElementById("img-overlay").addEventListener("click", function () {
  this.style.display = "none";
  document.getElementById("img-overlay-img").src = "";
  const vid = document.getElementById("img-overlay-video");
  vid.pause();
  vid.src = "";
  vid.style.display = "none";
});

document.getElementById("click-art").addEventListener("click", goToArt);
document
  .getElementById("click-project-1")
  .addEventListener("click", goToProject1);
document
  .getElementById("click-project-2")
  .addEventListener("click", goToProject2);
document
  .getElementById("click-project-3")
  .addEventListener("click", goToProject3);
document
  .getElementById("click-project-4")
  .addEventListener("click", goToProject4);
document
  .getElementById("click-project-5")
  .addEventListener("click", goToProject5);
