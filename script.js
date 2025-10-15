let closeMenuIcon = document.querySelector(".close");
let openMenuIcon = document.querySelector(".menu");
let navBar = document.querySelector(".nav-bar");
let navLinks = document.querySelectorAll("ul li a");
let goUp = document.querySelector(".go-to-up");
let logo = document.querySelector("nav img");

openMenuIcon.onclick = () => {
  navBar.classList.add("active");
};

closeMenuIcon.onclick = () => {
  navBar.classList.remove("active");
};

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navBar.classList.remove("active");
    navLinks.forEach((a) => {
      a.classList.remove("active");
    });
    link.classList.add("active");
  });
});

window.onscroll = () => {
  if (window.scrollY >= 600) {
    goUp.classList.add("active");
  } else {
    goUp.classList.remove("active");
  }
};

goUp.onclick = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
};

logo.onclick = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
};
