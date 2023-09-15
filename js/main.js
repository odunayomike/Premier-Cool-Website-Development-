// STICKY NAVBAR
let prevScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("sticky-navbar");
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > 100) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-80px";
  }
  if (currentScrollPos < prevScrollPos) {
    navbar.style.top = "0";
  }

  prevScrollPos = currentScrollPos;
});

// MOBILE MENU
const mobile_menu_close = document.querySelector(".mobile-menu-close");
const mobile_menu_btn = document.querySelector(".mobile-menu-btn");
const mobile_menu = document.querySelector(".mobile-menu");
const navbar_brand = document.querySelector(".navbar-brand");
const myNavbar = document.querySelector(".myNavbar");
const search = document.querySelector(".search");
const mobile_search = document.querySelector(".mobile-search");



mobile_menu_btn.addEventListener("click", () => {
  if (mobile_menu.classList.contains("mobile-menu-off")) {
    mobile_menu.classList.remove("mobile-menu-off");
    mobile_search.classList.remove("mobile-menu-off");
    navbar_brand.classList.add("mobile-menu-off");
    myNavbar.classList.add("mobile-menu-off");
    search.classList.add("mobile-menu-off");
    mobile_menu_btn.classList.add("mobile-menu-off");
  } else {
    mobile_menu.classList.add("mobile-menu-off");
  }
});
mobile_menu_close.addEventListener("click", () => {
  mobile_menu.classList.add("mobile-menu-off");
  mobile_search.classList.add("mobile-menu-off");
  navbar_brand.classList.remove("mobile-menu-off");
  myNavbar.classList.remove("mobile-menu-off");
  mobile_menu_btn.classList.remove("mobile-menu-off");
  
});

const divItems = document.querySelectorAll(".soapslider-inner");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function showDiv(index) {
  divItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active");
      dots[i].classList.add("active");
    } else {
      item.classList.remove("active");
      dots[i].classList.remove("active");
    }
  });
}

function switchDivs() {
  currentIndex = (currentIndex + 1) % divItems.length;
  showDiv(currentIndex);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showDiv(currentIndex);
  });
});

showDiv(currentIndex);
setInterval(switchDivs, 5000);

// IMG VIDEO CAROUSEL

const scrollContainers = document.querySelectorAll("#infiniteScroll--left");

scrollContainers.forEach((container) => {
  const scrollWidth = container.scrollWidth;
  let isScrollingPaused = false;

  window.addEventListener("load", () => {
    self.setInterval(() => {
      if (isScrollingPaused) {
        return;
      }
      const first = container.querySelector(".wrapper");

      if (!isElementInViewport(first)) {
        container.appendChild(first);
        container.scrollTo(container.scrollLeft - first.offsetWidth, 0);
      }
      if (container.scrollLeft !== scrollWidth) {
        container.scrollTo(container.scrollLeft + 1, 0);
      }
    }, 15);
  });

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.right > 0;
  }

  function pauseScrolling() {
    isScrollingPaused = true;
  }

  function resumeScrolling() {
    isScrollingPaused = false;
  }
  const allArticles = container.querySelectorAll(".wrapper");
  for (let article of allArticles) {
    article.addEventListener("mouseenter", pauseScrolling);
    article.addEventListener("mouseleave", resumeScrolling);
  }
});

const caroulsell = document.querySelector(".caroulsell");
const items = document.querySelectorAll(".caroulsell-item");

function position(current, active) {
  const diff = current - active;
  return Math.abs(diff) > 2 ? -current : diff;
}

function update(active) {
  const activePos = active.dataset.pos;
  for (const item of items) {
    item.dataset.pos = position(item.dataset.pos, activePos);
  }
}

const init = (e) => e.target.matches(".caroulsell-item") && update(e.target);

caroulsell.addEventListener("click", init, false);
