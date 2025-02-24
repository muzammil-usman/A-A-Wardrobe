document.addEventListener("DOMContentLoaded", function () {
  let texts = ["Welcome to A & A Wardrobe", "Shop all in one roof..."]; // Multiple texts
  let textIndex = 0; // Current text ka index
  let charIndex = 0;
  let typingText = document.getElementById("typing-text");
  let isDeleting = false;

  function typeWriter() {
    let currentText = texts[textIndex]; // Current text choose karega

    if (!isDeleting && charIndex < currentText.length) {
      typingText.innerHTML += currentText.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 100);
    } else if (isDeleting && charIndex > 0) {
      typingText.innerHTML = currentText.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeWriter, 100);
    } else {
      if (!isDeleting) {
        setTimeout(() => {
          isDeleting = true;
          typeWriter();
        }, 1000); // Thoda delay jab pura text likh jaye
      } else {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; // Next text par move karega
        setTimeout(typeWriter, 500); // Thoda delay naya text start hone se pehle
      }
    }
  }

  typeWriter();
});

// Navbar dropdown toggle
var colorChanger = () => {
  let existingDropDown = document.querySelector(".dropdown");

  if (existingDropDown) {
    existingDropDown.remove();
  } else {
    let dropDown = document.createElement("div");
    dropDown.setAttribute("class", "dropdown");
    dropDown.innerHTML = `<a href="">Home</a><a href="">Products</a> <a href="">Contact</a>`;

    let main = document.getElementById("main-cont");
    main.appendChild(dropDown);
  }
};

var bars = document.getElementById("icon");
bars.addEventListener("click", colorChanger);
