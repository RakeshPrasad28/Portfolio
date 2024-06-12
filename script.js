const arrowBtn = document.querySelector(".arrow");

addEventListener("scroll", () => {
  if (pageYOffset > 85) {
    arrowBtn.classList.add("arrow");
  } else {
    arrowBtn.classList.remove("arrow");
  }
});
