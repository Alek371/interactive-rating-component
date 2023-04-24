console.log("first");

const ratingContainer = document.querySelector(".rating-component");
const thankuContainer = document.querySelector(".thanku-component");

const markSpan = document.querySelector(".mark");
const marks = document.querySelectorAll(".buttons");

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  thankuContainer.classList.remove("hidden");
  ratingContainer.style.display = "none";
});

marks.forEach((mark) => {
  mark.addEventListener("click", () => {
    console.log(mark.innerHTML);
    markSpan.innerHTML = mark.innerHTML;
  });
});
