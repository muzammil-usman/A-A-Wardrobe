var colorChanger = () => {
  let dropDown = document.createElement("div");
  dropDown.setAttribute("class", "dropdown");
  dropDown.innerHTML = `<a href="">Home</a><a href="">Product</a> <a href="">about </a><a href="">Contact </a>`;
  let main = document.getElementById("main-cont");
  main.appendChild(dropDown);
};

var bars = document.getElementById("icon");
bars.addEventListener("click", colorChanger);
