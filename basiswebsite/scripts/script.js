console.log("hi");


var openButton = document.querySelector("header > button");

openButton.onclick = openMenu;

function openMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}

var sluitButton = document.querySelector("nav button");


sluitButton.onclick = sluitMenu;

function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");

}

menuButton.onclick = function () {
  const isMenuOpen = deNav.classList.toggle("toonMenu");
}


closeButton.onclick = function () {
  deNav.classList.remove("toonMenu");
};











