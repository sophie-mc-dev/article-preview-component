function displayPopUp() {
  const shareButton = document.getElementById("myShareButton");
  const popUp = document.getElementById("myPopUp");

  shareButton.addEventListener("mouseover", () => {
    popUp.classList.add("visible");
  });

  popUp.addEventListener("mouseout", () => {
    popUp.classList.remove("visible");
  });

  popUp.addEventListener("mouseover", () => {
    popUp.classList.add("visible");
  });

  shareButton.addEventListener("click", () => {
    popUp.classList.toggle("visible");
  });
}

displayPopUp();
