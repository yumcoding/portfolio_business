const toggleBtn = document.querySelector(".toggle-menu-btn");
const menuList = document.querySelector(".nav-menu-list");

const navBar = document.querySelector(".page-header");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

//toggle menu (mobile)
const toggleMenu = () => {
  toggleBtn.classList.toggle("close");
  menuList.classList.toggle("show");
};

// show nav on scroll
const showNav = () => {
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    navBar.classList.add("colored");
  } else {
    navBar.classList.remove("colored");
  }
};

//smooth scrolling when clicking a nav menu
const smoothScrolling = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const href = e.target.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};

// change nav bar menu color
const changeNavColor = (id, color) => {
  navLinks.forEach((link) => {
    if (link.hash === `#${id}`) {
      link.style.color = color;
    }
  });
};
const findCurrentSection = () => {
  sections.forEach((section) => {
    if (
      section.getBoundingClientRect().top <= window.innerHeight * 0.1 &&
      window.scrollY <= section.scrollHeight + section.offsetTop
    ) {
      changeNavColor(section.id, "#14bf98");
    } else {
      changeNavColor(section.id, "#fff");
    }
  });
};

//Event Listeners
toggleBtn.addEventListener("click", toggleMenu);
window.addEventListener("scroll", showNav);
window.addEventListener("scroll", findCurrentSection);
navBar.addEventListener("click", smoothScrolling);
