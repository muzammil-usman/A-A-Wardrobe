var colorChanger = () => {
  let existingDropDown = document.querySelector(".dropdown");

  if (existingDropDown) {
    existingDropDown.remove(); // Agar dropdown already exist kare toh usay hata do
  } else {
    let dropDown = document.createElement("div");
    dropDown.setAttribute("class", "dropdown");
    dropDown.innerHTML = `<a href="">Home</a><a href="">Products</a> <a href="">About </a><a href="">Contact </a>`;

    let main = document.getElementById("main-cont");
    main.appendChild(dropDown);
  }
};

var bars = document.getElementById("icon");
bars.addEventListener("click", colorChanger);
