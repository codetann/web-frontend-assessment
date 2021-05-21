function handleSubmit(evt) {
  evt.preventDefault();

  alert("Form Submitted Successfully");
}

function handleMouseOver() {
  alert("You are amazing. Dont ever forget that.");
}

let form = document.querySelector("form#contact");
let img = document.querySelector("img");

form.addEventListener("submit", handleSubmit);
img.addEventListener("mouseover", handleMouseOver);
