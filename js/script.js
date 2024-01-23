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
  window.location.href = "index.html";
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
    var isIndexPage = window.location.pathname.endsWith("index.html");

    if (this.checked) {
      document.body.classList.add("dark-mode");
      if (homeFoto && isIndexPage) homeFoto.src = "img/foto-home-white.svg";
      localStorage.setItem("darkMode", true);
    } else {
      document.body.classList.remove("dark-mode");
      if (homeFoto && isIndexPage) homeFoto.src = "img/foto-home.svg";
      localStorage.removeItem("darkMode");
    }
  });

if (localStorage.getItem("darkMode")) {
  document.getElementById("dark-mode-toggle").checked = true;
  document.body.classList.add("dark-mode");
  var homeFoto = document.getElementById("home-foto");
  var isIndexPage = window.location.pathname.endsWith("index.html");
  if (homeFoto && isIndexPage) homeFoto.src = "img/foto-home-white.svg";
}
