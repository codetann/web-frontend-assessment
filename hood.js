const restaurantButton = document.getElementById("restaurant-button");
const restaurantInfo = document.querySelector(".restaurant-info");

const restaurantsArray = [
  "Taco Bell",
  "Wendys",
  "McDonalds",
  "Cafe Rio",
  "Arbys",
  "Panda Express",
];

restaurantButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * restaurantsArray.length);

  restaurantInfo.textContent = restaurantsArray[randomIndex];
});
