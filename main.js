function displayPopUp() {
  const shareButton = document.getElementById("myShareButton");
  const popUp = document.getElementById("myPopUp");

  shareButton.addEventListener("mouseout", () => {
    popUp.classList.remove("visible");
  });

  shareButton.addEventListener("click", () => {
    popUp.classList.toggle("visible");
  });
}

displayPopUp();
