// gsap animation of navbar
var timeLine = gsap.timeline();

timeLine.from(".logo", {
  y: -20,
  opacity: 0,
  duration: 1,
});
timeLine.from("a", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

// Navbar dropdown toggle
var colorChanger = () => {
  let existingDropDown = document.querySelector(".dropdown");

  if (existingDropDown) {
    existingDropDown.remove();
  } else {
    let dropDown = document.createElement("div");
    dropDown.setAttribute("class", "dropdown");
    dropDown.innerHTML = `<a href="">Home</a><a href="">Categories</a> <a href="">Why choose us</a> <a href="">Contact</a>`;

    let main = document.getElementById("main-cont");
    main.appendChild(dropDown);
  }
};

var bars = document.getElementById("icon");
bars.addEventListener("click", colorChanger);

// typewriter animation on landing page

document.addEventListener("DOMContentLoaded", function () {
  let texts = ["Welcome to A & A Wardrobe", "Shop all in one roof..."];
  let textIndex = 0;
  let charIndex = 0;
  let typingText = document.getElementById("typing-text");
  let isDeleting = false;

  function typeWriter() {
    let currentText = texts[textIndex];

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
        }, 1000);
      } else {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, 500);
      }
    }
  }

  typeWriter();
});

// gsap categories animation

gsap.from(".mens", {
  scale: 0,
  duration: 2,
  x: -500,
  scrollTrigger: {
    trigger: ".categories",
    scroller: ".main",
    start: "top 50%",
    end: "top 25%",
    scrub: 2,
    // markers: true,
  },
});

gsap.from(".womens", {
  scale: 0,
  duration: 2,
  x: -500,
  scrollTrigger: {
    trigger: ".categories",
    scroller: ".main",
    start: "top 50%",
    end: "top 25%",
    scrub: 2,
    // markers: true,
  },
});
