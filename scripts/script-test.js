console.log("js running");

// hamburger menu met codepen

let menuOpenButton = document.querySelector("header div> ul button");

menuOpenButton.addEventListener("click", openMenu)

function openMenu() {
  let deNav = document.querySelector("header div nav:last-of-type");
  deNav.classList.add("is-open");
}

let menuSluitButton = document.querySelector("header div nav:last-of-type button")

menuSluitButton.addEventListener("click", sluitMenu)

function sluitMenu() {

  let deNav = document.querySelector("header div nav:last-of-type")
  deNav.classList.remove("is-open")
}

// intersection observer header

// student assistent viresh geholpen

const div = document.querySelector("div");
const FirstSection = document.querySelector("main section:nth-of-type(1)");

const observer = new IntersectionObserver(

  (entries) => {
    const entry = entries[0];

    if (!entry.isIntersecting) {
      div.classList.add("transparent");

    } else {
      div.classList.remove("transparent");
    }
  },
  {
  }
);

observer.observe(FirstSection);

// video

// mbv codepen sanne https://codepen.io/shooft/pen/MYKjaXd

let videoButton = document.querySelector("main section:nth-of-type(3) button");
let videoButtonImg = document.querySelector("main section:nth-of-type(3) button img");

let deVideo = document.querySelector("main section:nth-of-type(3) video ");

if (videoButton) {
  videoButton.addEventListener("click", toggleVideo);
}

function toggleVideo() {

  if (deVideo.paused == true) {
    deVideo.play();

    videoButtonImg.src = "images/pause3.svg";
    videoButtonImg.alt = "pauze";

  } else {
    deVideo.pause();


    videoButtonImg.src = "images/play.svg";
    videoButtonImg.alt = "play";
  }

}

// tab part page 2
// student assistent julian geholpen

const button1 = document.querySelector("main section:nth-of-type(1) nav button:nth-of-type(1)");
const button2 = document.querySelector("main section:nth-of-type(1) nav button:nth-of-type(2)");
const button3 = document.querySelector("main section:nth-of-type(1) nav button:nth-of-type(3)");


const section1 = document.querySelector("main section:nth-of-type(1) article:nth-of-type(1)");
const section2 = document.querySelector("main section:nth-of-type(1) article:nth-of-type(2)");
const section3 = document.querySelector("main section:nth-of-type(1) article:nth-of-type(3)");


button1.addEventListener("click", () => {
  section1.removeAttribute("hidden");
  section2.setAttribute("hidden", "");
  section3.setAttribute("hidden", "");
});

button2.addEventListener("click", () => {
  section1.setAttribute("hidden", "");
  section2.removeAttribute("hidden");
  section3.setAttribute("hidden", "");
});

button3.addEventListener("click", () => {
  section1.setAttribute("hidden", "");
  section2.setAttribute("hidden", "");
  section3.removeAttribute("hidden");
});











