document.addEventListener("DOMContentLoaded", () => {
  const contactButton = document.getElementById("openContainer");
  const containerDiv = document.querySelector(".container");
  const closeButton = document.querySelector(".close-icon");

  // Show the container div with animation
  contactButton.addEventListener("click", () => {
    containerDiv.classList.remove("hide");
    containerDiv.classList.add("show");
  });

  // Hide the container div with animation
  closeButton.addEventListener("click", () => {
    containerDiv.classList.remove("show");
    containerDiv.classList.add("hide");
  });
});
