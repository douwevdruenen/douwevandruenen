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
      scrollTopBtn.style.opacity = '1';
    } else {
      scrollTopBtn.style.transform = 'translateY(100px)';
      scrollTopBtn.style.opacity = '0';
    }
  });
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.text-box .tagbox, .text-box .home-button, iframe, .text-box h2, .text-box p, .text-box .extra-img, .category-box, .art-info, .extra-img-container, .collage h2, .collage p');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
    });

    revealElements.forEach(el => {
      el.classList.add('scroll-reveal');
      observer.observe(el);
    });
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }
}

window.addEventListener('load', initScrollReveal);

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

function goToProject6() {
  window.location.href = "royal-is-er-voor-jou.html";
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
    const overlayIframe = document.getElementById("img-overlay-iframe");
    overlay.style.display = "flex";

    if (el.tagName.toLowerCase() === "img") {
      overlayImg.src = el.src;
      overlayImg.style.display = "block";
      overlayVideo.style.display = "none";
      overlayIframe.style.display = "none";
      overlayVideo.pause();
      overlayVideo.src = "";
      overlayIframe.src = "";
    } else if (el.tagName.toLowerCase() === "video") {
      overlayVideo.src = el.currentSrc || el.src;
      overlayVideo.style.display = "block";
      overlayImg.style.display = "none";
      overlayIframe.style.display = "none";
      overlayVideo.play();
      overlayImg.src = "";
      overlayIframe.src = "";
    }
    overlayVideo.removeAttribute("controls");
  });
});

document.querySelectorAll(".fullscreen-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    const container = this.parentElement;
    const iframe = container.querySelector('.figma-embed');
    const overlay = document.getElementById("img-overlay");
    const overlayImg = document.getElementById("img-overlay-img");
    const overlayVideo = document.getElementById("img-overlay-video");
    const overlayIframe = document.getElementById("img-overlay-iframe");
    overlay.style.display = "flex";

    overlayIframe.src = iframe.src;
    overlayIframe.style.display = "block";
    overlayImg.style.display = "none";
    overlayVideo.style.display = "none";
    overlayVideo.pause();
    overlayVideo.src = "";
    overlayImg.src = "";
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
  const iframe = document.getElementById("img-overlay-iframe");
  iframe.src = "";
  iframe.style.display = "none";
});

function addListenerIfExists(selector, handler) {
  const el = document.getElementById(selector);
  if (el) {
    el.addEventListener("click", handler);
  }
}

addListenerIfExists("click-art", goToArt);
addListenerIfExists("click-project-1", goToProject1);
addListenerIfExists("click-project-2", goToProject2);
addListenerIfExists("click-project-3", goToProject3);
addListenerIfExists("click-project-4", goToProject4);
addListenerIfExists("click-project-5", goToProject5);
addListenerIfExists("click-project-6", goToProject6);

// Language Toggle
function toggleLanguage() {
  const currentLang = document.documentElement.getAttribute('data-lang') || 'nl';
  const newLang = currentLang === 'en' ? 'nl' : 'en';
  document.documentElement.setAttribute('data-lang', newLang);
  document.body.setAttribute('data-lang', newLang);
  localStorage.setItem('preferredLanguage', newLang);

  const langBtn = document.getElementById('lang-toggle');
  langBtn.textContent = newLang === 'en' ? 'NL' : 'EN';
}

// Initialize language preference on page load
window.addEventListener('load', function () {
  const savedLang = localStorage.getItem('preferredLanguage') || 'nl';
  document.documentElement.setAttribute('data-lang', savedLang);
  document.body.setAttribute('data-lang', savedLang);
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.textContent = savedLang === 'en' ? 'NL' : 'EN';
  }
});

// Hover preview for dropdown project items
(function () {
  const hoverSupport = window.matchMedia && window.matchMedia('(hover: hover)').matches;
  if (!hoverSupport) return; // skip touch

  const preview = document.getElementById('hover-preview');
  const previewVideo = document.getElementById('hover-preview-video');
  const previewImg = document.getElementById('hover-preview-img');
  const items = document.querySelectorAll('.dropdown-content .nav-button[data-preview]');
  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = document.querySelector('.dropdown-content');

  if (!preview || !items.length) return;

  function showPreview(src, e) {
    if (!src) return;
    const isVideo = /\.(mp4|webm|ogg)$/i.test(src);
    // prepare content
    if (isVideo) {
      previewImg.style.display = 'none';
      previewVideo.src = src;
      previewVideo.style.display = 'block';
      previewVideo.play().catch(() => { });
    } else {
      previewVideo.pause();
      previewVideo.src = '';
      previewVideo.style.display = 'none';
      previewImg.src = src;
      previewImg.style.display = 'block';
    }

    // show with transition
    preview.style.display = 'block';
    // ensure class addition happens on next frame so transition runs
    requestAnimationFrame(() => preview.classList.add('show'));
    movePreview(e);
  }

  function hidePreview() {
    // fade out; cleanup after transitionend
    preview.classList.remove('show');
  }

  function hidePreviewIfDropdownClosed() {
    if (!dropdownContent) {
      hidePreview();
      return;
    }

    const isOpen = window.getComputedStyle(dropdownContent).opacity === '1' && dropdownContent.style.pointerEvents !== 'none';
    if (!isOpen) {
      hidePreview();
    }
  }

  // cleanup when transition finishes
  preview.addEventListener('transitionend', (ev) => {
    if (ev.propertyName === 'opacity' && !preview.classList.contains('show')) {
      preview.style.display = 'none';
      previewVideo.pause();
      previewVideo.src = '';
      previewImg.src = '';
    }
  });

  function movePreview(e) {
    if (!e) return;
    const offsetX = 12;
    const offsetY = 18;
    const w = preview.offsetWidth || 280;
    const h = preview.offsetHeight || 158;
    // Always position bottom-left of the cursor
    let left = e.clientX - w - offsetX;
    let top = e.clientY + offsetY;
    // Clamp to viewport so it doesn't go fully off-screen
    if (left < 8) left = 8;
    if (top + h > window.innerHeight) top = Math.max(8, window.innerHeight - h - 8);
    preview.style.left = left + 'px';
    preview.style.top = top + 'px';
  }

  items.forEach(item => {
    const src = item.getAttribute('data-preview');
    item.addEventListener('mouseenter', (e) => showPreview(src, e));
    item.addEventListener('mousemove', (e) => movePreview(e));
    item.addEventListener('mouseleave', hidePreview);
  });

  if (dropdown) {
    dropdown.addEventListener('mouseleave', hidePreview);
  }

  // hide preview if dropdown closes due to click or menu state changes
  document.addEventListener('click', (event) => {
    if (dropdown && !dropdown.contains(event.target)) {
      hidePreview();
    }
  });

  window.addEventListener('mousemove', hidePreviewIfDropdownClosed);
  window.addEventListener('scroll', hidePreviewIfDropdownClosed);
})();
