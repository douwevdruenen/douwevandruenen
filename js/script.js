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
