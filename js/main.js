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

showDiv(currentIndex); // Show the initial div

// Start the switching process
setInterval(switchDivs, 5000); // Switch every 5 seconds
