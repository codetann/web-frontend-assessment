const profileBtns = document.querySelectorAll(".profile-button");

profileBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let favorite = "";
    switch (e.target.id) {
      case "color":
        favorite = "Blue";
      case "place":
        favorite = "Hawaii";
      case "ritual":
        favorite = "Sleeping";
    }

    alert(`My favorite ${e.target.id} is ${favorite}`);
  });
});
