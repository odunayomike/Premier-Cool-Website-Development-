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
