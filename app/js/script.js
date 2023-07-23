const buttonHamburger = document.getElementById("buttonHamburger");
const closeButton = document.getElementById("closeButton");
const overlay = document.getElementById("overlay");

function toggleElements() {
  buttonHamburger.classList.toggle("hidden");
  closeButton.classList.toggle("hidden");

  if (buttonHamburger.classList.contains("hidden")) {
    overlay.classList.add("hidden");
    links.classList.remove("links");
    links.classList.add("mobile_links");
  } else {
    overlay.classList.remove("hidden");
    links.classList.remove("mobile_links");
    links.classList.add("links");
  }
}
